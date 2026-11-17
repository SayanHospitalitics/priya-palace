export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Banquets', href: '/banquets' },
  { label: 'Restaurant', href: '/restaurant' },
  { label: 'Rooms & Suites', href: '/rooms-and-suites/rooms-search-result' },
  { label: 'Gallery', href: '#' },
  { label: 'Contact', href: '/contact/contact' },
]

/** index of the link that matches the current page (the first match wins) */
export function currentLinkIndex() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  return navLinks.findIndex(
    (l) => l.href !== '#' && (path === l.href || (l.href !== '/' && path.startsWith(l.href.startsWith('/rooms-and-suites') ? '/rooms-and-suites' : l.href))),
  )
}
