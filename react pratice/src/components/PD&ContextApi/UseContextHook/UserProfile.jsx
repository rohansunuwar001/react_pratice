import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const UserProfile = () => {
    const {user} = useContext(UserContext);
  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {user.name}</p>
    </div>
  )
}

export default UserProfile
