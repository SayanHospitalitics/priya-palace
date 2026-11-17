import type { IconType } from 'react-icons'
import { FaArrowRight, FaBellConcierge, FaCouch, FaMedal, FaUtensils } from 'react-icons/fa6'
import { restaurant } from '../../content/restaurant'
import ImageGallery from '../Shared/ImageGallery'
import SectionHeading from '../Shared/SectionHeading'
import { Link } from 'react-router-dom'

const highlightIcons: IconType[] = [FaBellConcierge, FaUtensils, FaCouch, FaMedal]

// Same layout as a banquet venue: image left, content right.
export default function RestaurantSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 section lg:grid-cols-2 lg:gap-20">
        <ImageGallery images={restaurant.images} name={restaurant.name} />
        <div>
          <SectionHeading label="In-house Restaurant">{restaurant.name}</SectionHeading>
          <p className="max-w-xl text-dark/60">{restaurant.description}</p>

          {/* <div className="mt-8 grid grid-cols-2 gap-px border border-primary/20 bg-primary/20 sm:grid-cols-4">
            {restaurant.highlights.map((h, i) => {
              const Icon = highlightIcons[i % highlightIcons.length]
              return (
                <div key={h} className="bg-white px-3 py-5 text-center">
                  <Icon className="mx-auto mb-3 text-medium text-primary" />
                  <div className="font-semibold uppercase tracking-wider text-dark">{h}</div>
                </div>
              )
            })}
          </div> */}

          <Link
            to="/contact/contact"
            className="mt-8 inline-flex items-center gap-3 border border-dark bg-dark px-8 py-4 font-semibold uppercase tracking-widest text-primary transition hover:border-primary hover:bg-primary hover:text-dark"
          >
            Reserve a Table <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
