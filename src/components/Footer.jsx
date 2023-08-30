import React from 'react'
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='mt-auto flex w-full h-[80px] items-center px-4 bg-gray-950 text-white'>
            <a href="/"><FaLinkedin size={30}/></a>
            <a href="/"><FaGithub size={30}/></a>
        </div>
    )
}

export default Footer