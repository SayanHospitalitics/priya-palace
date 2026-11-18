import { FaEnvelope, FaPhone } from 'react-icons/fa6'
import { banquetEnquiry } from '../../content/banquets'
import { hotelContact } from '../../content/restaurant'
import SectionHeading from '../Shared/SectionHeading'
import DateInput from '../Shared/DateInput'

const field = 'block w-full border border-dark/10 bg-white px-5 py-3.5  text-dark outline-none placeholder:text-dark/50 focus:border-primary'

export default function BanquetEnquiry() {
  return (
    <section id="plan-your-event" className="bg-light">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 section lg:grid-cols-[5fr_7fr] lg:gap-20">
        <div>
          <SectionHeading label={banquetEnquiry.label}>{banquetEnquiry.headline}</SectionHeading>
          <p className="text-dark/60">{banquetEnquiry.description}</p>
          <a href={`tel:${hotelContact.phones[0].replace(/\s/g, '')}`} className="mt-6 flex items-center gap-4 text-dark hover:text-primary">
            <span className="grid size-10 place-items-center rounded-full bg-primary text-dark"><FaPhone /></span>
            {hotelContact.phones[0]}
          </a>
          <a href={`mailto:${hotelContact.email}`} className="mt-4 flex items-center gap-4 break-all text-dark hover:text-primary">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-dark"><FaEnvelope /></span>
            {hotelContact.email}
          </a>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="grid gap-4 sm:grid-cols-2">
          <input type="text" placeholder="Full Name *" required className={field} />
          <input type="email" placeholder="Email Address *" required className={field} />
          <input type="tel" placeholder="Phone Number *" required className={field} />
          <select defaultValue="" required className={field}>
            <option value="" disabled>Type of Event *</option>
            {['Meetings & Conferences', 'Family Gatherings', 'Wedding Receptions', 'Birthday Celebrations', 'Corporate Events', 'Special Occasions'].map((o) => <option key={o}>{o}</option>)}
          </select>
          <DateInput name="preferred_date" placeholder="Preferred Date *" required className={field} />
          <input type="number" min={1} placeholder="No. of Guests (Approx.) *" required className={field} />
          <textarea rows={4} placeholder="Your Message" className={`${field} sm:col-span-2`} />
          <button type="submit" className="cursor-pointer border border-dark bg-dark px-8 py-4 font-semibold uppercase tracking-widest text-primary transition hover:border-primary hover:bg-primary hover:text-dark sm:col-span-2">
            {banquetEnquiry.button}
          </button>
        </form>
      </div>
    </section>
  )
}
