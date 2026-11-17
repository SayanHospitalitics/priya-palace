import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'

// Catches any render error so a bug in one page never leaves a blank white screen.
export default class ErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Page crashed:', error, info.componentStack)
  }

  render() {
    if (!this.state.failed) return this.props.children
    return (
      <main className="grid min-h-screen place-items-center bg-light px-6 text-center">
        <div>
          <h1 className="font-display">Something went wrong</h1>
          <p className="mx-auto mt-4 max-w-md">The page could not be displayed. Please reload, or go back to the home page.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button type="button" onClick={() => window.location.reload()} className="cursor-pointer border border-dark bg-dark px-8 py-4 uppercase tracking-widest text-primary transition hover:border-primary hover:bg-primary hover:text-dark">
              Reload
            </button>
            <a href="/" className="border border-dark px-8 py-4 uppercase tracking-widest text-dark transition hover:bg-dark hover:text-primary">Home</a>
          </div>
        </div>
      </main>
    )
  }
}
