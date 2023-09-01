import React, {useState} from 'react'
import { ReactDOM } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Header = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-900'>
            <div>
                <p className='text-2xl font-black text-[#7D0FD8]'>JRDNWLKR</p>
            </div>
            {/* Navigation */}
                <ul className='hidden md:flex'>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            {/* Hamburger Menu */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars className='text-2xl text-lime-500' /> : <FaTimes className='text-2xl text-lime-500' />}
            </div>
            {/* Mobile Navigation */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-800 flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl font-black'>About</li>
                <li className='py-6 text-4xl font-black'>Skills</li>
                <li className='py-6 text-4xl font-black'>Projects</li>
                <li className='py-6 text-4xl font-black'>Contact</li>
            </ul>
        </div>
    )
}

export default Header