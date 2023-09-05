import React from 'react'
import Jordan from '../assets/jrdn.png'
import Skills from './Skills'

const About = () => {
    return (
        <div className="h-screen">
            <div className='grid md:grid-cols-2 sm:grid-cols-1 justify-between items-center'>
                <div>
                    <img className='flex-auto rounded-xl mb-10 max-w-[800px]' src={Jordan} />
                </div>
                <div>
                    <p className='font-lighter tracking-wide text-lg sm:text-2xl text-gray-500 max-w-[700px] mb-6'>
                        Hi, I'm Jordan
                    </p>
                    <p className='text-white text-3xl sm:text-6xl font-black max-w-[800px] mb-4'>
                        A Full Stack Product Designer on a mission
                    </p>
                    <p className='font-normal sm:text-xl text-gray-300 mb-6'>
                        After 8 years of experience designing elegant digital user experiences and delightful interfaces, I enrolled in a Full Stack Web Development bootcamp to learn how the products I design are built.
                    </p>
                    <p className='font-lighter tracking-wide text-lg sm:text-2xl text-gray-500 max-w-[700px] mb-6'>
                        New things I can do
                    </p>
                    <Skills></Skills>
                </div>
            </div>
        </div>
    )
}

export default About