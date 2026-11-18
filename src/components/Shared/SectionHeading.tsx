import type { ReactNode } from 'react'

// Heading block used inside the Banquets, Restaurant and Rooms & Suites screens:
// small script label, the section title (h2) and a gold line-and-diamond divider.
export default function SectionHeading({ label, children, center = false, className = '' }: { label: ReactNode; children: ReactNode; center?: boolean; className?: string }) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      <span className="font-script text-medium leading-tight font-normal text-dark">{label}</span>
      <h2 className="mt-3 text-4xl leading-tight text-dark">{children}</h2>
      {/* <div className={`mt-2 mb-4 flex items-center gap-3 ${center ? 'justify-center' : ''}`} aria-hidden="true">
        <span className="h-px w-16 bg-primary" />
        <span className="size-2 rotate-45 bg-primary" />
        {center && <span className="h-px w-16 bg-primary" />}
      </div> */}
    </div>
  )
}
