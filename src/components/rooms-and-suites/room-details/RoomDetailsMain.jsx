import { useState } from 'react'
import * as Fa from 'react-icons/fa6'
import { FaBed, FaCheck, FaEye, FaFacebook, FaInstagram, FaRulerCombined, FaUsers, FaUpRightAndDownLeftFromCenter, FaPinterestP, FaXTwitter } from 'react-icons/fa6'
import { currentRoom, roomName } from '../../../content/roomHelpers'
import Button from '../../Shared/Button'
import Lightbox from '../../Shared/Lightbox'
import SlideBlurImage from '../../Shared/SlideBlurImage'
import Thumbnails from '../../Shared/Thumbnails'
import DateInput from '../../Shared/DateInput'

const field = 'block w-full border border-dark/10 bg-white px-5 py-3.5  text-dark outline-none placeholder:text-dark/50 focus:border-primary'

export default function RoomDetailsMain() {
  const { room } = currentRoom()
  const name = roomName(room)
  const [active, setActive] = useState(0)
  const [preview, setPreview] = useState(false)

  return (
    <div className="min-w-0">
      {/* gallery */}
      <div className="mb-7.5">
        <div className="group relative">
          <SlideBlurImage src={room.gallery[active]} alt={name} className="aspect-[16/10] w-full" />
          <button type="button" aria-label="Open large preview" onClick={() => setPreview(true)} className="absolute inset-0 cursor-zoom-in border-0 bg-transparent p-0">
            <span className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute right-4 bottom-4 text-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><FaUpRightAndDownLeftFromCenter /></span>
          </button>
        </div>
        <Thumbnails images={room.gallery} active={active} onSelect={setActive} onMore={(i) => { setActive(i); setPreview(true) }} className="mt-2.5" thumbClassName="h-16 w-25" />
        {preview && <Lightbox images={room.gallery} index={active} onChange={setActive} onClose={() => setPreview(false)} title={name} />}
      </div>

      {/* heading */}
      <div className="mb-0">
        <h3 className="mb-1">{name}</h3>
        {/* <p className="mb-0">{room.shortDescription}</p> */}
        {/* <ul className="m-0 flex list-none flex-wrap gap-x-7 gap-y-2 p-0">
          {room.features.map((f) => (
            <li key={f} className="flex items-center gap-1.5"><FaCheck className="text-primary" /> <span>{f}</span></li>
          ))}
        </ul> */}
      </div>

      {/* description */}
      {/* <h3 className="mb-3">{room.descriptionHeading}</h3> */}
      <p>{room.descriptionParagraphs[0]}</p>
      <div className="mt-5 mb-5 px-10">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {[[FaRulerCombined, 'Room Size', room.area], [FaBed, 'Rooms Bed', room.bedType], [FaUsers, 'Occupancy', room.occupancy], [FaEye, 'View', room.view]].map(([Icon, label, value]) => (
            <div key={label} className="flex items-start gap-2">
              <span className="grid size-10 shrink-0 place-items-center rounded-full text-primary"><Icon className='text-2xl' /></span>
              <div>
                <p className="mb-0 uppercase text-xs">{label}</p>
                <p className="mb-0 font-serif text-dark">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {room.descriptionParagraphs.slice(1).map((p) => <p key={p}>{p}</p>)}

      {/* additional information */}
      <div className="mt-10">
        <h4 className="mb-3">{room.additionalHeading}</h4>
        <p>{room.additionalInfo}</p>
      </div>

      {/* facilities */}
      <div className="mt-10">
        <h4 className="mb-5">Room Facilities</h4>
        <div className="mb-10 grid gap-x-6 gap-y-4 sm:grid-cols-2 xl:grid-cols-3">
          {room.amenities.map((am) => {
            const Icon = Fa[am.icon] ?? Fa.FaCheck
            return (
              <div key={am.label} className="flex flex-col items-center gap-0">
                <span className="grid size-12 shrink-0 place-items-center rounded-full text-dark"><Icon className='text-2xl text-primary' /></span>
                <span className="font-serif text-dark">{am.label}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* share */}
      {/* <div className="flex flex-wrap items-center justify-between gap-4 border-t border-dark/10 py-10">
        <h6 className="m-0 font-serif text-dark">Share Details</h6>
        <div className="flex gap-2.5">
          {[FaXTwitter, FaFacebook, FaPinterestP, FaInstagram].map((Icon, i) => (
            <a key={i} href="#" className="grid size-9 place-items-center rounded-full bg-light text-dark hover:bg-primary hover:text-dark"><Icon /></a>
          ))}
        </div>
      </div> */}

      {/* enquiry form */}
      <div className="bg-light p-6 lg:p-12">
        <h4 className="mb-3">Send Us Your Enquiry</h4>
        <p className="mb-5">{room.enquiryDescription}</p>
        <form onSubmit={(e) => e.preventDefault()} className="grid gap-4 sm:grid-cols-3">
          <input name="form_name" type="text" placeholder="Full Name" className={field} />
          <input name="form_email" type="email" placeholder="Email Address" className={field} />
          <input name="form_phone" type="tel" placeholder="Phone Number" className={field} />
          <DateInput name="form_checkin" placeholder="Check-in Date" className={field} />
          <DateInput name="form_checkout" placeholder="Check-out Date" className={field} />
          <input name="form_guests" type="number" min={1} placeholder="Number of Guests" className={field} />
          <textarea name="form_message" rows={5} placeholder="Your Message" className={`${field} sm:col-span-3`} />
          <div className="sm:col-span-3">
            <Button type="submit" className="!px-8 !py-4 bg-primary/50 border-none">
              <span className='text-dark'>SUBMIT ENQUIRY</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
