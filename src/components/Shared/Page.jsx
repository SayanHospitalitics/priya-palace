import Lenis from 'lenis'
import { useEffect } from 'react'

// Common page shell: sets the tab title and turns on smooth scrolling (Lenis).
export default function Page({ title, children }) {
  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 })
    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    })
    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return <div className="relative w-full">{children}</div>
}
