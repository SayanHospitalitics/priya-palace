import { homeImages } from '../../content/images'
import Container from '../Shared/Container'
import Parallax from '../Shared/Parallax'
import Reveal from '../Shared/Reveal'
import SectionTitle from '../Shared/SectionTitle'
import useInView from '../Shared/useInView'

const stats = [
  // value = bar fill in % (rating out of 5, counts out of 5), text = figure shown on the bar
  { label: 'Google Guest Rating', value: 84, text: '4.2/5 ★' },
  { label: 'Room Categories', value: 80, text: '04' },
  { label: 'Banquet Halls', value: 90, text: '4.5' },
]

function Stat({ label, value, text }) {
  const [ref, seen] = useInView()
  return (
    <div ref={ref} className="mb-7.5 max-w-md">
      <p className="mb-4 font-serif text-dark">{label}</p>
      <div className="relative h-1 rounded-md bg-dark/15">
        <div className="relative h-full rounded-md bg-primary transition-[width] duration-1500 ease-out" style={{ width: seen ? `${value}%` : 0 }}>
          <span className="absolute -top-10 right-0 translate-x-1/2 text-dark">{text}</span>
        </div>
      </div>
    </div>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="relative section">
      <Container>
        <div className="grid items-center gap-x-6 gap-y-14 lg:grid-cols-2">
          <Reveal>
            <SectionTitle sub="The Hotel Experience" className="!mb-6">Stay, Dine and Gather in One Place</SectionTitle>
            <p className="mb-12 max-w-lg">
              Bring the different parts of your visit together at one convenient address in Ulubari, Guwahati.
            </p>
            {stats.map((s) => <Stat key={s.label} {...s} />)}
          </Reveal>
          <Reveal className="relative pb-12 lg:pl-10">
            <div className="absolute right-0 bottom-0 h-65 w-68 bg-[radial-gradient(circle,var(--color-dark)_1.2px,transparent_1.6px)] bg-[length:14px_14px]" />
            <Parallax src={homeImages.whyChooseUs} strength={0.08} className="aspect-[1097/1282] w-full" />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
