'use client'

import UserList from '@/components/UserList'
import UserProfile from '@/components/UserProfile'
import LoginForm from '@/components/LoginForm'
import { useState } from 'react'

export default function Home() {
  const [showText, setShowText] = useState(false)

  return (
    <main>
      <h1>Home Page</h1>
      <button>Click me!</button>
      <div>
        <label htmlFor='randomText'>Enter Random Text</label>
        <input type='text' id='randomText' name='randomText' />
      </div>
      <div>
        <input type='text' id='searchText' placeholder='search' />
      </div>

      <div style={{ display: 'flex' }}>
        <button onClick={() => setShowText(!showText)}>Show Text</button>
        {showText && <p>Some Text</p>}
      </div>
      <UserProfile
        displayName='Mehmet'
        username='deepdark'
        email='mehmetziya@test.com'
        isEmailVerified={false}
      />
      <UserList />
      <LoginForm />
    </main>
  )
}
