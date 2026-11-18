import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaUpRightAndDownLeftFromCenter } from 'react-icons/fa6'
import Lightbox from './Lightbox'
import SlideBlurImage from './SlideBlurImage'
import Thumbnails from './Thumbnails'

// `fill`: on large screens the main photo stretches to the height of the column it sits in (the parent grid must stretch it),
// below `lg` it keeps the `aspect` ratio.
export default function ImageGallery({ images, name, aspect = 'aspect-[16/10]', fill = false }: { images: string[]; name: string; aspect?: string; fill?: boolean }) {
  const [active, setActive] = useState(0)
  const [preview, setPreview] = useState(false)
  const go = (i: number) => setActive((i + images.length) % images.length)

  return (
    <div className={`relative ${fill ? 'flex h-full flex-col' : ''}`}>
      {/* offset frame */}
      <div className="pointer-events-none absolute inset-0 -z-0 translate-x-3 -translate-y-3 border border-primary/70" />
      <div className={`group relative overflow-hidden bg-black shadow-2xl ${fill ? `${aspect} lg:aspect-auto lg:min-h-72 lg:flex-1` : ''}`}>
        {fill ? (
          <div className="absolute inset-0">
            <SlideBlurImage src={images[active]} alt={`${name} photo ${active + 1}`} className="size-full" />
          </div>
        ) : (
          <SlideBlurImage src={images[active]} alt={`${name} photo ${active + 1}`} className={`${aspect} w-full`} />
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />

        {/* click the photo (or the expand icon that shows on hover) to open the preview */}
        <button
          type="button"
          aria-label="Open large preview"
          onClick={() => setPreview(true)}
          className="absolute inset-0 z-20 cursor-zoom-in border-0 bg-transparent p-0"
        >
          <span className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute right-4 bottom-4 text-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><FaUpRightAndDownLeftFromCenter /></span>
        </button>

        <span className="pointer-events-none absolute bottom-4 left-4 z-30 bg-black/60 px-3 py-1 font-semibold tracking-widest text-white backdrop-blur-sm">
          {active + 1} / {images.length}
        </span>
        {(['prev', 'next'] as const).map((dir) => (
          <button
            key={dir}
            type="button"
            aria-label={dir === 'prev' ? 'Previous image' : 'Next image'}
            onClick={() => go(active + (dir === 'prev' ? -1 : 1))}
            className={`absolute top-1/2 z-30 grid size-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full border-0 bg-white/90 text-dark shadow-lg transition hover:bg-primary hover:text-dark ${dir === 'prev' ? 'left-4' : 'right-4'}`}
          >
            {dir === 'prev' ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
        ))}
      </div>

      <Thumbnails
        images={images}
        active={active}
        onSelect={setActive}
        onMore={(i) => { setActive(i); setPreview(true) }}
        className="relative mt-5"
      />

      {preview && <Lightbox images={images} index={active} onChange={setActive} onClose={() => setPreview(false)} title={name} />}
    </div>
  )
}
