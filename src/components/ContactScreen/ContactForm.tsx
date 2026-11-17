import { hotelContact } from '../../content/restaurant'
import Button from '../Shared/Button'
import SectionTitle from '../Shared/SectionTitle'

const input = 'block w-full rounded-md border border-dark/10 bg-light px-7.5 py-3.5   text-dark outline-none placeholder:text-dark/50 focus:border-primary'

export default function ContactForm() {
  return (
    <div>
      <SectionTitle sub="Enquiry Form">Send Us an Enquiry</SectionTitle>
      <form onSubmit={(e) => e.preventDefault()} className="grid gap-5 sm:grid-cols-2">
        <input name="form_name" type="text" placeholder="Full Name" className={input} />
        <input name="form_phone" type="tel" placeholder="Phone Number" className={input} />
        <input name="form_email" type="email" placeholder="Email Address" className={input} />
        <select name="form_type" defaultValue="" className={input}>
          <option value="" disabled>Enquiry Type</option>
          {['Room Stay', 'Banquet or Event', 'Dining', 'Other'].map((o) => <option key={o}>{o}</option>)}
        </select>
        <input name="form_checkin" type="text" placeholder="Check-in Date" onFocus={(e) => (e.target.type = 'date')} className={input} />
        <input name="form_checkout" type="text" placeholder="Check-out Date" onFocus={(e) => (e.target.type = 'date')} className={input} />
        <input name="form_guests" type="number" min={1} placeholder="Number of Guests" className={`${input} sm:col-span-2`} />
        <textarea name="form_message" rows={6} placeholder="Your Message" className={`${input} sm:col-span-2`} />
        <div className="sm:col-span-2">
          <Button type="submit" className="!px-8 !py-4">Submit Enquiry</Button>
          <p className="mt-4 mb-0">Share a few details and our team will get back to you. For a quicker response, call {hotelContact.phones[0]}.</p>
        </div>
      </form>
    </div>
  )
}
