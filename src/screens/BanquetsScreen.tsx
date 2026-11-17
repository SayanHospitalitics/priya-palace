import { banquets } from '../content/banquets'
import Header from '../components/Shared/Header'
import PageTitle from '../components/Shared/PageTitle'
import Footer from '../components/Shared/Footer'
import Page from '../components/Shared/Page'
import BanquetsIntro from '../components/BanquetsScreen/BanquetsIntro'
import BanquetSection from '../components/BanquetsScreen/BanquetSection'
import BanquetEnquiry from '../components/BanquetsScreen/BanquetEnquiry'

export default function BanquetsScreen() {
  return (
    <Page title="Banquets | Hotel Priya Palace">
      <Header />
      <PageTitle title="Banquets & Events" crumb="Banquets" image={banquets[0].images[0]} />
      <BanquetsIntro />
      {banquets.map((b, i) => (
        <BanquetSection key={b.name} banquet={b} index={i} />
      ))}
      <BanquetEnquiry />
      <Footer />
    </Page>
  )
}

