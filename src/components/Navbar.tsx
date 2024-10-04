import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className=' border-b sticky top-0 shadow-md'>

    <div className=' container mx-auto px-3  flex justify-between my-4'>

      <div className='flex align-bottom items-center gap-1 cursor-pointer'>
        <Image src={"/logo.png"} alt='logo' width={70} height={70} />
        <span className='text-xl font-bold'>
          XoTaxi
        </span>
      </div>
      <div className='flex gap-5'>

      <div className=' gap-6 hidden md:flex'>
        <div>

        </div>
        <h2>Home</h2>
        <h2>History</h2>
        <h2>Help</h2>
      </div>
      <div>
      <UserButton/>

      </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar