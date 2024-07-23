import React from 'react'

const About = () => {
  return (
    <div name='about' className='bg-[#0a192f] w-full h-screen text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 pl-4'>
                <div className='text-4xl font-bold sm:text-right'>
                    <p>Hi,I'm Vijay, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p className='py-6 sm:py-0'>I am passionate about building excellent software that improve the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations, what would you do if you had a software expert available at your fingertips?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About