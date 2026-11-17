// Small spaced-out label flanked by a fine gold rule, then a large serif heading.
const Rule = () => (
  <span className="inline-flex items-center gap-2" aria-hidden="true">
    <span className="h-px w-10 bg-primary" />
    <span className="size-1.5 rotate-45 bg-primary" />
  </span>
)

export default function SectionTitle({ sub, children, center = false, light = false, className = '' }) {
  return (
    <div className={`relative mb-12 ${center ? 'text-center' : ''} ${className}`}>
      <span className={`mb-2 inline-flex items-center gap-3 font-script text-medium leading-tight font-normal ${light ? 'text-white' : 'text-dark'}`}>
        {center && <Rule />}
        {sub}
        <Rule />
      </span>
      <h2 className={`relative max-md:leading-tight text-4xl ${light ? 'text-white' : 'text-dark'}`}>{children}</h2>
    </div>
  )
}
