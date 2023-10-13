import React from 'react';
import {Link} from 'react-router-dom';

export default function SignUp() {
  return (
  <div className='p-4 max-w-lg mx-auto'>
  <h1 className=' text-3xl text-center font-semibold my-7'>
    Sign Up
  </h1>

  <form className='flex flex-col gap-4'>
    <input type="text" placeholder='username' id='username' className='border p-3 rounded-lg'/>
    <input type="text" placeholder='email' id='email' className='border p-3 rounded-lg'/>
    <input type="text" placeholder='password' id='password' className='border p-3 rounded-lg'/>
    <button className='bg-slate-700 text-white p-3 rounded-lg uppercase'>Sign Up</button>
  </form>
  <div className='flex gap-2 mt-3'>
    <p>
      Have an account?
    </p>
    <Link to = {'/sign-in'}>
      <span className='text-blue-700 gap-3'>Sign In</span>
    </Link>
  </div>
  </div>
  )};