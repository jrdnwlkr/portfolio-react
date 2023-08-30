import React from 'react'

const About = () => {
    return (
        <div className='my-20 px-12'>
            <p className='text-white text-3xl sm:text-5xl font-black max-w-[700px] mb-4'>
                A Full Stack Product Designer on a mission to change the world.
            </p>
            <p className='font-normal text-md sm:text-xl text-lime-300 max-w-[700px] mb-6'>
                I have 8 years of experience as a Product Designer and I've recently completed a Full Stack Web Development bootcamp.
            </p>
            <div>
                <button className='text-white border-2 font-bold border-white rounded px-4 py-3 object-center hover:bg-lime-500 hover:border-lime-500 hover:text-slate-950'>Learn more</button>
            </div>
        </div>
    )
}

export default About