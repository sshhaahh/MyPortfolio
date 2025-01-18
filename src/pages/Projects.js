import React, { useState } from 'react'

const Projects = ({projects}) => {
    const linkHandler=(link)=>{
        window.open(link)
    }
    console.log(projects[2])

  return (
    <div className='flex flex-col gap-6'>
        <div>
            <p>I have successfully worked on and completed several projects, showcasing my expertise in front-end development. These projects involve the use of HTML, CSS, JavaScript, Tailwind CSS, and React to create modern, responsive, and user-friendly web applications. Through these experiences, I have honed my skills in building visually appealing designs and implementing dynamic functionalities, ensuring a seamless user experience.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-8 mx-2 '>
            {
                Object.values(projects).map((project,index)=>(
                    <div className='rounded-2xl thin-outline hover:scale-105' key={index} >
                        <img onClick={()=>linkHandler(project.link)} className='cursor-pointer rounded-t-2xl ' src={`https://api.microlink.io/?url=${encodeURIComponent(project.link)}&screenshot=true&embed=screenshot.url`}/>
                        <div className='px-3 py-2 gap-x-2'>
                            <p onClick={()=>linkHandler(project.link)} className='text-xl md:text-2xl lg:text-3xl  font-bold hover:text-[#0000EE] hover:underline cursor-pointer'>{project.name}</p>
                            <p className='opacity-80 text-sm md:text-base lg:text-lg p-2'>{project.description} </p>
                        </div>
                    </div>
                ))
            }
            
        </div>

        <div>

        </div>
    </div>
  )
}

export default Projects