import React from 'react'
import { SiBookstack } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

const About = ({about,skills,education}) => {
  return (
    <div className='flex flex-col gap-y-12'>
      <div>
        <p>{about}</p>
      </div>
      {/* skills */}
      <div className='flex flex-col gap-y-4 md:mb-12'>
        <div className='flex justify-start gap-x-3 md:gap-x-6 items-center'>
          <span className='thin-outline p-2  md:p-3 md:text-2xl rounded-xl text-[#FFD700]'><FaLaptopCode /></span>
          <h1 className='text-3xl font-semibold '>Education</h1>
        </div>        
        <div className='grid grid-cols-3 md:grid-cols-4   p-2 gap-y-5 lg:gap-y-10'>

        {
        Object.values(skills).map((skill,index ) => (
            <div key={index} className='flex flex-col justify-center items-center gap-y-2'>
              <img className='h-12 md:h-16 w-auto' src={skill.image} alt={skill.name} />
              <p className='text-sm md:text-lg lg:text-xl'>{skill.name}</p>
            </div>
          ))}


        </div>
      </div>
      

      <div>
        <div className='flex justify-start gap-x-3 md:gap-x-6 items-center '>
          <span className='thin-outline p-2  md:p-3 md:text-2xl rounded-xl text-[#FFD700]'><SiBookstack /></span>
          <h1 className='text-3xl font-semibold '>Education</h1>
        </div>

        {
          Object.values(education).map((course,index)=>(
            <div key={index} className='flex gap-x-8 md:gap-x-12 '>
              <div className='ml-4 md:ml-6 w-px flex justify-center items-center bg-gray-500'>
                <div className='p-[3px] md:p-[4px] rounded-full bg-[#FFD700]'></div>
              </div>
              <div className='my-4 text-sm md:text-md lg:text-lg'>
                <p className='font-semibold'>{course.university_name}</p>
                <p className='opacity-60'>{`${course.from} - ${course.to}`}</p>
                <p className='opacity-80'>{course.course}</p>
              </div>
            </div>
          ))
        }
       



      <div>


      </div>

      </div>

    </div>
  )
}

export default About