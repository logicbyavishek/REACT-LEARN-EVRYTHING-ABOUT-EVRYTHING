import React from 'react'

const Navbar = (props) => {
    
  return (
    <div className='bg-pink-400 text-amber-50 flex items-center justify-between h-10 px-3.5'>
        <h2>{props.titel}</h2>
        <div className='flex gap-10'>
            <h4>Home</h4>
            <h4>Home</h4>
            <h4>Home</h4>
            <h4>Home</h4>
        </div>
    </div>
  )
}

export default Navbar