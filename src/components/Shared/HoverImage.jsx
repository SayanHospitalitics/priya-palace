// Card photo with the "slide & blur" hover effect. Put `group` on the card around it:
// two stacked copies - the front one slides out blurred, the other slides in sharp.
export default function HoverImage({ src, alt = '', href, className = '' }) {
  const Tag = href ? 'a' : 'div'
  return (
    <Tag href={href} className={`relative block overflow-hidden ${className}`}>
      <img src={src} alt="" aria-hidden="true" className="absolute inset-0 z-10 size-full translate-x-1/2 scale-x-200 object-cover opacity-0 blur-sm transition-all duration-500 group-hover:translate-x-0 group-hover:scale-x-100 group-hover:opacity-100 group-hover:blur-none" />
      <img src={src} alt={alt} className="relative block size-full object-cover transition-all duration-500 group-hover:-translate-x-1/2 group-hover:scale-x-200 group-hover:opacity-0 group-hover:blur-sm" />
    </Tag>
  )
}
