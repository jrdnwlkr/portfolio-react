import React from 'react'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import Node from '../assets/node.png'
import React2 from '../assets/react.png'
import Mongo2 from '../assets/mongo.png'
import Git from '../assets/git.png'
import Express2 from '../assets/express.png'
import Figma from '../assets/figma.png'

const Skills = () => {
    return (
        <div className='flex w-full justify-between items-center p-8 my-20 bg-gray-950 text-white'>
            <img className='w-[80px]' src={Html} />
            <img className='w-[80px]' src={Css} />
            <img className='w-[80px]' src={Javascript} />
            <img className='w-[80px]' src={Node} />
            <img className='w-[80px]' src={React2} />
            <img className='w-[80px]' src={Mongo2} />
            <img className='w-[80px]' src={Git} />
            <img className='w-[80px]' src={Express2} />
            <img className='w-[80px]' src={Figma} />
        </div>
    )
}

export default Skills