import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600 text-xl'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Vijay Kr. Yadav</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full-stack develper specializing in building (and occasionally designing) exceptional digital experience, currently, I'm focused on building responsive full-stack web applications.</p>
            <div>
                <button className='text-white group border-2 my-1 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600'>View work 
                  <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-2'/>
                  </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home