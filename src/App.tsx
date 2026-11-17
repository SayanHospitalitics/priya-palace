import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import ErrorBoundary from './components/Shared/ErrorBoundary'
import BanquetsScreen from './screens/BanquetsScreen'
import ContactScreen from './screens/ContactScreen'
import HomeScreen from './screens/HomeScreen'
import RestaurantScreen from './screens/RestaurantScreen'
import RoomDetails from './screens/roomsScreen/room-details/Screen'
import RoomsScreen from './screens/RoomsScreen'

// Start every new page at the top (not for ?room=1 -> ?room=2 changes on the same page).
function ScrollToTopOnNavigate() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

// Remount the room page when the ?room= value changes so the gallery restarts on the first photo.
function RoomDetailsRoute() {
  const { search } = useLocation()
  return <RoomDetails key={search} />
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTopOnNavigate />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/banquets" element={<BanquetsScreen />} />
          <Route path="/restaurant" element={<RestaurantScreen />} />
          <Route path="/rooms-and-suites/rooms-search-result" element={<RoomsScreen />} />
          <Route path="/rooms-and-suites/room-details" element={<RoomDetailsRoute />} />
          <Route path="/contact/contact" element={<ContactScreen />} />

          {/* redirects: old / shortened addresses go to the real page, anything unknown goes home */}
          <Route path="/rooms-and-suites" element={<Navigate to="/rooms-and-suites/rooms-search-result" replace />} />
          <Route path="/rooms-and-suites/rooms" element={<Navigate to="/rooms-and-suites/rooms-search-result" replace />} />
          <Route path="/contact" element={<Navigate to="/contact/contact" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
