import React, { useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import data from './Data';
import Projects from './pages/Projects';
// import Message from './pages/Message';

const App = () => {
  const [page, setPage] = useState('about');
  const [toggle,setToggle]=useState(false);

  return (
    <div className='flex justify-center items-center h-screen bg-[#181C14] text-white'>
      
      <div className="flex flex-col 
          max-w-[20rem] w-[20rem]
          sm:max-w-[40rem] sm:w-[28rem]
          md:max-w-[58rem] md:w-[55rem]
          h-[98vh] lg:flex-row lg:max-w-[70rem] lg:w-[70rem] mx-auto gap-6">
        
        <div className="overflow-auto rounded-3xl bg-[rgb(39,40,41)] lg:w-1/4">
          <Home toggle={toggle} setToggle={setToggle} profile={data.profile} />
        </div>

        <div className="relative flex-1 overflow-auto  rounded-3xl" onClick={()=>setToggle(false)}>
          <div className='fixed bottom-[-10px]  lg:absolute lg:top-[-7px] right-0 z-50 flex justify-center lg:justify-end items-center w-full h-[4rem] rounded-3xl'>
            <Navbar setPage={setPage} page={page} />
          </div>

          
          <div className='relative rounded-3xl w-full h-full md:text-lg overflow-hidden'>
            
            <div
              className={`absolute  top-0 left-0 w-full h-full transition-all duration-500 ease-in ${
                page === 'about' ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              <div className='p-4 pb-12 lg:pb-4 h-full overflow-auto'>
                <h1 className='text-3xl font-semibold mb-2'>About Me</h1>
                <div className="my-4 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
                
                <About about={data.about} skills={data.skills} education={data.education}/>
              </div>
            </div>

            
            <div
              className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in ${
                page === 'contact' ? 'opacity-100 visible' : 'opacity-0 invisible '
              }`}
            >
              <div className='p-4 pb-12 lg:pb-4 h-full overflow-auto'>
                <h1 className='text-3xl font-semibold mb-2'>Contact</h1>
                <div className="my-4 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
                <Contact />
              </div>
            </div>


            <div
              className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in ${
                page === 'projects' ? 'opacity-100 visible' : 'opacity-0 invisible '
              }`}
            >
              <div className='p-4 pb-12 lg:pb-4 h-full overflow-auto'>
                <h1 className='text-3xl font-semibold mb-2'>Projects</h1>
                <div className="my-4 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
                <Projects projects={data.projects}/>
              </div>

            </div>
          </div>
              {/* third components */}
        </div>
      </div>
    </div>
  );
};

export default App;