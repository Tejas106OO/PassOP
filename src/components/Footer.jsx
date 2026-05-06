import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center fixed bottom-0 w-full'>
        <div className="logo font-bold text-white text-2xl ">
      
          <span className='text-cyan-400'>&lt;</span>
          <span className='text-purple-600'>Pass</span> 
          <span className='text-cyan-400'>OP/&gt;</span>
          </div>
        <div className='flex justify-center items-center'>
    Created with <img className='w-7 mx-2 ' src="icons/heart.png" alt="" /> By Tejas
    </div>
        </div>
  
  )
}

export default Footer
