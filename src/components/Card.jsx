import React from 'react'


function Card(props) {
  return (
    <>  
        
        
        <div className='bg-white shadow-2xl w-screen h-1/2 sm:w-80 sm:h-100 rounded-2xl p-4 col-span-4'>
            {/* <div>
                image
            </div> */}
            <img src={props.img} className='rounded-lg object-cover h-2/5 w-full' alt="" />
            {/* <div>
                title
            </div> */}
            <div className='my-5 w-full h-15 flex over justify-center'>
                <h1 className='font-bold text-xl text-center'>{props.title}</h1>
            </div>
            
            
            <div className='my-5 text-xl w-full flex justify-around'>
                <div>Time:{props.Time}</div>
                <div>{props.Veg?<p className='text-green-700'>"Veg"</p>:"Non-Veg"}</div>
            </div>
            <div className='relative bottom-0 flex justify-center w-full' >
                <button className='bg-green-600 text-white font-bold p-2 rounded-lg' >Cook Me</button>
            </div>
            
        </div>
    </>
    
  )
}

export default Card