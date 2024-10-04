import React, { ReactNode } from 'react'

export default function layout({children}:{children:ReactNode}) {
  return (

    <div className='flex h-screen justify-center align-middle items-center'>
        {children}
    </div>
  )
}
