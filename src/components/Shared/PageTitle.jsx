import Container from './Container'
import { Link } from 'react-router-dom'

// Inner-page banner: a photo with a dark overlay, the title and a breadcrumb.
export default function PageTitle({ title, crumb = title, image }) {
  return (
    <section
      className="relative flex min-h-75 items-center bg-cover bg-center pt-10 md:pt-0"
      style={{ aspectRatio: '1903 / 500', backgroundImage: `linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.7)), url(${image})` }}
    >
      <Container className="text-center">
        <h1 className="relative mb-4 text-white  max-md:leading-tight">{title}</h1>
        <div className="mx-auto mb-5 flex items-center justify-center gap-3"><span className="h-px w-16 bg-primary" /><span className="size-1.5 rotate-45 bg-primary" /><span className="h-px w-16 bg-primary" /></div>
        <ul className="m-0 mt-1 flex list-none items-center justify-center gap-5 p-0 uppercase tracking-widest text-white">
          <li><Link to="/" className="text-white">Home</Link></li>
          <li>{crumb}</li>
        </ul>
      </Container>
    </section>
  )
}
