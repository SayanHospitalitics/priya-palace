import { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa6'
import { testimonials, testimonialsIntro } from '../../content/testimonials'
import Container from '../Shared/Container'
import SectionTitle from '../Shared/SectionTitle'

const reviews = testimonials

// Polaroid-style photos of nearby Guwahati attractions around the slider.
// Drop any .png/.jpg into src/assets/images/home/clients/ (the file name becomes the handwritten caption); up to 5 are shown.
const photos = Object.entries(import.meta.glob('../../assets/images/home/clients/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' }))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({ src, name: decodeURIComponent(path.split('/').pop().replace(/\.[^.]+$/, '')) }))

// position + tilt of each polaroid (filled in this order so a few photos stay balanced left / right)
const slots = [
  'left-0 -top-24 w-36 -rotate-6',
  'right-0 -top-16 w-36 rotate-6',
  'left-4 top-2/3 w-36 rotate-3',
  'right-4 top-3/4 w-36 -rotate-3',
  'left-1/4 -bottom-28 w-36 rotate-6',
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % reviews.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative section">
      <Container className="lg:pb-32">
        <SectionTitle sub={testimonialsIntro.label} center className="!mb-4">{testimonialsIntro.headline}</SectionTitle>
        <p className="mx-auto mb-12 max-w-xl text-center">{testimonialsIntro.description}</p>
        <div className="relative mx-auto max-w-5xl">
          {/* {photos.slice(0, slots.length).map((p, i) => (
            <figure
              key={p.name}
              className={`absolute z-10 m-0 hidden bg-white p-2 pb-1 shadow-xl transition duration-500 hover:z-20 hover:rotate-0 hover:scale-105 xl:block ${slots[i]}`}
            >
              <span className="absolute -top-3 -left-5 h-6 w-16 -rotate-45 bg-primary/70" aria-hidden="true" />
              <img src={p.src} alt={p.name} className="aspect-square w-full object-cover" />
              <figcaption className="py-2 text-center font-script text-medium text-dark">{p.name}</figcaption>
            </figure>
          ))} */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${active * 100}%)` }}>
              {reviews.map((r, i) => (
                <div key={i} className="w-full shrink-0 text-center">
                  <div className="mb-5 flex justify-center gap-1 text-medium text-primary">{[...Array(5)].map((_, k) => <FaStar key={k} />)}</div>
                  <div className="mx-auto mb-7.5 max-w-2xl text-medium font-light text-dark/60">
                    {r.text.map((t, k) => <p key={k} className="mb-2">{k === 0 && '“ '}{t}{k === r.text.length - 1 && ' ”'}</p>)}
                  </div>
                  <div>
                    <h4 className="inline">{r.name}</h4>
                  </div>
                  <p className="mt-2 mb-0">Google rating: {r.rating}{r.posted && ` | Posted: ${r.posted}`}{r.travelType && ` | Travel type: ${r.travelType}`}</p>
                  <p className="mt-1 mb-0 font-semibold text-dark">{r.categories}</p>
                  {r.extras && <p className="mt-1 mb-0">{r.extras.join(' | ')}</p>}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-2.5">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show review ${i + 1}`}
                onClick={() => setActive(i)}
                className={`size-3 cursor-pointer rounded-full border-2 border-primary p-0 ${i === active ? 'bg-primary' : 'bg-transparent'}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
