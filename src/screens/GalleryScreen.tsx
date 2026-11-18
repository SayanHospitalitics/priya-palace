import GalleryGrid from '../components/GalleryScreen/GalleryGrid'
import Page from '../components/Shared/Page'
import PageTitle from '../components/Shared/PageTitle'
import SectionHeading from '../components/Shared/SectionHeading'
import { galleryIntro } from '../content/gallery'
import { pageBanners } from '../content/images'

export default function GalleryScreen() {
  return (
    <Page title="Gallery | Hotel Priya Palace">
      <PageTitle title="Gallery" crumb="Gallery" image={pageBanners.gallery} />
      <section className="bg-white px-4 pt-14 pb-10 text-center sm:px-6 sm:pt-20 sm:pb-12 lg:pt-28">
        <div className="mx-auto max-w-3xl">
          <SectionHeading label={galleryIntro.label} center>{galleryIntro.headline}</SectionHeading>
          <p className="mb-0 text-dark/60">{galleryIntro.description}</p>
        </div>
      </section>
      <GalleryGrid />
    </Page>
  )
}
