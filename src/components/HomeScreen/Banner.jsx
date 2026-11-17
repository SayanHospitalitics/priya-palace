import { FaArrowRight, FaStar } from 'react-icons/fa6'
import { homeImages } from '../../content/images'
import BookingForm from './BookingForm'
import Button from '../Shared/Button'
import Container from '../Shared/Container'
import Parallax from '../Shared/Parallax'
import Reveal from '../Shared/Reveal'


export default function Banner() {
  return (
    <section className="relative mt-4 overflow-hidden section pb-3">
      <Parallax src={homeImages.hero} strength={0.08} className="absolute inset-0" objectPosition="center" />
      {/* soft white mist along the bottom, like a cloud bank; the photo itself stays bright */}
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-white via-white/60 to-transparent" />
      {/* extra thick, cloud-like mist under the left-side text */}
      <div className="absolute bottom-0 left-0 h-1/2 w-full bg-[radial-gradient(ellipse_at_bottom_left,white_0%,rgb(255_255_255/0.85)_35%,transparent_75%)] lg:w-3/4" />
      <div className="absolute -bottom-16 -left-16 h-56 w-2/3 rounded-full bg-white/90 blur-3xl" />

      <Container className="relative z-20">
        <div className="grid items-end gap-x-6 gap-y-12 lg:grid-cols-[7fr_5fr]">
          <div>
            <div className="relative pb-8">
              {/* <Reveal delay={300} className="flex items-center text-primary">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </Reveal> */}
              <Reveal delay={600}>
                <h1 className="relative mb-0 font-display text-dark">A Welcoming Stay in the Heart of Guwahati</h1>
              </Reveal>
              <Reveal delay={800}>
                <p className="mr-18 text-dark max-md:mr-0">
                  Whether you are visiting for business, travelling with family or planning a special occasion, Hotel Priya Palace brings together comfortable accommodation, inviting dining and thoughtfully arranged event spaces in Ulubari.
                </p>
              </Reveal>
            </div>
            <Reveal delay={900} className="relative z-10 flex flex-wrap items-center gap-y-4">
              <Button href="/rooms-and-suites/rooms-search-result" className="!px-11 !py-4">Explore Rooms &amp; Suites</Button>
              {/* <div className="ml-7.5 flex items-center">
                <a href="#about" className="grid size-15 place-items-center rounded-full border border-primary bg-primary text-medium text-dark transition-colors hover:bg-dark hover:text-primary">
                  <FaArrowRight />
                </a>
                <a href="#about" className="ml-4 font-semibold text-dark">Discover the Hotel</a>
              </div> */}
            </Reveal>
          </div>

          <Reveal className="relative z-40 glass p-8 pb-0 rounded-t-4xl lg:mt-3 lg:ml-8">
            <BookingForm />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
