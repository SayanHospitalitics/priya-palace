// Up to 4 small photos under a big one. When there are more, the 4th shows "+N" (N = photos not shown);
// clicking it calls onMore. Used by every gallery.
type Props = {
  images: string[]
  active: number
  onSelect: (i: number) => void
  onMore: () => void
  className?: string
  thumbClassName?: string
}

export const VISIBLE_THUMBS = 4

export default function Thumbnails({ images, active, onSelect, onMore, className = '', thumbClassName = 'h-20 w-32' }: Props) {
  const shown = images.slice(0, VISIBLE_THUMBS)
  const extra = images.length - VISIBLE_THUMBS

  return (
    <div className={`flex ${shown.length >= VISIBLE_THUMBS ? 'justify-between' : 'gap-3'} ${className}`}>
      {shown.map((src, i) => {
        const isMore = extra > 0 && i === VISIBLE_THUMBS - 1
        return (
          <button
            key={src}
            type="button"
            aria-label={isMore ? `Show ${extra} more photos` : `Show photo ${i + 1}`}
            onClick={() => (isMore ? onMore() : onSelect(i))}
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
