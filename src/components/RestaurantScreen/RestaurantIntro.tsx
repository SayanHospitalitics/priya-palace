import { restaurant } from '../../content/restaurant'
import SectionHeading from '../Shared/SectionHeading'

export default function RestaurantIntro() {
  return (
    <section className="bg-white px-6 pt-20 text-center md:pt-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading label={restaurant.label} center>{restaurant.tagline}</SectionHeading>
      </div>
    </section>
  )
}
