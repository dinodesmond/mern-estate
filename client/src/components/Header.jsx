import React from 'react'
import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to = '/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Idan</span>
            <span className='text-slate-700'>Estate</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-2 rounded-lg flex items-center'>
            <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none width-24 sm:w-64'/>
            <FaSearch className='text-slate-500'/>
        </form>
        <li className='flex gap-4'>
            <Link to = '/'>
            <ul className='hidden sm:inline hover:underline'>Home</ul>
            </Link>
            <Link to = 'about'>
            <ul className='hidden sm:inline hover:underline'>About</ul>
            </Link>
            <Link to = '/sign-in'>
            <ul className='sm:inline hover:underline'>{''}Sign In</ul>
            </Link>
        </li>
        </div>
       
    </header>
  )
}
