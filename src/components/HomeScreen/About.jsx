import { homeImages } from '../../content/images'
import logo from '../../assets/images/logo.png'
import Button from '../Shared/Button'
import Container from '../Shared/Container'
import Parallax from '../Shared/Parallax'
import Reveal from '../Shared/Reveal'
import SectionTitle from '../Shared/SectionTitle'

export default function About() {
  return (
    <section id="about" className="relative section">
      <Container>
        <div className="grid grid-cols-1 items-center gap-x-6 gap-y-10 lg:gap-y-14 lg:grid-cols-2">
          <Reveal className="lg:order-2">
            <SectionTitle sub="About Hotel Priya Palace" className="!mb-0">
              A Stay Shaped<br/>Around Your Needs
            </SectionTitle>
            <p className="mt-6 mb-0">
              A comfortable stay is about more than a room. It is the ease of settling in, having the essentials close at hand and knowing there is a place to dine or gather when the occasion calls for it.
            </p>
            <p className="mt-4 mb-0">
              At Hotel Priya Palace, guests can choose from a range of rooms and suites, enjoy a meal at Dhansiri Restaurant or bring people together at Luit and Kareng Banquet Halls. Whether your visit is for work, family time or a celebration, we look forward to welcoming you.
            </p>
            <div className="mt-12">
              <Button href="/contact/contact">Discover Our Story</Button>
            </div>
          </Reveal>
          <Reveal className="relative flex gap-5 lg:order-1">
            <Parallax src={homeImages.aboutLarge} strength={0.08} className="aspect-[1045/1726] w-1/2" />
            <Parallax src={homeImages.aboutSmall} strength={0.08} className="aspect-[1045/1726] w-1/2" />
            {/* logo badge: white medallion with a gold ring and a fine inner ring, centred between the two photos */}
            <div className="absolute top-1/2 left-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white p-1 shadow-xl ring-1 ring-primary sm:size-28 lg:size-32">
              <div className="grid size-full place-items-center rounded-full border border-primary/70 p-2 sm:p-2.5">
                <img src={logo} alt="Hotel Priya Palace" className="h-auto w-full object-contain" />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
