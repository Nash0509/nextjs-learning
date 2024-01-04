'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
const page = () => {
   
   const router = usePathname();
  
  return (
    <div className='flex justify-center h-[100vh] text-[rgb(24, 36, 58)]' style={{alignItems:'center'}}>
        <h1 className='text-3xl'>This is the contact page ! </h1>
        <p className='text-3xl'>The id is : {router}</p>
    </div>

  )
}

export default page