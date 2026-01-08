import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Resources from '../components/Resources'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Resources />
      <Contact />
    </>
  )
}

export default Home