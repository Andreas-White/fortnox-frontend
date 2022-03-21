import { render, screen } from '@testing-library/react'
import App from '../App'
import { BrowserRouter } from 'react-router-dom'

test('renders navbar', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  const navbarElement = screen.getByTestId('nav-bar-test-id')
  expect(navbarElement).toBeInTheDocument()
  expect(navbarElement).toBeEnabled()
  expect(navbarElement).toHaveClass('nav-bar')
})

describe('Testing Links', () => {
  test('renders Home link', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const linkElement = screen.getByText(/Home/i)
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toBeEnabled()
  })

  test('renders /addbox link', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const linkElement = screen.getByText(/Create a new box/i)
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toBeEnabled()
  })

  test('renders /listboxes link', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const linkElement = screen.getByText(/Check all boxes/i)
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toBeEnabled()
  })
})

describe('Links directs to the right url', () => {
  test('Home links to the right url', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const linkElement = screen.getByText(/Home/i)
    expect(linkElement.href).toEqual('http://localhost/')
  })

  test('Create a new box links to the right url', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const linkElement = screen.getByText(/Create a new box/i)
    expect(linkElement.href).toEqual('http://localhost/addbox')
  })

  test('Check all boxes links to the right url', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const linkElement = screen.getByText(/Check all boxes/i)
    expect(linkElement.href).toEqual('http://localhost/listboxes')
  })
})
