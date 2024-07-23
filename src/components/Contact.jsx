import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-[#0a192f] text-gray-300 w-full h-screen flex justify-center items-center p-4'>
        <form className='shadow-md shadow-[#040c16] p-6 flex flex-col max-w-[600px] w-full' action=''>
            <div className='pb-6'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Get in touch</p>
                <p className='text-xl py-4'>Submit the form below or shoot me an email - myemail@gmail.com</p>
            </div>
            <input className='p-2 bg-[#ccd6f6] rounded-lg' type='text' placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-lg' type='email' placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2 rounded-lg' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-6 mx-auto flex items-center'>Lets's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact