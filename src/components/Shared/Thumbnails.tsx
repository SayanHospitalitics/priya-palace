import { useEffect, useRef, useState } from 'react'

// A row of small photos under a big one. It is exactly as wide as the big photo (the parent's width) and shows as many
// thumbnails as fit in it. When there are more photos than fit, the last thumbnail shows "+N" (N = photos not shown);
// clicking it calls onMore(index of the first hidden photo). Used by every gallery.
type Props = {
  images: string[]
  active: number
  onSelect: (i: number) => void
  onMore: (firstHidden: number) => void
  className?: string
  thumbClassName?: string
}

export default function Thumbnails({ images, active, onSelect, onMore, className = '', thumbClassName = 'h-20 w-32' }: Props) {
  const row = useRef<HTMLDivElement>(null)
  const [fit, setFit] = useState(images.length)

  // count how many thumbnails (plus gaps) fit in the row's width; re-count when the width changes
  useEffect(() => {
    const el = row.current
    if (!el) return
    const measure = () => {
      const first = el.querySelector('button')
      if (!first) return
      const thumb = first.getBoundingClientRect().width
      const gap = parseFloat(getComputedStyle(el).columnGap) || 0
      setFit(Math.max(1, Math.floor((el.clientWidth + gap) / (thumb + gap))))
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [images.length])

  const shown = images.slice(0, fit)
  const extra = images.length - shown.length

  return (
    <div ref={row} className={`flex w-full gap-3 overflow-hidden ${extra > 0 || shown.length === fit ? 'justify-between' : ''} ${className}`}>
      {shown.map((src, i) => {
        const isMore = extra > 0 && i === shown.length - 1
        return (
          <button
            key={src}
            type="button"
            aria-label={isMore ? `Show ${extra} more photos` : `Show photo ${i + 1}`}
            onClick={() => (isMore ? onMore(shown.length) : onSelect(i))}
            className={`relative shrink-0 cursor-pointer overflow-hidden border-2 p-0 transition-opacity ${thumbClassName} ${i === active ? 'border-primary opacity-100' : 'border-transparent opacity-70 hover:opacity-100'}`}
          >
            <img src={src} alt="" className="block size-full object-cover" />
            {isMore && (
              <span className="absolute inset-0 grid place-items-center bg-dark/65 font-semibold text-white">+{extra}</span>
            )}
          </button>
        )
      })}
    </div>
  )
}
