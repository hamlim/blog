'use client'
import { Component, type ReactNode } from 'react'

export class ErrorBoundary extends Component<
  | {
      fallback: ReactNode
      children: ReactNode
      onError?: (error: Error) => void
    }
  | {
      children: ReactNode
      FallbackComponent: React.ComponentType<{
        error: Error
        reset: () => void
      }>
      onError?: (error: Error) => void
    },
  { error: Error | null }
> {
  static getDerivedStateFromError(error: Error) {
    return { error }
  }
  state = { error: null }
  componentDidCatch(error: Error): void {
    this.props.onError?.(error)
  }
  render() {
    if (this.state.error) {
      if ('FallbackComponent' in this.props) {
        return (
          <this.props.FallbackComponent
            error={this.state.error}
            reset={() => {
              this.setState({ error: null })
            }}
          />
        )
      }
      return this.props.fallback
    }
    return this.props.children
  }
}
