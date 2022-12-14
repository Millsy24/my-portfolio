import React from 'react'

type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5]
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-custom-orange scrollbar-thin'>
        {projects.map((project, i)=> (
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
            <img src = 'http://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg' alt ='dog'/>
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                    <span className='underline decoration-custom-orange/50'>Case Study {i+1} of {projects.length}: </span>
                    
                    UPS Clone</h4>
                    <p className='text-lg text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus enim ipsum culpa obcaecati dolorem, impedit quibusdam pariatur asperiores recusandae facilis odit nesciunt ratione hic ducimus sed aperiam mollitia vitae alias.</p>
            </div>
            </div>
        ))}
            
        </div>

        <div className='w-full absolute top-[30%] bg-custom-orange/10 left-0 h-[500px] -skew-y-12'>

        </div>
    </div>
  )
}

export default Projects