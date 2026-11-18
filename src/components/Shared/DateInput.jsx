import { useRef, useState } from 'react'

// "2026-11-18" -> "18/11/2026"
const toDDMMYYYY = (iso) => (iso ? iso.split('-').reverse().join('/') : '')

// A date field that always shows the picked date as dd/mm/yyyy and opens the calendar when you click ANYWHERE on it.
// The real <input type="date"> sits invisibly on top of the whole field (so the click lands on it and showPicker() opens
// the calendar); the visible text underneath is the formatted value. `className` styles the whole field box.
export default function DateInput({ name, placeholder, className = '', placeholderClass = 'text-dark/50', required = false, min = undefined, children = null }) {
  const [value, setValue] = useState('')
  const input = useRef(null)

  const openCalendar = () => {
    try {
      input.current?.showPicker()
    } catch {
      /* older browsers: the native input still opens its own picker on click */
    }
  }

  return (
    <div className={`relative cursor-pointer text-left focus-within:border-primary ${className}`}>
      <span className={`flex h-full items-center gap-4 ${value ? '' : placeholderClass}`}>
        {children}
        {toDDMMYYYY(value) || placeholder}
      </span>
      <input
        ref={input}
        type="date"
        name={name}
        value={value}
        min={min}
        required={required}
        aria-label={placeholder}
        onChange={(e) => setValue(e.target.value)}
        onClick={openCalendar}
        className="absolute inset-0 size-full cursor-pointer opacity-0"
      />
    </div>
  )
}
