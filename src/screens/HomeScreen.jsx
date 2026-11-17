import About from '../components/HomeScreen/About'
import Banner from '../components/HomeScreen/Banner'
import Contact from '../components/HomeScreen/Contact'
import Rooms from '../components/HomeScreen/Rooms'
import ScrollToTop from '../components/HomeScreen/ScrollToTop'
import Testimonials from '../components/HomeScreen/Testimonials'
import VideoSection from '../components/HomeScreen/VideoSection'
import WhyChooseUs from '../components/HomeScreen/WhyChooseUs'
import Footer from '../components/Shared/Footer'
import Header from '../components/Shared/Header'
import Page from '../components/Shared/Page'

export default function HomeScreen() {
  return (
    <Page title="Hotel Priya Palace">
      <Header />
      <Banner />
      <About />
      <Rooms />
      <WhyChooseUs />
      <VideoSection />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </Page>
  )
}
