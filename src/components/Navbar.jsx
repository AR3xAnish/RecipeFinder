import React from 'react'
import icon from '../assets/icon.png'

function Navbar() {
  return (
    <>
        <div className='shadow-2xl bg-white w-full flex flex-col sm:flex-row justify-between items-center font-bold'>
          <div className=' bg-white w-2/2 sm:w-3/12 flex justify-around items-center text-2xl sm:text-4xl m-5'>
            <img className='w-3/9 rounded-full' src={icon} alt="" />
            <h1>Recipe Finder</h1>
        </div>
          <div className='shadow-2xl bg-orange-200 text-green-900 rounded-2xl m-5 sm:w-5/12 p-6 flex justify-around sm:text-2xl items-center gap-5'>
              <button className='p-2 hover:border-2 rounded-xl'>Home</button>
              <button className='p-2 hover:border-2 rounded-xl'>All Posts</button>
              <button className='p-2 hover:border-2 rounded-xl'>About</button>
              <button className='p-2 hover:border-2 rounded-xl'>Contact</button>
            
          </div>
        </div>
    </>
  )
}

export default Navbar