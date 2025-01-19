import React, { useState } from 'react'
import Map from '../components/Map'
import { FaWpforms } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import axios from 'axios';
import Loading from '../components/Loading';
import { toast } from 'react-toastify';


const Contact = () => {
  const [formData,setFormData]=useState({name:'',email:'',message:''});
  const [loading,setLoading]=useState(false);

  const submitHandler=async(e)=>{
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    try{
      const response= await axios.post('http://localhost:3000/api/sendmessage',formData,{
        headers:{
          'Content-Type':'application/json'
        },
      });
      if(response.data.success){
        setFormData({name:"",email:"",message:""})
        toast.success(response.data.message)
      }
      else{
        if(!response.data.success){
          toast.error(response.data.message)
        }
      }
    }
    catch(e){
      console.log("message send ni hua")
      console.log(e)
    }finally{
      setLoading(false);
    }
    

  }

    const handleChange=(e)=>{
      const {name,value}=e.target;
      setFormData({
        ...formData,
        [name]:value,
      })
    }
  return (
    <div className='flex flex-col gap-8'>

      <div  className='z-0'>
        <Map/>
      </div>

{/* Contact form */}


      <div className='flex flex-col gap-3 lg:gap-5'>


      <div className='flex justify-start gap-x-3 md:gap-x-6 items-center'>
          <span className='thin-outline p-2  md:p-3 md:text-2xl rounded-xl text-[#FFD700]'><FaWpforms /></span>
          <h1 className='text-3xl font-semibold '>Contact Form</h1>
        </div>


        <form onSubmit={submitHandler} className='flex flex-col gap-6  rounded-3xl p-2 items-center text-white'>
          <div className='flex flex-col md:flex-row items-center justify-center gap-3 w-[100%]'>
            <input className='p-3 w-[100%] md:w-[48%] rounded-2xl bg-transparent thin-outline' required
              type='text'
              onChange={handleChange}
              value={formData.name}
              placeholder='Full Name'
              name='name'/>

            <input className='p-3 w-[100%] md:w-[48%] rounded-2xl bg-transparent thin-outline' required
            type='text'
            onChange={handleChange}
            value={formData.email}
            name='email'
            
             placeholder='Email'/>
          </div>
          <textarea className='w-[98%] p-3  rounded-t-2xl rounded-bl-2xl bg-transparent thin-outline' placeholder='Message' required
            type='text'
            onChange={handleChange}
            value={formData.message}
            name='message'
          />

          <div className='h-14 '>
            {loading?(<Loading/>):(
              <button type='submit' className='thin-outline px-3 py-2 md:px-5 md:py-3 rounded-2xl flex justify-center cursor-pointer bg-gradient-to-r from-zinc-700 to-zinc-800 hover:bg-gradient-to-l hover:scale-105 items-center gap-2'><span className='text-[#FFD700]'><IoIosSend /></span> Send Message</button>
            )}
            
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact