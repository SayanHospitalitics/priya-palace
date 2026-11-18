import { restaurant } from '../../content/restaurant'
import SectionHeading from '../Shared/SectionHeading'

export default function RestaurantIntro() {
  return (
    <section className="bg-white px-4 pt-14 text-center sm:px-6 sm:pt-20 lg:pt-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading label={restaurant.label} center>{restaurant.tagline}</SectionHeading>
      </div>
    </section>
  )
}
