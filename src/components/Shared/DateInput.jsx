import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

const pad = (n) => String(n).padStart(2, '0')
const toISO = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
const fromISO = (iso) => {
  if (!iso) return null
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d)
}
const toDDMMYYYY = (iso) => (iso ? iso.split('-').reverse().join('/') : '')

// A date field: click anywhere on it to open a styled calendar. The chosen date is shown as dd/mm/yyyy
// and submitted with the form as yyyy-mm-dd (a hidden input named `name`).
// `className` styles the field box itself (same classes the old <input> had); `children` is an optional leading icon.
export default function DateInput({ name, placeholder, className = '', placeholderClass = 'text-dark/50', required = false, min = undefined, children = null }) {
  const [value, setValue] = useState('')
  const [open, setOpen] = useState(false)
  const [view, setView] = useState(() => new Date()) // month being shown
  const [pos, setPos] = useState(null) // fixed position of the calendar (it is drawn above the page so no section can clip it)
  const box = useRef(null)
  const pop = useRef(null)
  const id = useId()

  const selected = fromISO(value)
  const minDate = fromISO(min)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // keep the calendar next to the field: below it, or above when there is more room there
  const measure = () => {
    if (!box.current) return
    const r = box.current.getBoundingClientRect()
    const width = Math.min(360, window.innerWidth - 32)
    const below = window.innerHeight - r.bottom - 16
    const above = r.top - 16
    const up = below < 400 && above > below
    setPos({
      width,
      left: Math.min(Math.max(r.left, 16), window.innerWidth - width - 16),
      maxHeight: Math.max(up ? above : below, 260),
      ...(up ? { bottom: window.innerHeight - r.top + 8 } : { top: r.bottom + 8 }),
    })
  }

  const openCalendar = () => {
    setView(selected ?? new Date())
    measure()
    setOpen(true)
  }

  // close on outside click / Escape
  useEffect(() => {
    if (!open) return
    const onDown = (e) => { if (!box.current?.contains(e.target) && !pop.current?.contains(e.target)) setOpen(false) }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    window.addEventListener('scroll', measure, true)
    window.addEventListener('resize', measure)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('scroll', measure, true)
      window.removeEventListener('resize', measure)
    }
  }, [open])

  const year = view.getFullYear()
  const month = view.getMonth()
  const blanks = new Date(year, month, 1).getDay()
  const days = new Date(year, month + 1, 0).getDate()
  const shift = (n) => setView(new Date(year, month + n, 1))
  const disabled = (d) => minDate && d < minDate
  const pick = (d) => { setValue(toISO(d)); setOpen(false) }

  const nav = 'grid size-9 cursor-pointer place-items-center rounded-full border-0 bg-transparent p-0 text-dark/70 transition-colors hover:bg-primary/20 hover:text-dark'

  return (
    <div ref={box} className={`relative text-left focus-within:border-primary ${className}`}>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => (open ? setOpen(false) : openCalendar())}
        className={`flex size-full cursor-pointer items-center gap-4 border-0 bg-transparent p-0 text-left ${value ? 'text-dark' : placeholderClass}`}
      >
        {children}
        <span className="min-w-0 flex-1 truncate">{toDDMMYYYY(value) || placeholder}</span>
      </button>

      {/* real value for the form; also makes `required` work (the browser points at the field) */}
      <input name={name} value={value} required={required} onChange={() => {}} tabIndex={-1} aria-hidden="true" className="pointer-events-none absolute inset-0 size-full opacity-0" />

      {open && pos && createPortal(
        <div
          ref={pop}
          id={id}
          role="dialog"
          aria-label={`Choose ${placeholder}`}
          style={pos}
          className="fixed z-[100] overflow-y-auto border border-primary/40 bg-white p-3 font-sans text-dark shadow-2xl"
        >
          <div className="mb-2 flex items-center justify-between">
            <button type="button" aria-label="Previous month" onClick={() => shift(-1)} className={nav}><FaChevronLeft /></button>
            <span className="font-serif text-dark">{MONTHS[month]} {year}</span>
            <button type="button" aria-label="Next month" onClick={() => shift(1)} className={nav}><FaChevronRight /></button>
          </div>

          <div className="grid grid-cols-7 text-center">
            {WEEKDAYS.map((w) => <span key={w} className="pb-1 text-dark/50">{w}</span>)}
            {Array.from({ length: blanks }, (_, i) => <span key={`b${i}`} />)}
            {Array.from({ length: days }, (_, i) => {
              const d = new Date(year, month, i + 1)
              const isSelected = selected && toISO(d) === toISO(selected)
              const isToday = toISO(d) === toISO(today)
              return (
                <button
                  key={i}
                  type="button"
                  disabled={disabled(d)}
                  onClick={() => pick(d)}
                  className={`mx-auto grid size-9 cursor-pointer place-items-center rounded-full border p-0 transition-colors disabled:cursor-not-allowed disabled:text-dark/25 disabled:hover:bg-transparent ${
                    isSelected ? 'border-primary bg-primary text-dark' : isToday ? 'border-primary bg-transparent text-dark hover:bg-primary/20' : 'border-transparent bg-transparent text-dark hover:bg-primary/20'
                  }`}
                >
                  {i + 1}
                </button>
              )
            })}
          </div>

          <div className="mt-2 flex items-center justify-between border-t border-primary/20 pt-2">
            <button type="button" onClick={() => setValue('')} className="cursor-pointer border-0 bg-transparent p-0 text-dark/60 hover:text-dark">Clear</button>
            <button type="button" disabled={disabled(today)} onClick={() => pick(today)} className="cursor-pointer border-0 bg-transparent p-0 font-semibold text-dark hover:text-primary disabled:cursor-not-allowed disabled:text-dark/25">Today</button>
          </div>
        </div>,
        document.body,
      )}
    </div>
  )
}
