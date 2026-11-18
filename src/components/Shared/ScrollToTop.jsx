import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'

export default function ScrollToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!show) return null
  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed right-5 bottom-5 z-70 grid size-10 cursor-pointer place-items-center rounded-full border-0 bg-white p-0 text-primary shadow"
    >
      <FaArrowUp />
    </button>
  )
}
