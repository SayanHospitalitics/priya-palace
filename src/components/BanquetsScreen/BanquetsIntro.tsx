import { banquetsIntro } from '../../content/banquets'
import SectionHeading from '../Shared/SectionHeading'

export default function BanquetsIntro() {
  return (
    <section className="bg-white px-6 pt-20 text-center md:pt-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading label={banquetsIntro.label} center>{banquetsIntro.headline}</SectionHeading>
        <p className="text-dark/60">{banquetsIntro.description}</p>
        <ul className="m-0 mt-4 flex list-none flex-wrap justify-center gap-2 p-0">
          {banquetsIntro.occasions.map((o) => (
            <li key={o} className="rounded-full border border-primary/40 bg-white px-4 py-1.5 text-dark/80">{o}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
