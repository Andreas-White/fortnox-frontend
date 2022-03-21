import { render, screen } from '@testing-library/react'
import Home from '../../components/home'

test('should render homepage title', () => {
  render(<Home />)
  const headingElement = screen.getByText(/Welcome to Fortnox/i)
  expect(headingElement).toBeInTheDocument()
})
