import React from 'react'

const About = () => {
    return (
        <div className='w-full h-[200px] my-8 px-12'>
            <p className='text-white text-center text-5xl font-black'>
                A Full Stack Product Designer on a mission to change the world.
            </p>
            <p className='font-normal text-xl text-lime-300 text-center m-6'>
                I have 8 years of experience as a Product Designer and I've recently completed a Full Stack Web Development bootcamp.
            </p>
            <button className='bg-lime-500 rounded px-4 py-3 mx-auto'>Learn more</button>
        </div>
    )
}

export default About