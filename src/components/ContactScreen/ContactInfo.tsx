import { FaClock, FaLocationArrow, FaPhone, FaRegEnvelope } from 'react-icons/fa6'
import { hotelContact } from '../../content/restaurant'
import SectionTitle from '../Shared/SectionTitle'

const phone = hotelContact.phones[0]
const items = [
  { Icon: FaPhone, title: 'Call', body: <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-dark hover:text-primary">{phone}</a> },
  { Icon: FaRegEnvelope, title: 'Email', body: <a href={`mailto:${hotelContact.email}`} className="break-all text-dark hover:text-primary">{hotelContact.email}</a> },
  { Icon: FaLocationArrow, title: 'Address', body: <span className="text-dark">{hotelContact.address}</span> },
  { Icon: FaClock, title: 'Check-in / Check-out', body: <span className="text-dark">{hotelContact.checkIn} / {hotelContact.checkOut}</span> },
]

export default function ContactInfo() {
  return (
    <div>
      <SectionTitle sub="Get in Touch" className="!mb-6">We&rsquo;re Here to Help Plan Your Visit</SectionTitle>
      <p>Whether you are enquiring about a room, arranging a meal or planning an event, our team is ready to help. Call, email or send us a message with the details of your requirement.</p>
      <ul className="m-0 mt-10 list-none p-0">
        {items.map(({ Icon, title, body }) => (
          <li key={title} className="mb-7 flex items-center gap-5">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-medium text-dark"><Icon className='text-lg' /></span>
            <div>
              <h6 className="mb-1 font-serif text-dark text-xl leading-[1]">{title}</h6>
              {body}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
