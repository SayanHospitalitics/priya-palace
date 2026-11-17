// All photos, grouped by section. Each folder in src/assets/images is numbered 1.jpg, 2.jpg, ...
// (optimised copies; the untouched originals are in src/assets/originals).

import homeBanner from '../assets/images/home/banner.jpg'
import homeAbout1 from '../assets/images/home/about-1.jpg'
import homeAbout2 from '../assets/images/home/about-2.jpg'
import homeWhy from '../assets/images/home/why-choose-us.jpg'
import homeContact from '../assets/images/home/contact.jpg'
import contactBanner from '../assets/images/banners/contact.jpg'
import restaurantBanner from '../assets/images/banners/restaurant.jpg'
import galleryBanner from '../assets/images/banners/gallery.jpg'

type Glob = Record<string, string>
const num = (path: string) => Number(path.match(/(\d+)\.jpg$/)?.[1])
const load = (g: Glob) =>
    Object.entries(g)
        .sort(([a], [b]) => num(a) - num(b))
        .map(([, url]) => url)
/** pick photos by their file number (1-based), in the order given */
const pick = (all: string[], numbers: number[]) => numbers.map((n) => all[n - 1])

const facade = load(import.meta.glob('../assets/images/facade/*.jpg', { eager: true, query: '?url', import: 'default' }))
const parking = load(import.meta.glob('../assets/images/parking/*.jpg', { eager: true, query: '?url', import: 'default' }))
const reception = load(import.meta.glob('../assets/images/reception/*.jpg', { eager: true, query: '?url', import: 'default' }))
const restaurant = load(import.meta.glob('../assets/images/restaurant/*.jpg', { eager: true, query: '?url', import: 'default' }))
const classic = load(import.meta.glob('../assets/images/rooms/classic/*.jpg', { eager: true, query: '?url', import: 'default' }))
const executive = load(import.meta.glob('../assets/images/rooms/executive/*.jpg', { eager: true, query: '?url', import: 'default' }))
const corporate = load(import.meta.glob('../assets/images/rooms/corporate/*.jpg', { eager: true, query: '?url', import: 'default' }))

// Galleries: best bedroom shots first, bathrooms last. Change the numbers to reorder / add photos.
export const classicRoomImages = pick(classic, [15, 4, 7, 14, 11, 9, 1, 2])
export const executiveRoomImages = pick(executive, [1, 5, 8, 11, 10, 2, 14, 13])
export const corporateRoomImages = pick(corporate, [1, 2, 3, 4, 5, 7, 6, 9])
export const restaurantImages = pick(restaurant, [2, 4, 1, 5, 6, 7, 8, 9])

// Home screen sections (hero, about, why-choose-us and contact come from the 'HPP WEBSITE IMAGES' Drive folder)
export const homeImages = {
    hero: homeBanner, // 1900 x 740
    aboutLarge: homeAbout1, // 1045 x 1726
    aboutSmall: homeAbout2, // 1045 x 1726
    whyChooseUs: homeWhy, // 1097 x 1282
    video: facade[4], // aerial view
    contact: homeContact, // 1163 x 899
    news: pick(reception, [8, 7, 10]),
}

// Page banners, 1903 x 500
export const pageBanners = { contact: contactBanner, restaurant: restaurantBanner, gallery: galleryBanner }

// Every photo of a folder, for sections that show a full gallery
export const allImages = { facade, parking, reception, restaurant, classic, executive, corporate }
