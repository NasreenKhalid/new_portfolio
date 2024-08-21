import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-black text-white'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-700'>About</p>
                    </div>
                    <div></div>
                </div>

                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Nasreen, nice to meet you. Please take a look around.</p>
                    </div>
                    <div><p>I am a passionate developer learning new technologies. I am passionate about clean, efficient code and continuously improving my skills to stay ahead in the fast-evolving world of web development</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About