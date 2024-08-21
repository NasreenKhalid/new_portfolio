import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-black flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/blljxjeb' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-pink-700 text-white'>Contact</p>
          <p className='text-white py-4'>Submit the form below or shoot me an email - nasreen.1@live.com</p>
        </div>
        <input className='bg-white' type='text' placeholder='Name' name='name'/>
        <input className='my-4 p-2 bg-white' type='email' placeholder='Email' name='email'/>
<textarea className='bg-white' name='message' rows="10" placeholder='Message'></textarea>
<button className='text-white border-2 hover:bg-pink-700 px-4 py-3 my-8 mx-auto flex items-center rounded cursor-pointer'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact