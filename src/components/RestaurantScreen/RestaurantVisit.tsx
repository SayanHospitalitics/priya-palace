import { FaLocationDot, FaPhone } from 'react-icons/fa6'
import { hotelContact } from '../../content/restaurant'

export default function RestaurantVisit() {
  return (
    <section className="bg-light">
      <div className="mx-auto grid grid-cols-1 max-w-6xl gap-px px-4 sm:px-6 section md:grid-cols-2">
        <div className="flex items-start gap-5 bg-white p-10">
          <FaPhone className="mt-1 text-medium text-primary" />
          <div>
            <h4 className="font-script leading-tight font-normal text-dark">Contact Us</h4>
            {hotelContact.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="mt-2 block text-dark/60 hover:text-primary">
                {p}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-start gap-5 bg-white p-10">
          <FaLocationDot className="mt-1 text-medium text-primary" />
          <div>
            <h4 className="font-script leading-tight font-normal text-dark">Our Location</h4>
            <p className="mt-2 text-dark/60">{hotelContact.address}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
