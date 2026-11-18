import Lenis from 'lenis'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import ScrollToTop from './ScrollToTop'

// Shared shell for every screen: Header + the current page (<Outlet />) + Footer.
// Smooth scrolling (Lenis) also lives here, so it is created once instead of on every page.
export default function Layout() {
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

  return (
    <>
      <Header />
      <main className="relative w-full">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
