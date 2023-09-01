import React from 'react'
import WeatherCheckr from '../assets/weather-checkr.png'
import Zen4You from '../assets/zen4you.png'
import TextEditor from '../assets/textEditor.png'

const Project = () => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-10'>
            <div style={{ backgroundImage: `url(${WeatherCheckr})` }} className='shadow-lg container group flex justify-center items-center mx-auto content-div'>

                {/* Hover */}
                <div className='opacity-0 group-hover:opacity-100 text-center' >
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        WeathrCheckr
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
                <div className='opacity-0 group-hover:opacity-100 text-center' >
                    <span className='text-center text-2xl font-bold text-white tracking-wider'>
                        Zen4You
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
            <div style={{ backgroundImage: `url(${TextEditor})` }} className='shadow-lg container group flex justify-center items-center mx-auto content-div'>

                {/* Hover */}
                <div className='opacity-0 group-hover:opacity-100 text-center' >
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Text Editor PWA
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <a href="https://purple-hat-e27f290df01f.herokuapp.com/"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${Zen4You})` }} className='shadow-lg container group flex justify-center items-center mx-auto content-div'>

                {/* Hover */}
                <div className='opacity-0 group-hover:opacity-100 text-center' >
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Zen4You
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
                <div className='opacity-0 group-hover:opacity-100 text-center' >
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Zen4You
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
                <div className='opacity-0 group-hover:opacity-100 text-center' >
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Zen4You
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