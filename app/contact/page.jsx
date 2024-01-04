'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
const page = () => {
   
   const router = usePathname();
  
  return (
    <div>
        <h1>This is the contact page ! </h1>
        <p>The id is : {router}</p>
    </div>

  )
}

export default page