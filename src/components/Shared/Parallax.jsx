import { useEffect, useRef } from 'react'

// An image that moves slower than the page while it scrolls through the viewport.
// The box clips it (overflow-hidden); the image is 30% taller so it has room to travel.
export default function Parallax({ src, alt = '', className = '', imgClassName = '', objectPosition, strength = 0.9 }) {
  const box = useRef(null)
  const img = useRef(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const el = box.current
      const im = img.current
      if (!el || !im) return
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      // -1 when the box enters at the bottom of the screen, +1 when it leaves at the top
      const p = Math.max(-1, Math.min(1, (vh / 2 - (r.top + r.height / 2)) / (vh / 2 + r.height / 2)))
      im.style.transform = `translate3d(0, ${p * strength * r.height * 0.5}px, 0)`
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [strength])

  return (
    <div ref={box} className={`${className.includes('absolute') ? '' : 'relative'} overflow-hidden ${className}`}>
      <img
        ref={img}
        src={src}
        alt={alt}
        style={{ objectPosition, height: `${100 + strength * 100}%`, top: `${-strength * 50}%` }}
        className={`absolute left-0 w-full max-w-none object-cover will-change-transform ${imgClassName}`}
      />
    </div>
  )
}
