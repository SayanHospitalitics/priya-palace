import { Link } from 'react-router-dom'

// Solid button with the "dark slide-in" hover. Renders <a> when href is given, otherwise <button>.
const base =
  "group relative z-0 inline-flex cursor-pointer items-center justify-center overflow-hidden border border-dark bg-dark px-10.5 py-4 text-center  font-semibold uppercase  tracking-widest text-primary transition-colors hover:text-dark before:absolute before:inset-0 before:-z-10 before:origin-top-right before:scale-x-0 before:bg-primary before:transition-transform before:duration-500 hover:border-primary hover:before:origin-bottom-left hover:before:scale-x-100"

export default function Button({ href = undefined, className = "", children, ...props }) {
  const cls = `${base} ${className}`
  return href ? (
    <Link to={href} className={cls} {...props}>{children}</Link>
  ) : (
    <button className={cls} {...props}>{children}</button>
  )
}
