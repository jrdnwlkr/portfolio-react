import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

function Header({currentPage, setCurrentPage}) {
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className='relative bg-gray-900 w-full h-[80px] flex justify-between items-center px-4'>
            <div>
                <p className='text-2xl font-black text-[#7D0FD8]'>JRDNWLKR</p>
            </div>
            {/* Navigation */}
                <ul className='hidden md:flex'>
                <li
          onClick={() => setCurrentPage('About')}
          className={`text-sm font-bold tracking-widest py-2 rounded-md ${
            currentPage === 'About' ? 'bg-lime-500 text-lime-950' : 'text-gray-500 hover:text-gray-950'
          } mr-2`}
        >
          ABOUT
        </li>
        <li
          onClick={() => setCurrentPage('Project')}
          className={`text-sm font-bold tracking-widest py-2 rounded-md ${
            currentPage === 'Project' ? 'bg-slate-800 text-gray-950' : 'text-gray-500 hover:text-gray-950'
          } mr-2`}
        >
          WORK
        </li>
        <li
          onClick={() => setCurrentPage('Contact')}
          className={`text-sm font-bold tracking-widest py-2 rounded-md ${
            currentPage === 'Contact' ? 'bg-slate-800 text-gray-950' : 'text-gray-500 hover:text-gray-950'
          }`}
        >
          CONTACT
        </li>
                </ul>
            {/* Hamburger Menu
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars className='text-2xl text-lime-500' /> : <FaTimes className='text-2xl text-lime-500' />}
            </div>
            {/* Mobile Navigation */}
            {/* <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-800 flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl font-black'>About</li>
                <li className='py-6 text-4xl font-black'>Skills</li>
                <li className='py-6 text-4xl font-black'>Projects</li>
                <li className='py-6 text-4xl font-black'>Contact</li>
            </ul> */}
        </div>
    )
}

export default Header