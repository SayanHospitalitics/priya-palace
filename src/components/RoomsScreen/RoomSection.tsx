import { useState } from 'react'
import * as Fa from 'react-icons/fa6'
import { FaArrowRight, FaBed, FaChevronDown, FaChevronUp, FaListCheck, FaRulerCombined } from 'react-icons/fa6'
import type { Room } from '../../content/room'
import { roomName } from '../../content/roomHelpers'
import ImageGallery from '../Shared/ImageGallery'
import SectionHeading from '../Shared/SectionHeading'
import { Link } from 'react-router-dom'

// Odd rooms: image left / content right. Even rooms: content left / image right.
export default function RoomSection({ room, index }: { room: Room; index: number }) {
  const [open, setOpen] = useState(false)
  const imageFirst = index % 2 === 0
  const name = roomName(room)
  const highlights = [
    { Icon: FaRulerCombined, label: 'Room Size', value: room.area },
    { Icon: FaBed, label: 'Bed', value: room.bedType },
    { Icon: FaListCheck, label: 'Facilities', value: `${room.amenities.length} Included` },
  ]

  return (
    <section className={imageFirst ? 'bg-white' : 'bg-light'}>
      <div className="mx-auto grid grid-cols-1 max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-2 lg:gap-20">
        <div className={imageFirst ? '' : 'lg:order-2'}>
          <ImageGallery images={room.gallery} name={name} />
        </div>
        <div className={imageFirst ? '' : 'lg:order-1'}>
          <SectionHeading label={room.shortDescription}>{name}</SectionHeading>
          <p className="max-w-xl text-dark/60">{room.description}</p>
          <p className="mt-4 mb-0 text-dark/60">{room.features.join(' · ')}</p>

          {/* <div
            className="mt-8 grid divide-x divide-primary/20 border-y border-primary/20 py-6"
            style={{ gridTemplateColumns: `repeat(${highlights.length}, minmax(0, 1fr))` }}
          >
            {highlights.map(({ Icon, label, value }) => (
              <div key={label} className="px-4 text-center first:pl-0 last:pr-0 sm:text-left">
                <Icon className="mx-auto mb-3 text-medium text-primary sm:mx-0" />
                <div className="font-semibold text-dark">{value}</div>
                <div className="mt-1 uppercase tracking-widest text-dark/50">{label}</div>
              </div>
            ))}
          </div> */}

          {/* expandable amenities */}
          {/* <div className={`grid transition-all duration-500 ${open ? 'mt-8 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              <h4 className="mb-4 font-script leading-tight font-normal text-dark">Room Facilities</h4>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {room.amenities.map((am) => {
                  const Icon = (Fa as Record<string, React.ComponentType<{ className?: string }>>)[am.icon] ?? Fa.FaCheck
                  return (
                    <div key={am.label} className="flex items-center gap-3 border border-primary/25 bg-white px-4 py-3 shadow-sm">
                      <Icon className="shrink-0 text-primary" />
                      <span className="text-dark/80">{am.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div> */}

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              to={`/rooms-and-suites/room-details?room=${index}`}
              className="inline-flex items-center gap-3 border border-dark bg-dark px-8 py-4 font-semibold uppercase tracking-widest text-primary transition hover:border-primary hover:bg-primary hover:text-dark"
            >
              View Room <FaArrowRight />
            </Link>
            {/* <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="inline-flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 font-semibold uppercase tracking-widest text-dark transition hover:text-primary"
            >
              {open ? 'Read Less' : 'Read More'} {open ? <FaChevronUp /> : <FaChevronDown />}
            </button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
