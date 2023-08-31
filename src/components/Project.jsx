import React from 'react'
import WeatherCheckr from '../assets/weather-checkr.png'
import Zen4You from '../assets/zen4you.png'

const Project = () => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div style={{ backgroundImage: `url(${WeatherCheckr})` }} className='shadow-lg container group flex justify-center items-center mx-auto content-div'>

                {/* Hover */}
                <div className='opacity-0 group-hover:opacity-100' >
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${WeatherCheckr})` }} className='shadow-lg container group flex justify-center items-center mx-auto content-div'>

                {/* Hover */}
                <div className='opacity-0 group-hover:opacity-100' >
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${Zen4You})` }} className='shadow-lg container group flex justify-center items-center mx-auto content-div'>

                {/* Hover */}
                <div className='opacity-0 group-hover:opacity-100' >
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project