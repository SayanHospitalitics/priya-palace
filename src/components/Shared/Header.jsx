import { socialLinks } from '../../content/social'
import { useEffect, useState } from 'react'
import { FaBars, FaFacebookF, FaInstagram, FaMagnifyingGlass, FaPhone, FaPinterest, FaRegClock, FaRegEnvelope, FaXTwitter, FaXmark } from 'react-icons/fa6'
import logoDark from '../../assets/images/logo.png'
import logoLight from '../../assets/images/logo.png'
import { hotelContact } from '../../content/restaurant'
import Container from './Container'
import { currentLinkIndex, navLinks } from './navLinks'
import { Link, useLocation } from 'react-router-dom'

const linkBase =
  "relative flex items-center  uppercase  tracking-wider transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:bg-current after:transition-all hover:text-primary hover:after:w-full"

function DesktopLinks({ current }) {
  return (
    <ul className="m-0 flex list-none gap-9 p-0">
      {navLinks.map((l, i) => (
        <li key={l.label}>
          <Link to={l.href} className={`${linkBase} ${i === current ? 'text-primary after:w-full' : 'text-dark after:w-0'}`}>
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { pathname } = useLocation()
  const current = currentLinkIndex(pathname)

  useEffect(() => {
    setMenuOpen(false)
    setSearchOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* main header */}
      <header className="relative z-80 w-full border-b border-primary/40 bg-white">
        <Container>
          <div className="flex items-center">
            <Link to="/" className='py-2'><img src={logoDark} alt="Hotel Priya Palace" className="block h-12 w-auto" /></Link>
            <nav className="ml-auto hidden lg:block"><DesktopLinks current={current} /></nav>
            {/* <div className="ml-9 flex items-center gap-10 lg:ml-9 max-lg:ml-auto">
              <button type="button" aria-label="Search" onClick={() => setSearchOpen(true)} className="cursor-pointer border-0 bg-transparent p-0 text-medium text-primary">
                <FaMagnifyingGlass />
              </button>
              <button type="button" aria-label="Menu" onClick={() => setMenuOpen(true)} className="cursor-pointer border-0 bg-transparent p-0 text-medium text-dark/60">
                <FaBars />
              </button>
            </div> */}
          </div>
        </Container>
      </header>

      {/* sticky header, shown after scrolling */}
      <div
        className={`fixed inset-x-0 top-0 z-90 h-18 bg-white shadow-lg transition-opacity ${scrolled ? 'animate-slide-in-down opacity-100' : 'pointer-events-none invisible opacity-0'}`}
      >
        <Container className="flex h-full items-center">
          <Link to="/"><img src={logoDark} alt="Hotel Priya Palace" className="block max-h-12 w-auto" /></Link>
          <nav className="ml-auto hidden lg:block"><DesktopLinks current={current} /></nav>
          <button type="button" aria-label="Menu" onClick={() => setMenuOpen(true)} className="ml-auto cursor-pointer border-0 bg-transparent p-0 text-medium text-primary lg:hidden">
            <FaBars />
          </button>
        </Container>
      </div>

      {/* mobile / side menu */}
      <div className={`fixed inset-0 z-100 ${menuOpen ? 'visible' : 'invisible'}`}>
        <div onClick={() => setMenuOpen(false)} className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`} />
        <nav className={`absolute top-0 right-0 flex h-full w-75 max-w-full flex-col overflow-y-auto bg-dark transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between px-5 py-4">
            <Link to="/"><img src={logoLight} alt="" className="block h-12 w-auto" /></Link>
            <button type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)} className="grid size-7.5 cursor-pointer place-items-center border-0 bg-white/10 p-0 text-white">
              <FaXmark />
            </button>
          </div>
          <ul className="m-0 list-none border-t border-white/10 p-0">
            {navLinks.map((l, i) => (
              <li key={l.label} className="border-b border-white/10">
                <Link to={l.href} className={`block px-5 py-2.5 capitalize  ${i === current ? 'text-primary' : 'text-white'}`}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="m-0 list-none px-5 pt-7.5 pb-5 text-white">
            {[
              { Icon: FaPhone, title: 'Call Now', body: <a href={`tel:${hotelContact.phones[0].replace(/\s/g, '')}`} className="text-white">{hotelContact.phones[0]}</a> },
              { Icon: FaRegEnvelope, title: 'Send Email', body: <a href={`mailto:${hotelContact.email}`} className="break-all text-white">{hotelContact.email}</a> },
              { Icon: FaRegClock, title: 'Check-in / Check-out', body: `${hotelContact.checkIn} / ${hotelContact.checkOut}` },
            ].map(({ Icon, title, body }) => (
              <li key={title} className="relative mb-5 min-h-12 pl-14">
                <Icon className="absolute top-1 left-0 text-medium text-primary" />
                <span className="block uppercase  text-primary">{title}</span>
                {body}
              </li>
            ))}
          </ul>
          <ul className="m-0 mt-auto flex list-none border-t border-white/10 bg-dark p-0">
            {socialLinks.map(({ label, Icon, url }) => (
              <li key={label} className="flex-1 border-r border-white/10 text-center last:border-r-0">
                <a href={url} target="_blank" rel="noreferrer" aria-label={label} className="block text-white"><Icon className="mx-auto" /></a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* search popup */}
      <div className={`fixed inset-0 z-60 transition-all duration-500 ${searchOpen ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'}`}>
        <span onClick={() => setSearchOpen(false)} className="absolute inset-0 block bg-dark/95" />
        <button type="button" aria-label="Close search" onClick={() => setSearchOpen(false)} className="absolute top-7.5 right-7.5 z-30 cursor-pointer border-0 bg-transparent p-0 text-medium text-white">
          <FaXmark />
        </button>
        <div className="relative z-10 mx-auto mt-[45vh] max-w-3xl px-5">
          <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
            <input type="search" placeholder="Search..." required className="block w-full border border-light bg-white px-5 py-4 text-dark outline-none" />
            <button type="submit" aria-label="Search" className="absolute top-1/2 right-1.5 grid size-9.5 -translate-y-1/2 cursor-pointer place-items-center border-0 bg-white p-0 text-primary">
              <FaMagnifyingGlass />
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
