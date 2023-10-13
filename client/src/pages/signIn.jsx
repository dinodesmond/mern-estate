import React from 'react'
import {Link} from 'react-router-dom'

export default function SignIn() {
  return (
    <div className='p-4 max-w-lg mx-auto'>
  <h1 className=' text-3xl text-center font-semibold my-7'>
    Sign In
  </h1>

  <form className='flex flex-col gap-4'>
    <input type="text" placeholder='email' id='email' className='border p-3 rounded-lg'/>
    <input type="text" placeholder='password' id='password' className='border p-3 rounded-lg'/>
    <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-75'>Sign In</button>
  </form>
  <div className='flex gap-2 mt-3'>
    <p>
      Dont have an account?
    </p>
    <Link to = {'/sign-up'}>
      <span className='text-blue-700 gap-3 '>Sign Up</span>
    </Link>
  </div>
  </div>
  )
}
