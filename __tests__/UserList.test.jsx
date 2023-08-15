import UserList from '@/components/UserList'
import { render, screen } from '@testing-library/react'
import { server } from '../mocks/server'
import { rest } from 'msw'

describe('UserList - Rendering', () => {
  it('it should return mock data', async () => {
    render(<UserList />)
    expect(await screen.findByText('deepdark')).toBeInTheDocument()
    /* await waitfor(() =>{expect(await screen.getByText('deepdark')).toBeInTheDocument()}) */
  })
  it('it should return mock data', async () => {
    server.use(
      rest.get('/api/users', (req, res, ctx) => {
        return res(ctx.json([{ id: 2, username: 'mike' }]))
      })
    )
    render(<UserList />)
    expect(await screen.findByText('mike')).toBeInTheDocument()
  })
})
