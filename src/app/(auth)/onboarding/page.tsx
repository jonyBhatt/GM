import { AccountProfile } from '@/components/form'
import React from 'react'
import { currentUser } from '@clerk/nextjs'



const OnBoarding = async() => {
  const user = await currentUser()
  console.log(user);
  const userInfo = {};
  const userData = {
    id: user?.id || "",
    objectId:userInfo?._id,
    banned: userInfo?.banned || user?.banned,
    profileImageUrl: userInfo?.image || user?.imageUrl,
    gender: userInfo?.gender || user?.gender,
    username: userInfo?.username || user?.username,
    firstname: userInfo?.firstname || user?.firstName,
    lastname: userInfo?.lastname || user?.lastName,
    work: userInfo?.work,
    university_id: userInfo?.uni_id,
    password:userInfo?.password
  }
  return (
    <div className='py-6 flex flex-col max-w-3xl mx-auto'>
      <h1 className="text-4xl font-bold">Welcome to Get Mentor</h1>
      <span className='text-lg font-normal pb-5'>Complete your profile to continue</span>
      <div className="min-h-screen flex justify-center items-center">
        <div className="p-4 rounded-md ring-1 ring-gray-500 shadow-md bg-clip-padding backdrop-filter bg-opacity-10 bg-glass shadow-slate-600 max-w-2xl ">
          <AccountProfile user={userData} />
        </div>
      </div>
    </div>
  )
}

export default OnBoarding