import { Fragment } from 'react'
import { FaChevronRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Container from './Container'

// Inner-page banner: a photo with a dark overlay, the title and a breadcrumb trail (Home > [parents] > current page).
// `parents` = optional middle steps, e.g. [{ label: 'Rooms & Suites', to: '/rooms-and-suites/rooms-search-result' }].
// `position` is the CSS background-position of the photo (default centre), e.g. 'bottom' to show the lower part.
export default function PageTitle({ title, crumb = title, image, position = 'center', parents = [] }) {
  const trail = [{ label: 'Home', to: '/' }, ...parents, { label: crumb }]

  return (
    <section
      className="relative flex min-h-75 w-full items-center bg-cover pt-10 md:pt-0 lg:min-h-[26.3vw]"
      style={{ backgroundPosition: position, backgroundImage: `linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.7)), url(${image})` }}
    >
      <Container className="text-center">
        <h1 className="relative mb-4 text-white max-md:leading-tight">{title}</h1>
        <div className="mx-auto mb-5 flex items-center justify-center gap-3"><span className="h-px w-16 bg-primary" /><span className="size-1.5 rotate-45 bg-primary" /><span className="h-px w-16 bg-primary" /></div>
        <nav aria-label="Breadcrumb" className="inline-block max-w-full rounded-full px-4 py-2 sm:px-6 backdrop-blur-xl">
          <ol className="m-0 flex list-none flex-wrap items-center justify-center gap-x-3 gap-y-1 p-0 uppercase tracking-widest">
            {trail.map((step, i) => (
              <Fragment key={step.label}>
                {i > 0 && <li aria-hidden="true" className="text-primary"><FaChevronRight className="size-3" /></li>}
                <li>
                  {step.to ? (
                    <Link to={step.to} className="text-white/80 transition-colors hover:text-primary">{step.label}</Link>
                  ) : (
                    <span aria-current="page" className="text-primary">{step.label}</span>
                  )}
                </li>
              </Fragment>
            ))}
          </ol>
        </nav>
      </Container>
    </section>
  )
}
