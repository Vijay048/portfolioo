import React from 'react'
import WorkImg1 from '../assests/workimage/netflix.jpg'
import WorkImg2 from '../assests/workimage/crypto.jpg'
import WorkImg3 from '../assests/workimage/property.jpg'
import WorkImg4 from '../assests/workimage/twitch.jpg'

const Works = () => {
    return (
        <div>
            <div name='works' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
                <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold border-b-4 border-pink-600 inline'>Works</p>
                        <p className='py-4 text-xl'>Check Out my some of recent works.</p>
                    </div>

                    {/* container */}
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        {/* Grid item */}
                        <div style={{ backgroundImage: `url(${WorkImg1})` }} className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto rounded-lg content-div'>

                            {/* Hover effect */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white'>
                                    React JS Application
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href='/'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Visit</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${WorkImg2})` }} className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto rounded-lg  content-div'>

                            {/* Hover effect */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white'>
                                    React JS Application
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href='/'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Visit</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${WorkImg3})` }} className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto rounded-lg  content-div'>

                            {/* Hover effect */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white'>
                                    React JS Application
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href='/'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Visit</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${WorkImg4})` }} className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto rounded-lg  content-div'>

                            {/* Hover effect */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white'>
                                    React JS Application
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href='/'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Visit</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${WorkImg1})` }} className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto rounded-lg  content-div'>

                            {/* Hover effect */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white'>
                                    React JS Application
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href='/'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Visit</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${WorkImg2})` }} className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto rounded-lg  content-div'>

                            {/* Hover effect */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white'>
                                    React JS Application
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href='/'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Visit</button>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works