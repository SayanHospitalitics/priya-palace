import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { roomsList } from '../../../content/room'
import { currentRoom, roomName } from '../../../content/roomHelpers'
import Container from '../../Shared/Container'
import SectionHeading from '../../Shared/SectionHeading'
import Button from '../../Shared/Button'

// "Explore Other Rooms": the other rooms as a row of cards, styled like ListingView
// (photo with an offset gold frame, white text panel overlapping it with a gold top + left edge).
export default function OtherRooms() {
  const { index } = currentRoom()
  const others = roomsList.map((r, i) => ({ r, i })).filter(({ i }) => i !== index)

  return (
    <section className="section pt-0 bg-white">
      <Container>
        <SectionHeading label="Our Rooms" center>Explore Other Rooms</SectionHeading>
        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-14 px-4 lg:mt-12 lg:gap-x-16 md:grid-cols-2 lg:grid-cols-3">
          {others.map(({ r, i }) => (
            <Link key={i} to={`/rooms-and-suites/room-details?room=${i}`} className="group flex flex-col">
              <div className="relative">
                <div className="pointer-events-none absolute z-10 inset-0 translate-x-4 translate-y-4 border-2 border-primary/40 group-hover:border-primary" />
                <div className="relative overflow-hidden">
                  <img src={r.image} alt={roomName(r)} className="aspect-[4/3] w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
              <div className="relative z-20 -mt-14 flex flex-1 -translate-x-4 flex-col border-t-2 border-s-2 border-t-primary/40 group-hover:border-t-primary border-s-primary/40 group-hover:border-s-primary bg-white p-5 pb-0">
                <span className="font-script text-medium leading-tight font-normal text-primary">{roomName(r)}</span>
                <h3 className="mt-2 mb-3 leading-tight text-dark">{r.shortDescription}</h3>
                <p className="mb-4 text-dark/60">{r.compareText[index]}</p>
                <Button className="mt-auto flex items-center gap-2 bg-primary/10 border-none ">
                  <span className='flex items-center gap-3 text-primary group-hover:text-dark group-hover:transition-all group-hover:ease-in-out group-hover:duration-300'>View Room <FaArrowRight className="transition-transform group-hover:translate-x-1" /></span>
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
