import Home from '@/app/page'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('HomePage', () => {
  describe('Rendering', () => {
    it('Shoul have Home Page text', () => {
      render(<Home />)
      expect(screen.getByText('Home Page')).toBeInTheDocument()
    })

    it('shoud have button with text click me', () => {
      render(<Home />)
      expect(
        screen.getByRole('button', { name: 'Click me!' })
      ).toBeInTheDocument()
    })

    it('shoud have input text', () => {
      render(<Home />)
      expect(
        screen.getByRole('textbox', { name: /Random Text/ })
      ).toBeInTheDocument()
    })

    it('shoud have label text', () => {
      render(<Home />)
      expect(screen.getByLabelText(/Enter Random Text/)).toBeInTheDocument()
    })
    it('shoud have label search input', () => {
      render(<Home />)
      expect(screen.getByPlaceholderText(/search/)).toBeInTheDocument()
    })
    it('shoud not have the text with Show text', () => {
      render(<Home />)
      expect(screen.queryByText('Some Text')).not.toBeInTheDocument()
    })
  })

  describe('Behavior', () => {
    it('should click show text button and find the text', async () => {
      render(<Home />)
      expect(screen.queryByText('Some Text')).not.toBeInTheDocument()
      const showTextButton = screen.getByRole('button', { name: 'Show Text' })
      await userEvent.click(showTextButton)
      expect(screen.getByText('Some Text')).toBeInTheDocument()
      //if the modal have timeout use findBy query and waitFor func
    })
  })
})
