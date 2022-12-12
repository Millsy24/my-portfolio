import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
        "Hello, my name is Lukas💻", 
        "Dog lover", 
        "Married to a beautiful woman🥰"
    ],
    loop: true,
    delaySpeed:2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <img 
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src="https://media-exp1.licdn.com/dms/image/C4D03AQFDDa6Yqq8h0w/profile-displayphoto-shrink_800_800/0/1638654519491?e=1676505600&v=beta&t=kx8sMWjX8wqc6iURYngJu8R_y7rRJLVJgQVbBV3vvWI" alt="me"/>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-400 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-5xl lg:6xl font-semibold scroll-px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#FFA500'/>
        </h1>
        <div className='pt-5'>
            <Link href='#about'>
            <button className='heroButton'>About</button>
            </Link>
            
            <Link href="#experience">
            <button className='heroButton'>Experience</button>
            </Link>
            
            <Link href="#skills">
            <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
            <button className='heroButton'>Projects</button>
            </Link>
            
            
            
            
        </div>
        </div>
    </div>
  )
}

export default Hero