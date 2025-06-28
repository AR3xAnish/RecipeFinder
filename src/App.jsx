import React from 'react'
import Posts from './pages/Posts'

import Navbar from './components/Navbar'
function App() {
  return (
    <>
      
      <div className= 'bg-orange-200 w-full'>
        <Navbar />
        <div className='max-w-screen'>
          <Posts />
        </div>
      </div>

      
    </>
  )
}

export default App