import React from 'react'

const Navbar = ({setPage}) => {
  return (
    <div className='flex lg:rounded-tr-3xl lg:rounded-bl-2xl px-4 bg-[#252621] gap-x-3 lg:w-2/4 w-full justify-center items-center text-sm md:text-lg lg:text-xl'>
        <button onClick={()=>setPage("about")} className='p-3 rounded-2xl'>About</button>
        <button onClick={()=>setPage("resume")} className='p-3 rounded-2xl'>Resume</button>
        <button onClick={()=>setPage("contact")} className='p-3 rounded-2xl'>Contact</button>

    </div>
  )
}

export default Navbar