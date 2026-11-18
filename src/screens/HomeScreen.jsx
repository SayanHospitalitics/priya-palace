import About from '../components/HomeScreen/About'
import Banner from '../components/HomeScreen/Banner'
import Contact from '../components/HomeScreen/Contact'
import Rooms from '../components/HomeScreen/Rooms'
import Testimonials from '../components/HomeScreen/Testimonials'
import VideoSection from '../components/HomeScreen/VideoSection'
import WhyChooseUs from '../components/HomeScreen/WhyChooseUs'
import Page from '../components/Shared/Page'

export default function HomeScreen() {
  return (
    <Page title="Hotel Priya Palace">
      <Banner />
      <About />
      <Rooms />
      <WhyChooseUs />
      <VideoSection />
      <Testimonials />
      <Contact />
    </Page>
  )
}
