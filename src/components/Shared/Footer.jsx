import { socialLinks } from '../../content/social'
import { FaFacebookF, FaHeart, FaInstagram, FaLinkedin, FaPaperPlane, FaWhatsapp } from 'react-icons/fa6'
import logo from '../../assets/images/logo.png'
import { hotelContact } from '../../content/restaurant'
import Container from './Container'
import { navLinks } from './navLinks'
import { Link } from 'react-router-dom'

// every page link (same list as the menu) plus the legal pages
const quickLinks = [
  ...navLinks,
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
]

const Title = ({ children }) => <h4 className="mb-5 text-white lg:mb-7">{children}</h4>
const FooterLink = ({ href = '#', children }) => (
  <Link to={href} className="inline-block py-1 text-white/50 transition-colors hover:text-primary">{children}</Link>
)

export default function Footer() {
  return (
    <footer className="relative border-t-2 border-primary bg-dark text-white/50">
      <div className="pt-14 pb-8 sm:pt-20 lg:pt-28">
        <Container>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-[4fr_3fr_4fr]">
            <div>
              <a href="#"><img src={logo} alt="Hotel Priya Palace" className="block h-13 w-auto" /></a>
              <p className="mt-5 mb-0 max-w-xs text-white/50">Hotel Priya Palace brings together comfortable accommodation, inviting dining and thoughtfully arranged event spaces in Ulubari.</p>
              {/* <form onSubmit={(e) => e.preventDefault()} className="relative mt-7.5">
                <input type="email" required placeholder="Email Address" className="block h-18 w-full border border-white/5 bg-white/[0.06] py-5 pr-16 pl-4.5 text-white outline-none placeholder:text-white/50" />
                <button type="submit" aria-label="Subscribe" className="absolute top-0 right-0 grid h-18 w-17 cursor-pointer place-items-center border-0 bg-transparent p-0 text-medium text-primary">
                  <FaPaperPlane />
                </button>
              </form> */}
              <h4 className="mt-7.5 mb-3 text-white">Follow Us</h4>
              <ul className="m-0 flex list-none gap-4 p-0">
                {socialLinks.map(({ label, Icon, url }) => (
                  <li key={label}><a href={url} target="_blank" rel="noreferrer" aria-label={label} className="text-medium text-white/50 hover:text-primary"><Icon /></a></li>
                ))}
              </ul>
            </div>

            <div className="lg:pl-12">
              <Title>Quick Links</Title>
              <ul className="m-0 list-none p-0">{quickLinks.map((l) => <li key={l.label}><FooterLink href={l.href}>{l.label}</FooterLink></li>)}</ul>
            </div>

            <div className="flex flex-col gap-12">
              <div>
                <Title>Contact</Title>
                <p className="mb-2.5">{hotelContact.address}</p>
                <a href={`tel:${hotelContact.phones[0].replace(/\s/g, '')}`} className="mb-2.5 block text-white/50 hover:text-primary">{hotelContact.phones[0]}</a>
                <a href={`mailto:${hotelContact.email}`} className="mb-2.5 block break-all text-white/50 hover:text-primary">{hotelContact.email}</a>
                <p className="mb-0">Check-in: {hotelContact.checkIn} | Check-out: {hotelContact.checkOut}</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="border-t border-white/10 pt-4 pb-5">
        <Container className="flex flex-col items-center justify-between gap-1 text-center text-white/50 sm:flex-row">
          <p className="m-0">&copy; 2026 <span className="text-white">Hotel Priya Palace</span></p>
          <p className="m-0 inline-flex flex-wrap items-center justify-center gap-1.5">
            Designed &amp; Developed with <FaHeart className="text-primary" aria-label="love" /> by
            <a href="https://eviotel.ai" target="_blank" rel="noreferrer" className="transition-colors text-primary hover:underline">Eviotel.ai</a>
          </p>
        </Container>
      </div>
    </footer>
  )
}
