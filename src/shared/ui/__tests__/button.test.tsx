import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from '../button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies default variant classes', () => {
    render(<Button>Test</Button>)
    const btn = screen.getByText('Test')
    expect(btn).toHaveClass('bg-blue-600')
  })

  it('applies outline variant classes', () => {
    render(<Button variant="outline">Outline</Button>)
    const btn = screen.getByText('Outline')
    expect(btn).toHaveClass('border-blue-600')
  })

  it('is disabled when disabled prop passed', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByText('Disabled')).toBeDisabled()
  })
})
