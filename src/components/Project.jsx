import React from 'react'
import WeatherCheckr from '../assets/weather-checkr.png'
import Zen4You from '../assets/zen4you.png'
import TextEditor from '../assets/textEditor.png'
import NeonPortfolio from '../assets/neon-portfolio.png'
import RecipeDB from '../assets/recipedb.png'
import NextProject from '../assets/next-project.png'

const Project = () => {
    return (
        <div className='container py-6 items-center h-screen mx-auto text-center'>
            <p className='text-gray-500 text-lg sm:text-2xl font-lighter tracking-widest'>
                We can work from home
            </p>
            <p className='text-white text-3xl sm:text-6xl font-black mb-24'>
                    Proof is in the projects
                </p>
            <div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-4'>
                    <div style={{ backgroundImage: `url(${RecipeDB})` }} className='rounded-md shadow-lg container group flex justify-center items-center mx-auto content-div'>

                        {/* Hover */}
                        <div className='opacity-0 group-hover:opacity-100 text-center' >
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                RecipeDB
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://team4-project2-5021452ae8d3.herokuapp.com">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/recipe-db-chicago-chefs/Project2">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${TextEditor})` }} className='rounded-md shadow-lg container group flex justify-center items-center mx-auto content-div'>

                        {/* Hover */}
                        <div className='opacity-0 group-hover:opacity-100 text-center' >
                            <span className='text-center text-2xl font-bold text-white tracking-wider'>
                                Note Taking PWA
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://purple-hat-e27f290df01f.herokuapp.com/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/jrdnwlkr/purple-hat">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Zen4You})` }} className='rounded-md shadow-lg container group flex justify-center items-center mx-auto content-div'>

                        {/* Hover */}
                        <div className='opacity-0 group-hover:opacity-100 text-center' >
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Zen4You Image Generator
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <a href="https://github.com/Project01Team03/Zen4You"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                                </a>
                                <a href="/">
                                    <a href="https://purple-hat-e27f290df01f.herokuapp.com/"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${WeatherCheckr})` }} className='rounded-md shadow-lg container group flex justify-center items-center mx-auto content-div'>

                        {/* Hover */}
                        <div className='opacity-0 group-hover:opacity-100 text-center' >
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Weather API
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://jrdnwlkr.github.io/summertime/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/jrdnwlkr/summertime">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${NeonPortfolio})` }} className='rounded-md shadow-lg container group flex justify-center items-center mx-auto content-div'>

                        {/* Hover */}
                        <div className='opacity-0 group-hover:opacity-100 text-center' >
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                My First Portfolio
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://jrdnwlkr.github.io/Neon-Portfolio/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/jrdnwlkr/Neon-Portfolio">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${NextProject})` }} className='rounded-md shadow-lg container group flex justify-center items-center mx-auto content-div'>

                        {/* Hover */}
                        <div className='opacity-0 group-hover:opacity-100 text-center' >
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                My Next Project
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project