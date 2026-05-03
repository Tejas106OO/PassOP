import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-400 to-purple-900 text-white  ">
      <div className="mycontainer  flex justify-between items-center py-5 px-4 h-14">

        <div className="logo font-bold text-white text-2xl">
          <span className='text-cyan-400'>&lt;</span>
          <span className='text-purple-500'>Pass</span> 
          <span className='text-cyan-400'>OP/&gt;</span>
      
          </div>
        {/* <ul>
          <li className='flex gap-4'>
            <a className='hover:font-bold' href="#">Home</a>
            <a className='hover:font-bold' href="#">About</a>
            <a className='hover:font-bold' href="#">Contact</a>
          </li>
        </ul> */}
        <button className='text-white  my-5 rounded-full flex  justify-between items-center'>
          <img className='invert w-10 p-1 'src="icons/github.svg" alt="github
           logo" />
          <span className='font-bold px-2'>GitHub</span>
        </button>
      </div>

    </nav>
  )
}

export default Navbar
