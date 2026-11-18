// Source: HPP Website content.pdf - Gallery (intro text). Photos come from the project's image folders.
import { banquets } from './banquets'
import { allImages, corporateRoomImages, executiveRoomImages, queenRoomImages, restaurantImages, twinRoomImages } from './images'

export type GalleryPhoto = { src: string; caption?: string }
export type GalleryCategory = { id: string; label: string; photos: GalleryPhoto[] }

const plain = (srcs: string[]): GalleryPhoto[] => srcs.map((src) => ({ src }))
// the hand-picked best photos first, then every remaining photo of the folder(s), without repeats
const bestFirst = (best: string[], rest: string[]) => plain([...new Set([...best, ...rest])])

// "Near to visit" places: every photo dropped into src/assets/images/home/clients/ (the file name is the caption)
const nearby: GalleryPhoto[] = Object.entries(
  import.meta.glob('../assets/images/home/clients/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' }),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({ src: src as string, caption: decodeURIComponent(path.split('/').pop()!.replace(/\.[^.]+$/, '')) }))

// The order here is the order of the "All" tab and of the filter buttons.
export const galleryCategories: GalleryCategory[] = [
  { id: 'rooms', label: 'Rooms & suites', photos: bestFirst([...queenRoomImages, ...twinRoomImages, ...executiveRoomImages, ...corporateRoomImages], [...allImages.classic, ...allImages.executive, ...allImages.corporate]) },
  { id: 'restaurant', label: 'Restaurant', photos: bestFirst(restaurantImages, allImages.restaurant) },
  { id: 'banquets', label: 'Banquets', photos: plain(banquets.flatMap((b) => b.images)) },
  { id: 'reception', label: 'Reception', photos: plain(allImages.reception) },
  { id: 'front', label: 'Hotel', photos: plain(allImages.facade) },
  // { id: 'nearby', label: 'Nearby Places', photos: nearby },
]

export const galleryIntro = {
  label: 'A Closer Look',
  headline: 'Explore Hotel Priya Palace',
  description:
    'Take a look through the spaces that make up Hotel Priya Palace, from guest rooms and welcoming shared areas to banquet halls and Dhansiri Restaurant. Browse the gallery to get a better sense of the hotel before your visit.',
}
