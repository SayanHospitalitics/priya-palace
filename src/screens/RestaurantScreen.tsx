import { pageBanners } from '../content/images'
import Header from '../components/Shared/Header'
import PageTitle from '../components/Shared/PageTitle'
import Footer from '../components/Shared/Footer'
import Page from '../components/Shared/Page'
import RestaurantIntro from '../components/RestaurantScreen/RestaurantIntro'
import RestaurantSection from '../components/RestaurantScreen/RestaurantSection'
import RestaurantVisit from '../components/RestaurantScreen/RestaurantVisit'

export default function RestaurantScreen() {
  return (
    <Page title="Dhansiri Restaurant | Hotel Priya Palace">
      <Header />
      <PageTitle title="Dhansiri Restaurant" crumb="Restaurant" image={pageBanners.restaurant} />
      <RestaurantIntro />
      <RestaurantSection />
      <RestaurantVisit />
      <Footer />
    </Page>
  )
}

