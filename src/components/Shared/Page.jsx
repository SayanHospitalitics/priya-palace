import { useEffect } from 'react'

// Per-screen wrapper: sets the browser tab title. (Header, Footer and smooth scrolling are in Layout.)
export default function Page({ title, children }) {
  useEffect(() => {
    document.title = title
  }, [title])

  return <div className="relative w-full">{children}</div>
}
