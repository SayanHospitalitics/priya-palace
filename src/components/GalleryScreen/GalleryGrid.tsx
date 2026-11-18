import { useMemo, useState } from 'react'
import { FaUpRightAndDownLeftFromCenter } from 'react-icons/fa6'
import { galleryCategories } from '../../content/gallery'
import Lightbox from '../Shared/Lightbox'

// Filter buttons (All + one per category) above an ordered grid (reads left to right, row by row). Click a photo to open the large preview.
export default function GalleryGrid() {
  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState<number | null>(null)

  const categories = galleryCategories.filter((c) => c.photos.length > 0)
  // "All" keeps the category order: rooms, restaurant, banquets, reception, hotel front, nearby places
  const items = useMemo(
    () => categories.filter((c) => filter === 'all' || c.id === filter).flatMap((c) => c.photos.map((p) => ({ ...p, category: c.label }))),
    [filter],
  )
  const total = categories.reduce((n, c) => n + c.photos.length, 0)
  const tabs = [{ id: 'all', label: 'All', count: total }, ...categories.map((c) => ({ id: c.id, label: c.label, count: c.photos.length }))]

  return (
    <section className="bg-white px-6 pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl">
        {/* sticks just under the fixed header (which shows after the first scroll) while the photos scroll beneath it */}
        <div className="sticky top-17.5 z-30 mb-10 bg-white backdrop-blur">
        <div role="tablist" aria-label="Filter photos" className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={filter === t.id}
              onClick={() => setFilter(t.id)}
              className={`-mb-px cursor-pointer border-0 border-b-2 bg-transparent px-1 py-4 uppercase tracking-widest transition-colors ${filter === t.id ? 'border-primary text-primary' : 'border-transparent text-dark/50 hover:text-dark'}`}
            >
              {t.label} <span className="text-dark/40">{t.count}</span>
            </button>
          ))}
        </div>
        </div>

        <div key={filter} className="grid animate-fade-in-up gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <button
              key={p.src}
              type="button"
              aria-label={`Open ${p.caption ?? p.category} photo`}
              onClick={() => setOpen(i)}
              className="group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden border-0 bg-light p-0"
            >
              <img src={p.src} alt={p.caption ?? p.category} loading="lazy" className="block size-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl" />
              <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-dark/80 via-dark/10 to-transparent p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-script text-medium leading-tight">{p.caption ?? p.category}</span>
                <FaUpRightAndDownLeftFromCenter />
              </span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <Lightbox images={items.map((p) => p.src)} index={open} onChange={setOpen} onClose={() => setOpen(null)} title="Gallery" />
      )}
    </section>
  )
}
