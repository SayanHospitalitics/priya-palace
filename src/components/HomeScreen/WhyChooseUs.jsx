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
    <div ref={ref} className="mb-6 max-w-md sm:mb-7.5">
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <p className="m-0 font-serif text-dark">{label}</p>
        <span className="text-dark">{text}</span>
      </div>
      <div className="h-1 rounded-md bg-dark/15">
        <div className="h-full rounded-md bg-primary transition-[width] duration-1500 ease-out" style={{ width: seen ? `${value}%` : 0 }} />
      </div>
    </div>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="relative section">
      <Container>
        <div className="grid grid-cols-1 items-center gap-x-6 gap-y-10 lg:gap-y-14 lg:grid-cols-2">
          <Reveal>
            <SectionTitle sub="The Hotel Experience" className="!mb-6">Stay, Dine and Gather in One Place</SectionTitle>
            <p className="mb-8 max-w-lg lg:mb-12">
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
