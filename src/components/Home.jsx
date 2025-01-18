import React from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";



const Home = ({toggle,setToggle}) => {
    
   
  return (
    <div className=' relative flex flex-col gap-3 pb-3 items-center'>
        
        <div className='flex w-full flex-row justify-between items-center lg:flex-col lg:justify-center'>
            <div className='  flex flex-row  justify-start items-center pl-4 lg:pl-0 lg:justify-center lg:flex-col gap-3 pt-3'>
                
                    <img className='h-20 sm:h-28 md:h-32  lg:h-40 lg:mt-3   w-auto thin-outline rounded-3xl' src='assets/pic.png' alt='not found'/>
                
                <div className='flex flex-col pl-3 gap-2 md:gap-6  lg:gap-3 lg:pl-0'>
                    <h1 className='uppercase text-2xl md:text-3xl'>Shah Ameen</h1>
                    <p className='thin-outline flex justify-center items-center rounded-3xl py-1 text-sm lg:text-lg bg-gradient-to-r from-zinc-700 to-zinc-800'>Web Developer</p>
                </div>
            </div>
            <div className='text-xl text-black py-1 md:text-4xl lg:hidden absolute top-0 right-0 rounded-tr-3xl rounded-bl-xl px-2 border md:px-6'>
                <button onClick={()=>setToggle((prev)=>!prev)}><IoIosArrowDropdownCircle/></button>
            </div>
        </div>

       
        
            <div className={`w-full flex flex-col items-center justify-center gap-y-4 transition-all duration-500 ease-in overflow-hidden lg:max-h-96
            ${toggle?"max-h-96":"max-h-0"}`}>
                <div className='bg-gradient-to-r from-transparent via-gray-500 to-transparent w-10/12 h-[1px] '></div>

                <div className='w-full flex justify-center items-start pl-3 flex-col gap-y-4 md:grid md:grid-cols-2 md:pl-10 lg:flex lg:pl-4'>
                    <div className='flex justify-center items-center gap-3 md:gap-6  text-sm md:text-md md:w-full md:justify-start '>
                        <p className='thin-outline rounded-lg p-2 md:p-3'><SiGmail /></p>
                        <div>
                            <p className='opacity-60'>EMAIL</p>
                            <p className=''>amenfalak786@gmail.com</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-3 md:gap-6 text-sm md:text-md  md:w-full md:justify-start'>
                        <p className='thin-outline rounded-lg p-2 md:p-3'><MdPhoneIphone /></p>
                        <div>
                            <p className='opacity-60'>PHONE</p>
                            <p className=''>7310671360</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-3 md:gap-6 text-sm md:text-md md:w-full md:justify-start'>
                        <p className='thin-outline rounded-lg p-2 md:p-3'><LiaBirthdayCakeSolid /></p>
                        <div>
                            <p className='opacity-60'>BIRTHDAY</p>
                            <p className=''>06/02/2001</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-3 md:gap-6 text-sm md:text-md md:w-full md:justify-start'>
                        <p className='thin-outline rounded-lg p-2 md:p-3'><FaLocationDot /></p>
                        <div>
                            <p className='opacity-60'>LOCATION</p>
                            <p className=''>Laddhawala MZN</p>
                        </div>
                    </div>
                </div>
                
                <div className='bg-gradient-to-r from-transparent via-gray-500 to-transparent w-10/12 h-[1px] '></div>

                <div className='flex gap-3 text-2xl'>
                    <p><FaGithub /></p>
                    <p><FaLinkedin /></p>
                </div>
                

                
            </div>
        
    </div>
  )
}

export default Home