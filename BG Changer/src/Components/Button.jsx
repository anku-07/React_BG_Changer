import React, { useState } from 'react'

function Button() {
  const [color,setColor] = useState("blue");
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-xl'>
          <button
          className='outline-none px-4 py-1 rounded-full text-white'
          style={{backgroundColor : "red"}}
          onClick={() => setColor("red")}
          >Red</button>
          <button
          className='outline-none px-4 py-1 rounded-full text-white'
          style={{backgroundColor : "green"}}
          onClick={() => setColor("green")}
          >Red</button>
          <button
          className='outline-none px-4 py-1 rounded-full text-black'
          style={{backgroundColor : "yellow"}}
          onClick={() => setColor("yellow")}
          >Red</button>
        </div>
      </div>
    </div>
  )
}

export default Button
