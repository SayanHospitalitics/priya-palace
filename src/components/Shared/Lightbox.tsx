import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { FaChevronLeft, FaChevronRight, FaXmark } from 'react-icons/fa6'
import SlideBlurImage from './SlideBlurImage'

type Props = { images: string[]; index: number; onChange: (i: number) => void; onClose: () => void; title?: string }

// Full-screen photo preview: big photo, previous/next arrows, close button and a strip with every photo.
export default function Lightbox({ images, index, onChange, onClose, title = '' }: Props) {
  const go = (i: number) => onChange((i + images.length) % images.length)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') go(index - 1)
      if (e.key === 'ArrowRight') go(index + 1)
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  })

  const arrow = 'absolute top-1/2 z-20 grid size-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full border-0 bg-white/15 text-medium text-white transition-colors hover:bg-primary'

  return createPortal(
    <div data-lenis-prevent role="dialog" aria-modal="true" aria-label={title || 'Photo preview'} className="fixed inset-0 z-95 flex flex-col bg-dark/95">
      <div className="flex items-center justify-between px-6 py-4 text-white">
        <span className="tracking-widest uppercase">{title}</span>
        <div className="flex items-center gap-6">
          <span className="tracking-widest">{index + 1} / {images.length}</span>
          <button type="button" aria-label="Close preview" onClick={onClose} className="grid size-11 cursor-pointer place-items-center rounded-full border-0 bg-white/15 text-medium text-white transition-colors hover:bg-primary">
            <FaXmark />
          </button>
        </div>
      </div>

      <div className="relative min-h-0 flex-1 px-4 sm:px-20" onClick={(e) => e.target === e.currentTarget && onClose()}>
        <button type="button" aria-label="Previous photo" onClick={() => go(index - 1)} className={`${arrow} left-4 sm:left-6`}><FaChevronLeft /></button>
        <SlideBlurImage src={images[index]} alt={`${title} photo ${index + 1}`} contain className="mx-auto h-full w-full" />
        <button type="button" aria-label="Next photo" onClick={() => go(index + 1)} className={`${arrow} right-4 sm:right-6`}><FaChevronRight /></button>
      </div>

      <div className="flex justify-center gap-2 overflow-x-auto px-6 py-5">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Show photo ${i + 1}`}
            onClick={() => onChange(i)}
            className={`h-17 w-24 shrink-0 cursor-pointer overflow-hidden border-2 p-0 transition-opacity ${i === index ? 'border-primary opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`}
          >
            <img src={src} alt="" className="block size-full object-cover" />
          </button>
        ))}
      </div>
    </div>,
    document.body,
  )
}
