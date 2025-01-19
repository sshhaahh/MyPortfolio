import React, { useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";

const Projects = ({projects}) => {
    const [popup,setPopup]=useState({});
    const linkHandler=(link)=>{
        window.open(link)
    }
    const popupHandler=(id)=>{
        setPopup(id)
       
    }
   

  return (
    <div className='flex flex-col gap-6' >
        <div>
            <p>I have successfully worked on and completed several projects, showcasing my expertise in front-end development. These projects involve the use of HTML, CSS, JavaScript, Tailwind CSS, and React to create modern, responsive, and user-friendly web applications. Through these experiences, I have honed my skills in building visually appealing designs and implementing dynamic functionalities, ensuring a seamless user experience.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-8 mx-2 ' >
            {
                Object.values(projects).map((project,index)=>(
                    <div onClick={()=>popupHandler(project)} className='rounded-2xl thin-outline hover:scale-105' key={index}  >
                        <img className='cursor-pointer rounded-t-2xl ' alt='Loading/Refresh' src={`https://api.microlink.io/?url=${encodeURIComponent(project.link)}&screenshot=true&embed=screenshot.url`}/>
                        <div className='px-3 py-2 gap-x-2'>
                            <p className='text-xl md:text-2xl lg:text-3xl  font-bold cursor-pointer'>{project.name}</p>
                            <p className='opacity-80 text-sm md:text-base lg:text-lg p-2'>{project.description} </p>
                        </div>
                    </div>
                ))
            }
            
        </div>
        {Object.keys(popup).length === 0?"":(
            <div className='w-[60%] md:w-[35%] lg:w-[40%]  fixed rounded-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className='rounded-2xl thin-outline bg-black relative'   >
                <button onClick={()=>setPopup({})} className='absolute right-3 text-3xl bg-black rounded-2xl top-3'><IoMdCloseCircle /></button>
                <img onClick={()=>linkHandler(popup.link)} alt='Loading/Refresh' className='cursor-pointer rounded-t-2xl ' src={`https://api.microlink.io/?url=${encodeURIComponent(popup.link)}&screenshot=true&embed=screenshot.url`}/>
                <div className='px-3 py-2 gap-x-2'>
                <p onClick={()=>linkHandler(popup.link)} className='text-xl md:text-2xl lg:text-3xl  font-bold hover:text-[#0000EE] hover:underline cursor-pointer'>{popup.name}</p>
                <p onClick={()=>popupHandler(popup)} className='opacity-80 text-sm md:text-base lg:text-lg p-2'>{popup.description} </p>
            </div>
        </div>
            </div>)
        }
        
    </div>
  )
}

export default Projects