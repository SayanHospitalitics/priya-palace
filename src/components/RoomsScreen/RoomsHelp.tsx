import { FaArrowRight } from 'react-icons/fa6'
import { hotelFacilities, inRoomAmenities } from '../../content/room'
import SectionHeading from '../Shared/SectionHeading'
import { Link } from 'react-router-dom'

export default function RoomsHelp() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 section text-center">
          <h3 className="text-dark">Facilities available at the hotel</h3>
          <ul className="m-0 mt-6 flex list-none flex-wrap justify-center gap-2 p-0">
            {hotelFacilities.map((f) => (
              <li key={f} className="rounded-full border border-primary/40 bg-white px-4 py-1.5 text-dark/80">{f}</li>
            ))}
          </ul>
          <p className="mt-6 mb-0 text-dark/60">
            <span className="font-semibold text-dark">In-room amenities:</span> {inRoomAmenities.join(' · ')}
          </p>
        </div>
      </section>
      <section className="bg-light">
        <div className="mx-auto max-w-4xl px-6 section text-center">
          <SectionHeading label="Need help choosing?" center>Let Us Help You Find the Right Room</SectionHeading>
          <p className="mt-6 text-dark/60">
            Tell us your travel dates, the number of guests and what you need from your stay. Our team can guide you through the available room options and confirm the details.
          </p>
          <Link
            to="/contact/contact"
            className="mt-8 inline-flex items-center gap-3 border border-dark bg-dark px-8 py-4 font-semibold uppercase tracking-widest text-primary transition hover:border-primary hover:bg-primary hover:text-dark"
          >
            Enquire About Rooms <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}
