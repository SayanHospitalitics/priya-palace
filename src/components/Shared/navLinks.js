export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Rooms & Suites', href: '/rooms-and-suites/rooms-search-result' },
  { label: 'Banquets', href: '/banquets' },
  { label: 'Restaurant', href: '/restaurant' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact/contact' },
]

/** index of the link that matches the current page (the first match wins) */
export function currentLinkIndex(pathname = window.location.pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'
  return navLinks.findIndex(
    (l) => l.href !== '#' && (path === l.href || (l.href !== '/' && path.startsWith(l.href.startsWith('/rooms-and-suites') ? '/rooms-and-suites' : l.href))),
  )
}
