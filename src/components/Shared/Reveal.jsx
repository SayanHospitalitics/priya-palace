import useInView from './useInView'

// Fades its children in (from below) the first time they scroll into view.
export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, shown] = useInView()
  return (
    <Tag ref={ref} style={{ animationDelay: `${delay}ms` }} className={`${shown ? 'animate-fade-in-up' : 'opacity-0'} ${className}`}>
      {children}
    </Tag>
  )
}
