import React from 'react'
import AWS from '../assests/aws.png'
import Node from '../assests/node.png'
import JavaScript from '../assests/javascript.png'
import Tailwind from '../assests/tailwind.png'
import Mongo from '../assests/mongo.png'
import Html from '../assests/html.png'
import Css from '../assests/css.png'
import react from '../assests/react.png'
const Skills = () => {
  return (
    <div>
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-pink-600 inline'>Skills</p>
                    <p className='py-4 text-xl'>These are technologies I've worked with.</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={Html} alt='Html.icon'></img>
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={Css} alt='Html.icon'></img>
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={JavaScript} alt='Html.icon'></img>
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={react} alt='Html.icon'></img>
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={Node} alt='Html.icon'></img>
                        <p className='my-4'>NODE</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={Mongo} alt='Html.icon'></img>
                        <p className='my-4'>MONGO</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={Tailwind} alt='Html.icon'></img>
                        <p className='my-4'>TAILWIND</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={AWS} alt='Html.icon'></img>
                        <p className='my-4'>AWS</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills