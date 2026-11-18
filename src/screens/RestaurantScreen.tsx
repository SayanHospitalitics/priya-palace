import { pageBanners } from '../content/images'
import PageTitle from '../components/Shared/PageTitle'
import Page from '../components/Shared/Page'
import RestaurantIntro from '../components/RestaurantScreen/RestaurantIntro'
import RestaurantSection from '../components/RestaurantScreen/RestaurantSection'
import RestaurantVisit from '../components/RestaurantScreen/RestaurantVisit'

export default function RestaurantScreen() {
  return (
    <Page title="Dhansiri Restaurant | Hotel Priya Palace">
      <PageTitle title="Dhansiri Restaurant" crumb="Restaurant" image={pageBanners.restaurant} />
      <RestaurantIntro />
      <RestaurantSection />
      <RestaurantVisit />
    </Page>
  )
}

