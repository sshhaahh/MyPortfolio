import React, { useEffect, useState } from 'react'
import Map from '../components/Map'
import { FaWpforms } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import axios from 'axios';
import Loading from '../components/Loading';
import { toast } from 'react-toastify';
// import { FaMessage } from "react-icons/fa6";
// import { MdAccessTime } from "react-icons/md";
import {format}  from 'date-fns';

const Contact = () => {
  const [formData,setFormData]=useState({name:'',email:'',message:''});
  const [loading,setLoading]=useState(false);
  const [messages,setMessages]=useState([]);
  const [showMore,setShowMore]=useState(false);
  const [messageToShow,setMessageToShow]=useState([]);
    
  console.log(showMore,messageToShow);



  const submitHandler=async(e)=>{
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    try{
      const response= await axios.post('https://myportfoliobackend-cajd.onrender.com/api/sendmessage',formData,{
        headers:{
          'Content-Type':'application/json' 
        },
      });
      if(response.data.success){
        setFormData({name:"",email:"",message:""})
        toast.success(response.data.message)
        messageHandler();
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
   
  const messageHandler=async()=>{
    try{
      const response = await axios.get('https://myportfoliobackend-cajd.onrender.com/api/showmessages');
      setMessages(response.data.data);
      setMessageToShow(response.data.data.slice(0,3));
    }
    catch(e){
      console.log(e);
    }
  }
    
  useEffect(()=>{
    messageHandler();
    
  },[])


  // const dateHandler=(isoDate)=>{
  //   const date =new Date(isoDate);
  //   return format(date,'hh:mm a    dd/mm/yyyy')
  // }
  

    const handleChange=(e)=>{
      const {name,value}=e.target;
      setFormData({
        ...formData,
        [name]:value,
      })
    }

    const showMoreHandler = () => {
    setShowMore(prevState => {
      const newState = !prevState;
      if (newState) {
        setMessageToShow(messages); 
      } else {
        setMessageToShow(messages.slice(0, 3)); 
      }
      return newState;
    });
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
              <button type='submit' className='thin-outline px-3 py-2 md:px-5 md:py-3 rounded-2xl flex justify-center cursor-pointer bg-gradient-to-r from-zinc-700 to-zinc-800 hover:bg-gradient-to-l hover:scale-105 items-center gap-2'><span className='text-[#FFD700]'><IoIosSend /></span> Send</button>
            )}
            
          </div>
        </form>
      </div>

      {/* <div className='md:w-[100%] flex flex-col gap-8 '>
      
        <div className='flex justify-start gap-x-3 md:gap-x-6 items-center '>
          <span className='thin-outline p-2  md:p-3 md:text-2xl rounded-xl text-[#FFD700]'><FaMessage /></span>
          <h1 className='text-3xl font-semibold '>Your Messages</h1>
        </div>

        <div className='thin-outline rounded-2xl flex flex-col p-4 gap-3 justify-center items-center w-full '>

              {messages.length===0?(<h1 className='text-2xl font-semibold'>There is no messages!</h1>):(
                messageToShow.map((message,index)=>(
                  
                  <div key={index} className='thin-outline rounded-2xl p-3 w-full bg-[#555454]'>
                    <div className='flex flex-row w-full justify-between '>
                      <p className='text-2xl font-semibold opacity-85'>{message.name}</p>
                      <p className='flex justify-center opacity-80 text-sm items-center gap-2 md:gap-3'><MdAccessTime /> {dateHandler(message.sendAt)}</p>
                    </div>
                      <p className='text-sm p-2  md:text-base'>{message.message}</p>
                  </div>

                )))
              }

              <button onClick={showMoreHandler} className={`thin-outline px-3 py-2 md:px-5 md:py-3 rounded-2xl  justify-center cursor-pointer bg-gradient-to-r from-zinc-700 to-zinc-800 hover:bg-gradient-to-l hover:scale-105 items-center gap-2 ${(messages.length===0)?"invisible fixed":"visible flex"} ${messages.length < 4 ? "invisible fixed" : "visible flex"}`} >{showMore?"Hide More":"Show More"}</button>
      
        </div>

            
      </div> */}


    </div>
  )
}

export default Contact