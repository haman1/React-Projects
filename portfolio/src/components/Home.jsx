import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
function Home() {
  return (
    <div name='' className='bg-[#0a192f] w-full h-screen'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-400'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ombasa Herman</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Web Developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam, et earum distinctio nihil fugit sint dicta facilis deleniti! Neque odit quisquam voluptatem, suscipit est a! Animi pariatur ut at.</p>
            
              <div>
                <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-500 hover:border-pink-500'>
                  View Work 
                  <span className='group-hover:rotate-90 duration-300'>
                      <HiArrowNarrowRight className='ml-3'/>
                  </span>
            
                </button>
              </div>
            
            </div>
          
    </div>

    
    )
}

export default Home