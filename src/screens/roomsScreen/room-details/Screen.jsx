import RoomDetailsMain from '../../../components/rooms-and-suites/room-details/RoomDetailsMain'
import RoomDetailsSidebar from '../../../components/rooms-and-suites/room-details/RoomDetailsSidebar'
import Container from '../../../components/Shared/Container'
import Footer from '../../../components/Shared/Footer'
import Header from '../../../components/Shared/Header'
import Page from '../../../components/Shared/Page'
import PageTitle from '../../../components/Shared/PageTitle'
import { currentRoom, roomName } from '../../../content/roomHelpers'

export default function RoomDetailsScreen() {
  const { room } = currentRoom()
  return (
    <Page title={`${roomName(room)} | Hotel Priya Palace`}>
      <Header />
      <PageTitle title={roomName(room)} crumb="Room Details" image={room.gallery[0]} />
      <section className="relative section">
        <Container>
          <div className="grid items-stretch gap-x-10 gap-y-14 lg:grid-cols-[7fr_5fr] xl:grid-cols-[2fr_1fr]">
            <RoomDetailsMain />
            <RoomDetailsSidebar />
          </div>
        </Container>
      </section>
      <Footer />
    </Page>
  )
}
