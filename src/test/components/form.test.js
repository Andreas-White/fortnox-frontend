import { render, screen, fireEvent } from '@testing-library/react'
import Form from '../../components/form'

describe('Form Component', () => {
  test('should render form', () => {
    render(<Form />)
    const formElement = screen.getByTestId('form-box')
    expect(formElement).toBeInTheDocument()
    expect(formElement).toBeEnabled()
  })

  describe('Form inner elements', () => {
    test('should render and ensure text input field is required', () => {
      render(<Form />)
      const inputTextElement = screen.getByRole('textbox')
      expect(inputTextElement).toBeInTheDocument()
      expect(inputTextElement).toBeRequired()
    })

    test('should render and ensure number input field is required', () => {
      render(<Form />)
      const inputNumberElement = screen.getByRole('spinbutton')
      expect(inputNumberElement).toBeInTheDocument()
      expect(inputNumberElement).toBeRequired()
    })

    test('should render color input field ', () => {
      render(<Form />)
      const inputColorElement = screen.getByTestId('input-color')
      expect(inputColorElement).toBeInTheDocument()
    })

    test('should render and ensure select is required', () => {
      render(<Form />)
      const inputTextElement = screen.getByRole('combobox')
      expect(inputTextElement).toBeInTheDocument()
      expect(inputTextElement).toBeRequired()
    })

    test('should render Save button', () => {
      render(<Form />)
      const inputTextElement = screen.getByRole('button')
      expect(inputTextElement).toBeInTheDocument()
    })
  })

  describe('Form inner elements functionality', () => {
    test('should be able to type text in input field', () => {
      render(<Form />)
      const inputTextElement = screen.getByRole('textbox')
      fireEvent.change(inputTextElement, { target: { value: 'Username' } })
      expect(inputTextElement.value).toBe('Username')
    })

    test('should be able to type a number in input field', () => {
      render(<Form />)
      const inputNumberElement = screen.getByRole('spinbutton')
      fireEvent.change(inputNumberElement, { target: { value: 23 } })
      expect(inputNumberElement.value).toBe('23')
    })

    test('should render color input field ', () => {
      render(<Form />)
      const inputColorElement = screen.getByTestId('input-color')
      fireEvent.change(inputColorElement, { target: { value: '#FF6347' } })
      expect(inputColorElement.value).toBe('#ff6347')
    })

    test('should render and ensure select is required', () => {
      render(<Form />)
      const inputSelectElement = screen.getByRole('combobox')
      fireEvent.change(inputSelectElement, { target: { value: 'Brazil' } })
      expect(inputSelectElement.value).toBe('Brazil')
    })

    test('input fields retain same value after Save button is clicked', () => {
      render(<Form />)
      const inputTextElement = screen.getByRole('textbox')
      const inputNumberElement = screen.getByRole('spinbutton')
      const inputColorElement = screen.getByTestId('input-color')
      const inputSelectElement = screen.getByRole('combobox')
      const buttonElement = screen.getByRole('button')

      fireEvent.change(inputTextElement, { target: { value: 'Username' } })
      fireEvent.change(inputNumberElement, { target: { value: 23 } })
      fireEvent.change(inputColorElement, { target: { value: '#FF6347' } })
      fireEvent.change(inputSelectElement, { target: { value: 'Brazil' } })
      fireEvent.click(buttonElement)

      expect(inputTextElement.value).toBe('Username')
      expect(inputNumberElement.value).toBe('23')
      expect(inputColorElement.value).toBe('#ff6347')
      expect(inputSelectElement.value).toBe('Brazil')
    })
  })
})
