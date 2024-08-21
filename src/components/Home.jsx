import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='bg-black w-full h-screen'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto flex flex-col justify-center h-full px-8'>
                <p className='text-pink-700'>Hi, my name is </p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Nasreen Khalid</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front End Developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I specialize in creating responsive, user-friendly web interfaces. My expertise includes HTML, CSS, JavaScript, and React, allowing me to build modern, dynamic websites that deliver seamless user experiences. I am passionate about clean, efficient code and continuously improving my skills to stay ahead in the fast-evolving world of web development.</p>
          <div>
            <button className='text-white group rounded border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-700 hover:border-pink-400'>View Work 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
                </span>
              </button>
          </div>
            </div>
        </div>
 
    )
}

export default Home;