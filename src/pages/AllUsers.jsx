import React, { useContext } from 'react'
import { userContext } from '../contexts/userContext'
import UserCard from '../components/UserCard';

const AllUsers = () => {
  const { users, deleteUser } = useContext(userContext);

  return (
    <div className='flex flex-col gap-10 items-center w-full min-h-screen justify-center'>
      <h1 className='text-4xl font-semibold text-yellow-400'>List of All Users</h1>
      <div className='w-full grid grid-cols-3 gap-5 place-items-center'>
        {Array.from(users).sort((a, b) => a.id - b.id).map((user, i) => <UserCard key={user.id || i} type="localStorage" user={user} deleteUser={deleteUser} />)}
      </div>
    </div>
  )
}

export default AllUsers