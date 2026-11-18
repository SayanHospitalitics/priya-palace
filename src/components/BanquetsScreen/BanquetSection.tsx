import type { Banquet } from '../../content/banquets'
import BanquetContent from './BanquetContent'
import ImageGallery from '../Shared/ImageGallery'

// Odd venues: image left / content right. Even venues: content left / image right.
export default function BanquetSection({ banquet, index }: { banquet: Banquet; index: number }) {
  const imageFirst = index % 2 === 0
  return (
    <section className={index % 2 === 0 ? 'bg-white' : 'bg-light'}>
      <div className="mx-auto grid max-w-6xl items-stretch gap-14 px-6 py-12 lg:grid-cols-2 lg:gap-20">
        <div className={`lg:h-[70vh] lg:self-center ${imageFirst ? '' : 'lg:order-2'}`}>
          <ImageGallery images={banquet.images} name={banquet.name} aspect="aspect-[2092/972]" fill />
        </div>
        <div className={imageFirst ? '' : 'lg:order-1'}>
          <BanquetContent banquet={banquet} />
        </div>
      </div>
    </section>
  )
}
