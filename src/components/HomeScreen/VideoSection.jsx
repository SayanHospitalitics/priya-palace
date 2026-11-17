import { FaArrowRight, FaPlay } from 'react-icons/fa6'
import { homeImages } from '../../content/images'
import Container from '../Shared/Container'
import Reveal from '../Shared/Reveal'
import { Link } from 'react-router-dom'

export default function VideoSection() {
  return (
    <section className="relative overflow-hidden section">
      <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: `url(${homeImages.video})` }} />
      <div className="absolute inset-0 -z-10 bg-black/60" />
      <Container>
        <div className="xl:-mx-13">
          <Reveal>
            <h2 className="text-center text-white  max-md:leading-tight">
              Make Room for a <br />
              Memorable Occasion
            </h2>
          </Reveal>
          <div className="mt-7.5 text-center">
            <a href="https://www.youtube.com/watch?v=Fvae8nxzVz4" target="_blank" rel="noreferrer" aria-label="Play video" className="relative inline-block size-31 rounded-full bg-primary text-center text-medium text-dark">
              <FaPlay className="absolute top-1/2 left-1/2 -translate-x-2/5 -translate-y-1/2" />
              <span className="absolute inset-0 animate-ripple rounded-full border border-white/60" />
            </a>
          </div>
          <div className="mt-21 flex justify-end">
            <div className="max-w-md border-l border-white/40 pl-7.5">
              <p className="mb-4 text-white">A gathering becomes special when the setting feels right. Explore the event spaces at Hotel Priya Palace and tell us what you are planning.</p>
              <Link to="/banquets" className="inline-flex items-center gap-2 font-bold text-white hover:text-primary">
                Enquire About an Event <FaArrowRight className="-rotate-45" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
