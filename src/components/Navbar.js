import React from 'react'

const Navbar = ({setPage,page}) => {
  return (
    <div className='flex lg:rounded-tr-3xl thin-outline lg:rounded-bl-2xl bg-gradient-to-r from-zinc-700 to-zinc-800 gap-x-0 lg:w-7/12 w-full justify-center items-center text-sm md:text-lg lg:text-xl'>
        <button onClick={()=>setPage("about")} className={`p-3 hover:scale-110 rounded-2xl ${page==='about'?"text-[#FFD700]":"text-white"}`}>About</button>


        <button onClick={()=>setPage("projects")} className={`p-3 hover:scale-110 rounded-2xl ${page==='projects'?"text-[#FFD700]":"text-white"}`}>Projects</button>


        <button onClick={()=>setPage("contact")} className={`p-3 hover:scale-110 rounded-2xl ${page==='contact'?"text-[#FFD700]":"text-white"}`}>Contact</button>



    </div>
  )
}

export default Navbar