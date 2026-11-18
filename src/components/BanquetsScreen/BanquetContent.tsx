import { useState } from 'react'
import type { IconType } from 'react-icons'
import { FaArrowRight, FaCheck, FaChalkboardUser, FaChevronDown, FaChevronUp, FaMagnet, FaMasksTheater, FaUsers, FaUtensils } from 'react-icons/fa6'
import type { Banquet } from '../../content/banquets'
import SectionHeading from '../Shared/SectionHeading'

const seatingIcons: Record<string, IconType> = {
  THEATRE: FaMasksTheater,
  CLASSROOM: FaChalkboardUser,
  'U-SHAPE': FaMagnet,
  BANQUET: FaUtensils,
}
const toTitle = (s: string) => s.toLowerCase().replace(/(^|[\s-])\S/g, (c) => c.toUpperCase())

export default function BanquetContent({ banquet }: { banquet: Banquet }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <SectionHeading label={banquet.name}>{banquet.headline}</SectionHeading>
      <p className="mb-3 font-serif italic text-dark">{banquet.tagline}</p>
      <p className="max-w-xl text-dark/60 text-md">{banquet.description}</p>

      <ul className="m-0 mt-4 grid list-none gap-1 border-t border-primary/20 p-0 py-4 sm:grid-cols-2">
        {banquet.highlights.map((h) => (
          <li key={h} className="flex items-center gap-3 font-normal text-dark">
            <FaCheck className="shrink-0 text-primary" /> {h}
          </li>
        ))}
      </ul>

      {/* expandable seating arrangements */}
      {/* <div className={`grid transition-all duration-500 ${open ? 'mt-8 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <h4 className="mb-4 font-script leading-tight font-normal text-dark">Seating Arrangements</h4>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {banquet.seating.map((s) => {
              const Icon = seatingIcons[s.layout] ?? FaUsers
              return (
                <div key={s.layout} className="border border-primary/25 bg-white p-5 text-center shadow-sm">
                  <Icon className="mx-auto text-medium text-primary" />
                  <div className="mt-3 font-semibold tracking-wider text-dark">{toTitle(s.layout)}</div>
                  <div className="mt-1 text-dark/50">{s.capacity}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div> */}

      <div className="mt-0 flex flex-wrap items-center gap-6">
        <a
          href="#plan-your-event"
          className="inline-flex items-center gap-3 border border-dark bg-dark px-8 py-4 font-semibold uppercase tracking-widest text-primary transition hover:border-primary hover:bg-primary hover:text-dark"
        >
          Enquire About {banquet.name} <FaArrowRight />
        </a>
        {/* <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="inline-flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 font-semibold uppercase tracking-widest text-dark transition hover:text-primary"
        >
          {open ? 'Read Less' : 'Seating'} {open ? <FaChevronUp /> : <FaChevronDown />}
        </button> */}
      </div>
    </div>
  )
}
