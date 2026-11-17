import { homeImages } from '../../content/images'
import crown from '../../assets/images/icons/about16.png'
import Button from '../Shared/Button'
import Container from '../Shared/Container'
import Parallax from '../Shared/Parallax'
import Reveal from '../Shared/Reveal'
import SectionTitle from '../Shared/SectionTitle'

export default function About() {
  return (
    <section id="about" className="relative section">
      <Container>
        <div className="grid items-center gap-x-6 gap-y-14 lg:grid-cols-2">
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
            <img src={crown} alt="" className="absolute top-1/2 left-1/2 size-25 -translate-x-1/2 -translate-y-1/2 rounded-full" />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
