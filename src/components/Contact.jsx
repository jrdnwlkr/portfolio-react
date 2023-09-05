import React from 'react'
import { useRef, useState } from 'react'
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'



const Contact = () => {

    return (
        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4 items-center'>

            <div className='mr-12'>
                <p className='text-gray-500 text-lg sm:text-2xl font-lighter mb-4 tracking-wide'>
                    How to reach me
                </p>
                <p className='text-white text-3xl sm:text-6xl font-black max-w-[800px] mb-6'>
                    Collaboration is the key to everything
                </p>
                <p className='font-normal text-md sm:text-xl text-gray-300 max-w-[700px] mb-6'>
                    I love to work with other designers, builders, and entrepreneurs. What are you working on? Maybe I can help. Find me on social, shoot me a message, or send an email to <a href="mailt:walkerjordanm@gmail.com">walkerjordanm@gmail.com</a>.</p>
                <div className='mt-auto flex w-full h-[80px] items-center bg-gray-900 text-white space-x-4'>
            <a href="http://www.linkedin.com/in/jrdnwlkr"><FaLinkedin size={30} className="w-[40px] bg-blue-[#040712] hover:-translate-y-1 rounded-s duration-300 ..."/></a>
            <a href="http://www.github.com/jrdnwlkr"><FaGithub size={30} className="w-[40px] bg-blue-[#040712] hover:-translate-y-1 rounded-s duration-300 ..."/></a>
        </div>
            </div>
            <div className='w-full mb-16 flex-col md:flex'>
                <form action="" className='flex flex-col max-w-[800px] w-full'>
                    <div className=''>
                        <div className='p-0 m-0'>
                            <input name="name" type="text" placeholder='Name' className='w-full flex rounded-md mb-4 bg-slate-800 border-none' />
                            <input name="email" type="email" placeholder='Email' className='w-full rounded-md mb-4 bg-slate-800 border-none' />
                            <textarea name="message" rows="8" placeholder='Message' className="w-full rounded-md flex resize-vertical mb-4 bg-slate-800 border-none"></textarea>
                            <button className='font-bold tracking-widest bg-lime-500 py-2 rounded-md text-lime-800 mr-2 w-full'>SEND MESSAGE</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Contact