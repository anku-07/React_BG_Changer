import React, { useState } from 'react'

function Button() {
  const [color,setColor] = useState("blue");
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
      {/* <div className='p-4 bg-slate-300 size-full flex justify-between'>
      <button className='bg-teal-700 p-4 w-32 rounded-xl text-white'>Teal</button>
      <button className='bg-red-600 p-4 w-32 rounded-xl text-white'>Red</button>
      <button className='bg-orange-700 p-4 w-32 rounded-xl text-white'>Orange</button>
      <button className='bg-yellow-500 p-4 w-32 rounded-xl text-white'>Yellow</button>
      <button className='bg-lime-700 p-4 w-32 rounded-xl text-white'>Green</button>
      <button className='bg-emerald-600 p-4 w-32 rounded-xl text-white'>Purple</button>
      <button className='bg-sky-500 p-4 w-32 rounded-xl text-white'>Sky Blue</button>
      </div> */}
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3'></div>
      </div>
    </div>
  )
}

export default Button
