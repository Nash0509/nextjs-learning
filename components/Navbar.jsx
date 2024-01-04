import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex p-3 bg-[]'>
      <div className='ml-5'><Link href='/'><p>Ledgeric</p></Link></div>
      <div className='ml-[20vw]'>
        <ul className='flex'>
         <Link href='/'> <li className='mx-2'>Home</li></Link>
         <Link href='contact'><li className='mx-2'>Contact</li></Link>
         <Link href='about'><li className='mx-2'>About</li></Link>
         <Link href='register'><li className='mx-2'>Register</li></Link>
          <Link href='login'><li className='mx-2'>LogIn</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar