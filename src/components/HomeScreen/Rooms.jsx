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
  const arrow = 'grid size-[52px] cursor-pointer place-items-center rounded-full border-0 bg-white text-xl text-dark/60 transition-opacity disabled:cursor-default disabled:opacity-40'

  return (
    <section className="relative bg-light py-[120px] max-md:py-20">
      <img src={tornTop} alt="" className="pointer-events-none absolute top-0 left-0 z-[2] h-[59px] w-full" />
      <img src={tornBottom} alt="" className="pointer-events-none absolute bottom-0 left-0 z-[2] h-[72px] w-full" />
      <Container>
        <div className="flex items-end justify-between gap-6">
          <SectionTitle sub="Accommodation">
            Find the Room That <br />
            Fits Your Stay
          </SectionTitle>
          <div className="mb-[50px] flex gap-2">
            <button type="button" aria-label="Previous" disabled={start === 0} onClick={() => setStart((s) => Math.max(0, s - 1))} className={arrow}><FaAngleLeft /></button>
            <button type="button" aria-label="Next" disabled={start >= max} onClick={() => setStart((s) => Math.min(max, s + 1))} className={arrow}><FaAngleRight /></button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-6 transition-transform duration-500" style={{ transform: `translateX(calc(${-start} * ((100% - 48px) / ${PER_VIEW} + 24px)))` }}>
            {roomsList.map((room, i) => (
              <Reveal key={i} delay={i * 150} className="min-w-0 shrink-0 basis-full min-[640px]:basis-[calc((100%-24px)/2)] min-[992px]:basis-[calc((100%-48px)/3)]">
                <div className="group flex h-full flex-col bg-white p-2">
                  <HoverImage href={`/rooms-and-suites/room-details?room=${i}`} src={room.image} className="h-[280px]" />
                  <div className="flex flex-1 flex-col px-[30px] pt-[30px] pb-[15px] max-sm:px-4">
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
