import React from 'react'

export default function AutoCompleteAddress() {
  return (
    <div className=' flex flex-col gap-2 border p-3 shadow rounded h-screen'>
      <div>
        <label className=' text-gray-600'>
          Where From?
        </label>
        <div>
          <input type="text" className=' border border-slate-200 outline-none focus:border-slate-300 p-1 w-full rounded ' />
        </div>
      </div>
      <div>
        <label className=' text-gray-600'>
          Where To?
        </label>
        <div>
          <input type="text" className=' border border-slate-200 outline-none focus:border-slate-300 p-1 w-full rounded ' />
        </div>
      </div>
    </div>
  )
}
