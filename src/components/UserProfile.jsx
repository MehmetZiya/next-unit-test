import React from 'react'

const UserProfile = ({ displayName, username, email, isEmailVerified }) => {
  return (
    <div>
      <div>
        <span>Display Name: {displayName}</span>
      </div>
      <div>
        <span>Username: {username}</span>
      </div>
      <div>
        <span>Email {email}</span>
      </div>
      <div>Verified: {isEmailVerified ? 'Yes' : 'No'}</div>
    </div>
  )
}

export default UserProfile
