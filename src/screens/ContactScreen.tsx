import ContactForm from '../components/ContactScreen/ContactForm'
import ContactInfo from '../components/ContactScreen/ContactInfo'
import MapSection from '../components/ContactScreen/MapSection'
import Container from '../components/Shared/Container'
import Page from '../components/Shared/Page'
import PageTitle from '../components/Shared/PageTitle'
import { pageBanners } from '../content/images'

export default function ContactScreen() {
  return (
    <Page title="Contact Us | Hotel Priya Palace">
      <PageTitle title="Contact Hotel Priya Palace" crumb="Contact" image={pageBanners.contact} />
      <section className="relative">
        <Container className="pt-28 pb-18 max-md:pt-16">
          <div className="grid gap-x-12 gap-y-14 lg:grid-cols-[7fr_5fr]">
            <ContactForm />
            <ContactInfo />
          </div>
        </Container>
      </section>
      <MapSection />
    </Page>
  )
}
