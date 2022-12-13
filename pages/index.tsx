import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'



export default function Home() {
  return (
    <div className='bg-[rgb(20,20,20)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
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

      
    </div>
  )
}
