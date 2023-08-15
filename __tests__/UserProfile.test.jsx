import UserProfile from '@/components/Userprofile'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('UserProfile', () => {
  it('Should have text Email when isEmailVerified is true', () => {
    render(
      <UserProfile
        displayName='Mehmet'
        username='deepdark'
        email='mehmetziya@test.com'
        isEmailVerified={true}
      />
    )
    expect(screen.getByText(/Yes/)).toBeInTheDocument()
  })

  it('Should not have text Yes when isEmailVerified is true', () => {
    render(
      <UserProfile
        displayName='Mehmet'
        username='deepdark'
        email='mehmetziya@test.com'
        isEmailVerified={false}
      />
    )
    expect(screen.getByText(/No/)).toBeInTheDocument()
    expect(screen.queryByText(/Yes/)).not.toBeInTheDocument()
  })
})
