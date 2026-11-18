import { useState } from 'react'
import { FaMinus, FaPlus, FaRegCalendar, FaRegUser } from 'react-icons/fa6'
import { hotelContact } from '../../content/restaurant'
import DateInput from '../Shared/DateInput'

const row = 'flex h-14 items-center gap-4 rounded-xl bg-white px-5 text-dark shadow-sm'
const round = 'grid size-6 cursor-pointer place-items-center rounded-full border-0 p-0 text-xs transition disabled:cursor-default'

function Stepper({ label, value, onChange }) {
  return (
    <div className={row}>
      <FaRegUser />
      <span className="flex-1">{label}</span>
      <button type="button" aria-label={`Fewer ${label}`} disabled={value === 0} onClick={() => onChange(value - 1)} className={`${round} bg-dark/15 text-dark disabled:opacity-50`}><FaMinus /></button>
      <span className="w-5 text-center">{value}</span>
      <button type="button" aria-label={`More ${label}`} onClick={() => onChange(value + 1)} className={`${round} bg-primary text-dark hover:bg-dark hover:text-primary`}><FaPlus /></button>
    </div>
  )
}

function DateField({ name, placeholder }) {
  return (
    <DateInput name={name} placeholder={placeholder} placeholderClass="" className={row}>
      <FaRegCalendar />
    </DateInput>
  )
}

// White glass booking card shown on the right of the home banner.
export default function BookingForm() {
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)

  return (
    <form onSubmit={(e) => e.preventDefault()} className="grid gap-3">
      <h3 className="mb-0 font-display tracking-wide text-dark">Hotel Booking</h3>
      <p className="mb-0 text-dark">Share your travel dates with us. Our team will get in touch to help you with availability and your stay details.</p>
      <p className="mb-2 font-semibold text-dark underline">Check-in: {hotelContact.checkIn} | Check-out: {hotelContact.checkOut}</p>
      <DateField name="checkin" placeholder="Check-in Date" />
      <DateField name="checkout" placeholder="Check-out Date" />
      <Stepper label="Adults" value={adults} onChange={setAdults} />
      <Stepper label="Children" value={children} onChange={setChildren} />
      <button type="submit" className="mt-3 h-14 cursor-pointer rounded-xl border-0 bg-primary tracking-widest text-dark shadow-sm transition-colors hover:bg-dark hover:text-primary">
        Check Availability
      </button>
    </form>
  )
}
