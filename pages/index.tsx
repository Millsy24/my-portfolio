import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'



export default function Home() {
  return (
    <div className='bg-[rgb(20,20,20)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-400/20 scrollbar-thumb-custom-orange'>
      <Head>
        <title>Lukas' Portfolio</title>

        
      </Head>

      <Header/>

      <section id="hero" className='snap-start' >
        <Hero/>
      </section>

      <section id="about" className ="snap-center">
        <About/>
      </section>
      
      <section id="experience" className="snap-center">
        <WorkExperience/>
      </section>

      <section id ="skills" className='snap-start'>
        <Skills/>
      </section>

      <section id="projects" className='snap-start'>
        <Projects/>
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe/>
      </section>

      
    </div>
  )
}
