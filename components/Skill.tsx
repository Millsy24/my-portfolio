import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean
}

function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        className='rounded-full border border-gray-400 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition druation-300 ease-in-out'
        src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' alt='react'
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
        }}
        transition={{
            duration: 1
        }}
        whileInView={{
            opacity:1, x:0
        }}
        
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
        </div>
        </div>
  )
}

export default Skill