// Centered page container
export default function Container({ className = '', as: Tag = 'div', ...props }) {
  return <Tag className={`mx-auto w-full max-w-6xl px-6 ${className}`} {...props} />
}
