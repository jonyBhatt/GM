import { AccountProfile } from '@/components/form'
import React from 'react'
import { currentUser } from '@clerk/nextjs'

type User = {
  id: string,
  banned: boolean,
  profileImageUrl: string,
  gender: string,
  username: string,
  firstname: string,
  lastname:string
}

const OnBoarding = async() => {
  const user = await currentUser()
  console.log(user);
  
  return (
    <div className='py-6 flex flex-col max-w-3xl mx-auto'>
      <h1 className="text-4xl font-bold">Welcome to Get Mentor</h1>
      <span className='text-lg font-normal'>Complete your profile to continue</span>
      <div className="min-h-screen flex justify-center items-center">
        <div className="p-4 rounded-md ring-1 ring-gray-500 shadow-md bg-clip-padding backdrop-filter bg-opacity-10 bg-glass shadow-slate-600 max-w-2xl">
          <AccountProfile />
        </div>
      </div>
    </div>
  )
}

export default OnBoarding