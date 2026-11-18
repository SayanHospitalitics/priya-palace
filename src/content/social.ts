import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa6'

// Single place for the hotel's social profiles. Paste each full URL below;
// an empty url is hidden everywhere (footer + mobile menu).
export const socialLinks = [
  // Instagram URL is built from the handle in the content PDF (@hotelpriyapalaceguwahati) – please confirm it.
  { label: 'Instagram', Icon: FaInstagram, url: 'https://www.instagram.com/hotelpriyapalaceguwahati' },
  { label: 'Facebook', Icon: FaFacebookF, url: '' },
  { label: 'WhatsApp', Icon: FaWhatsapp, url: 'https://wa.me/917086653839' }, // from the hotel phone number
  // { label: 'YouTube', Icon: FaYoutube, url: 'https://www.youtube.com/watch?v=Fvae8nxzVz4' }, // video already used on the home page – replace with the channel URL
  { label: 'LinkedIn', Icon: FaLinkedinIn, url: '' },
].filter((s) => s.url)
