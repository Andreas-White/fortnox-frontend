import { render, screen } from '@testing-library/react'
import List from '../../components/list'

describe('Page Main Heading', () => {
  test('should render List Title', () => {
    render(<List />)
    const headingElement = screen.getByRole('heading', {
      level: 2,
      name: 'List of Boxes',
    })
    expect(headingElement).toBeInTheDocument()
  })
})

describe('Summary Headings', () => {
  test('should render Total Weight', () => {
    render(<List />)
    const headingElement = screen.getByText(/Total weight:/i)
    expect(headingElement).toBeInTheDocument()
    expect(headingElement).toBeTruthy()
    expect(headingElement).toBeVisible()
  })

  test('should render Total Cost', () => {
    render(<List />)
    const headingElement = screen.getByText(/Total cost:/i)
    expect(headingElement).toBeInTheDocument()
    expect(headingElement).toBeTruthy()
    expect(headingElement).toBeVisible()
  })
})

describe('Table Content HTMLElements', () => {
  test('should render table head receiver', () => {
    render(<List />)
    const tableHeaderElement = screen.getByRole('columnheader', {
      name: 'Receiver',
    })
    expect(tableHeaderElement).toBeInTheDocument()
    expect(tableHeaderElement).toBeTruthy()
    expect(tableHeaderElement).toBeVisible()
  })

  test('should render all table heads', () => {
    render(<List />)
    const tableHeaderElements = screen.getAllByRole('columnheader')
    expect(tableHeaderElements).not.toBeNull()
    expect(tableHeaderElements).toBeTruthy()
  })
})
