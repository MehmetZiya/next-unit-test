import LoginForm from '@/components/LoginForm'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('LoginForm', () => {
  it('login procces', async () => {
    render(<LoginForm />)
    const usernameInput = screen.getByLabelText(/Username:/)
    const passwordInput = screen.getByLabelText(/Password:/)
    const buttonElement = screen.getByRole('button', { name: 'Login' })
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toBeDisabled()
    await userEvent.type(usernameInput, 'deepdark')
    await userEvent.type(passwordInput, 'password')
    expect(buttonElement).toBeEnabled()
    await userEvent.click(buttonElement)
    await waitFor(() => {
      expect(screen.getByText('Login Successful')).toBeInTheDocument()
    })
  })
})
