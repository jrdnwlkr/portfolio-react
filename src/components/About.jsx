import React from 'react'
import Jordan from '../assets/jrdn.png'

const About = () => {
    return (
        <div className='mb-16 flex-col md:flex h-screen justify-between items-center'>
            <img className='rounded-xl mb-10 max-w-[400px]' src={Jordan} />
            <div>
                <p className='font-bold text-lg sm:text-2xl text-gray-500 max-w-[700px] mb-6'>
                    Hello.
                </p>
                <p className='text-white text-3xl sm:text-5xl font-black max-w-[800px] mb-4'>
                    I am a Full Stack Product Designer on a mission to change the world.
                </p>
                <p className='font-normal text-md sm:text-xl text-lime-300 max-w-[700px] mb-6'>
                    I have 8 years of experience as a Product Designer and I've recently completed a Full Stack Web Development bootcamp.
                </p>
            </div>
        </div>
    )
}

export default About