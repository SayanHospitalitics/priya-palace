import PageTitle from '../components/Shared/PageTitle'
import Page from '../components/Shared/Page'
import { roomsList } from '../content/room'
import { roomName } from '../content/roomHelpers'
import { classicRoomImages } from '../content/images'
import RoomsIntro from '../components/RoomsScreen/RoomsIntro'
import RoomSection from '../components/RoomsScreen/RoomSection'
import RoomsHelp from '../components/RoomsScreen/RoomsHelp'

export default function RoomsScreen() {
  return (
    <Page title="Rooms & Suites | Hotel Priya Palace">
      <PageTitle title="Rooms & Suites" crumb="Rooms & Suites" image={classicRoomImages[0]} />
      <RoomsIntro />
      <div className='mt-14'>
        {roomsList.map((r, i) => (
          <RoomSection key={roomName(r)} room={r} index={i} />
        ))}
      </div>
      <RoomsHelp />
    </Page>
  )
}

