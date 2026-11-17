import { useEffect, useRef, useState } from 'react'

// Photo that changes with a "slide & blur" transition: the old photo slides out blurred
// while the new one slides in sharp. Size it with className (e.g. "aspect-[16/10]").
// `contain` shows the whole photo instead of cropping it.
export default function SlideBlurImage({ src, alt = '', className = '', contain = false }) {
  const [prev, setPrev] = useState(null)
  const current = useRef(src)
  const fit = contain ? 'object-contain' : 'object-cover'

  useEffect(() => {
    if (current.current === src) return
    setPrev(current.current)
    current.current = src
    const t = setTimeout(() => setPrev(null), 600)
    return () => clearTimeout(t)
  }, [src])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {prev && <img key={`out-${prev}`} src={prev} alt="" aria-hidden="true" className={`absolute inset-0 z-10 size-full animate-slide-blur-out ${fit}`} />}
      <img key={src} src={src} alt={alt} className={`block size-full ${fit} ${prev ? 'animate-slide-blur-in' : ''}`} />
    </div>
  )
}
