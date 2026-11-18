import { banquets } from '../content/banquets'
import PageTitle from '../components/Shared/PageTitle'
import Page from '../components/Shared/Page'
import BanquetsIntro from '../components/BanquetsScreen/BanquetsIntro'
import BanquetSection from '../components/BanquetsScreen/BanquetSection'
import BanquetEnquiry from '../components/BanquetsScreen/BanquetEnquiry'

export default function BanquetsScreen() {
  return (
    <Page title="Banquets | Hotel Priya Palace">
      <PageTitle title="Banquets & Events" crumb="Banquets" image={banquets[0].images[0]} />
      <BanquetsIntro />
      <div className='pt-14'>
        {banquets.map((b, i) => (
          <BanquetSection key={b.name} banquet={b} index={i} />
        ))}
      </div>
      <BanquetEnquiry />
    </Page>
  )
}

