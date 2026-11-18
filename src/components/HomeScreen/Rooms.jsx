import { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { roomsList } from '../../content/room'
import tornTop from '../../assets/images/icons/bg-shape3.png'
import tornBottom from '../../assets/images/icons/bg-shape4.png'
import Container from '../Shared/Container'
import HoverImage from '../Shared/HoverImage'
import Reveal from '../Shared/Reveal'
import SectionTitle from '../Shared/SectionTitle'
import { Link } from 'react-router-dom'

const PER_VIEW = 3

export default function Rooms() {
  const [start, setStart] = useState(0)
  const max = Math.max(0, roomsList.length - PER_VIEW)
  const arrow = 'grid size-12 cursor-pointer place-items-center rounded-full border-0 bg-white text-xl text-dark/60 transition-opacity disabled:cursor-default disabled:opacity-40'

  return (
    <section className="relative section bg-light">
      <img src={tornTop} alt="" className="pointer-events-none absolute top-0 left-0 z-[2] h-10 w-full md:h-14" />
      <img src={tornBottom} alt="" className="pointer-events-none absolute bottom-0 left-0 z-[2] h-12 w-full md:h-16" />
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
          <SectionTitle sub="Accommodation">
            Find the Room That <br className="hidden sm:block" />
            Fits Your Stay
          </SectionTitle>
          <div className="mb-10 flex gap-2 lg:mb-12 max-lg:hidden">
            <button type="button" aria-label="Previous" disabled={start === 0} onClick={() => setStart((s) => Math.max(0, s - 1))} className={arrow}><FaAngleLeft /></button>
            <button type="button" aria-label="Next" disabled={start >= max} onClick={() => setStart((s) => Math.min(max, s + 1))} className={arrow}><FaAngleRight /></button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-6 transition-transform duration-500 max-lg:flex-col" style={{ transform: `translateX(calc(${-start} * ((100% - 48px) / ${PER_VIEW} + 24px)))` }}>
            {roomsList.map((room, i) => (
              <Reveal key={i} delay={i * 150} className="min-w-0 shrink-0 basis-full min-[640px]:basis-[calc((100%-24px)/2)] min-[992px]:basis-[calc((100%-48px)/3)]">
                <div className="group flex h-full flex-col bg-white p-2">
                  <HoverImage href={`/rooms-and-suites/room-details?room=${i}`} src={room.image} className="h-56 sm:h-64 lg:h-70" />
                  <div className="flex flex-1 flex-col px-4 pt-6 pb-4 sm:px-6 lg:px-8 lg:pt-8">
                    <h4 className="mb-2.5 text-center text-2xl leading-[30px]">
                      <Link to={`/rooms-and-suites/room-details?room=${i}`} className="text-dark transition-colors hover:text-primary">
                        <span>{room.type}</span>
                        <span className="pl-2 font-bold text-primary">{room.subType}</span>
                      </Link>
                    </h4>
                    <p className="mb-3 text-center">{room.homeDescription}</p>
                    <p className="mb-5 text-center text-sm text-dark/60">{room.features.join(' · ')}</p>
                    <Link to={`/rooms-and-suites/room-details?room=${i}`} className="mt-auto text-center text-sm font-semibold uppercase tracking-[0.15em] text-dark hover:text-primary">View Room Details</Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
