import RoomDetailsMain from '../../../components/rooms-and-suites/room-details/RoomDetailsMain'
import OtherRooms from '../../../components/rooms-and-suites/room-details/OtherRooms'
import RoomDetailsSidebar from '../../../components/rooms-and-suites/room-details/RoomDetailsSidebar'
import Container from '../../../components/Shared/Container'
import Page from '../../../components/Shared/Page'
import PageTitle from '../../../components/Shared/PageTitle'
import { currentRoom, roomName } from '../../../content/roomHelpers'

export default function RoomDetailsScreen() {
  const { room } = currentRoom()
  return (
    <Page title={`${roomName(room)} | Hotel Priya Palace`}>
      <PageTitle title={roomName(room)} crumb="Room Details" image={room.gallery[0]} position={room.bannerPosition} parents={[{ label: 'Rooms & Suites', to: '/rooms-and-suites/rooms-search-result' }]} />
      <section className="relative section">
        <Container>
          <div className="grid items-stretch gap-x-10 gap-y-14 lg:grid-cols-[7fr_5fr] xl:grid-cols-[2fr_1fr]">
            <RoomDetailsMain />
            <RoomDetailsSidebar />
          </div>
        </Container>
      </section>
      <OtherRooms />
    </Page>
  )
}
