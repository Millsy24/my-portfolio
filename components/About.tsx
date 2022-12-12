import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1.5
    }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>About</h3>
        <motion.img
        src='https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/292100238_727521251833574_2076056607569185776_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_ohc=0c4jX0uZTpEAX9j3uMf&_nc_ht=scontent-ord5-1.xx&oh=00_AfANxgyW9GmHCDV7ma1lyLV9pvxD4rTD6Y6418wRR2TBUA&oe=639C8038' alt='me'
        initial={{
            x:-200,
            opacity:0
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            x:0,
            opacity:1
        }}
        viewport={{
            once:true,
        }}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is <span className='underline decoration-custom-orange/50'>my background</span></h4>
            <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, doloremque necessitatibus libero, placeat veritatis illo vitae omnis magnam, ipsum eum tempora neque harum facere quidem vero? Fuga quo possimus corrupti!</p>
        </div>
    </motion.div>
  )
}

export default About