import { useEffect, useState } from 'react'

const UserList = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => <div key={user.id}>{user.username}</div>)
      ) : (
        <span>No users</span>
      )}
    </div>
  )
}

export default UserList
