import React from 'react'
import { useRef, useState } from 'react'


const Contact = () => {
    
    return (
        <div className='w-full mb-16 flex-col md:flex justify-center items-center'>
            <form action="" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb8'>
                    <div className='p-0 m-0'>
                        <input name="name" type="text" placeholder='Name' className='w-full flex rounded-md mb-4 bg-slate-800 border-none' />
                        <input name="email" type="email" placeholder='Email' className='w-full rounded-md mb-4 bg-slate-800 border-none' />
                        <textarea name="message" rows="10" placeholder='Message' className="w-full rounded-md flex resize-vertical mb-4 bg-slate-800 border-none"></textarea>
                        <button className='bg-lime-500 p-2 my-2 rounded-md w-full flex'>Send</button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default Contact