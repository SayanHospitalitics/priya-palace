import { FaDoorOpen } from 'react-icons/fa6'
import { roomsList } from '../../../content/room'
import { hotelContact } from '../../../content/restaurant'
import { currentRoom, roomName } from '../../../content/roomHelpers'
import { Link } from 'react-router-dom'

const field = 'block h-14 w-full appearance-none border border-dark/10 bg-white px-4  text-dark outline-none focus:border-primary'

export default function RoomDetailsSidebar() {
  const { room, index } = currentRoom()
  const others = roomsList.map((r, i) => ({ r, i })).filter(({ i }) => i !== index)

  return (
    <aside className="min-w-0">
      <div className="lg:sticky lg:top-24">
        <div className="mb-7.5 border border-primary/50 bg-white px-10 py-8 shadow-xl">
          <div className="mb-6 flex items-end justify-between">
            <h5>Reserve:</h5>
            <span className="text-right">Check-in: <span className="font-semibold text-dark">{hotelContact.checkIn}</span><br />Check-out: <span className="font-semibold text-dark">{hotelContact.checkOut}</span></span>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Check In" onFocus={(e) => (e.target.type = 'date')} className={`${field} col-span-2`} />
            <input type="text" placeholder="Check Out" onFocus={(e) => (e.target.type = 'date')} className={`${field} col-span-2`} />
            <select defaultValue="" className={`${field} col-span-2`}>
              <option value="" disabled>Room</option>
              {[1, 2, 3, 4, 'More'].map((n) => <option key={n}>{n}</option>)}
            </select>
            <select defaultValue="" className={field}>
              <option value="" disabled>Adults</option>
              {[1, 2, 3, 4, 'More'].map((n) => <option key={n}>{n}</option>)}
            </select>
            <select defaultValue="" className={field}>
              <option value="" disabled>Children</option>
              {[1, 2, 3, 4, 'More'].map((n) => <option key={n}>{n}</option>)}
            </select>
            <button type="submit" className="col-span-2 mt-2 h-15 cursor-pointer border border-dark bg-dark font-semibold uppercase tracking-widest text-primary transition-colors hover:border-primary hover:bg-primary hover:text-dark">
              Check Availability
            </button>
          </form>
        </div>

        <div className="bg-light p-7.5">
          <h3 className="mb-5">Explore Other Rooms</h3>
          <ul className="m-0 list-none p-0">
            {others.map(({ r, i }) => (
              <li key={i} className="mb-5 flex items-center gap-4 last:mb-0">
                <img src={r.gallery[0]} alt="" className="size-18 shrink-0 object-cover" />
                <div>
                  <span className="flex items-center gap-1.5 font-serif text-dark"><FaDoorOpen className="shrink-0 text-primary" />{roomName(r)}</span>
                  <p className="mb-1">{r.compareText[index]}</p>
                  <Link to={`/rooms-and-suites/room-details?room=${i}`} className="font-semibold text-dark hover:text-primary">View Room</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}
