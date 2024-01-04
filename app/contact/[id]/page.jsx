'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

const page = () => {

   const path = usePathname();

  return (
    <div>
        <h1>This is the id page!</h1>
        <p>The id id : {path}</p>
    </div>
  )
}

export default page