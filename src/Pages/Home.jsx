import React from 'react'
import ThemeToggle from '../Components/ThemeToggle'
import StarBackground from '../Components/StarBackground'
import NavBar from '../Components/NavBar'
import HeroSection from '../Components/HeroSection'
import AboutSection from '../Components/AboutSection'
import SkillsSection from '../Components/SkillsSection'
import ProjectsSection from '../Components/ProjectsSection'
import ContactSection from '../Components/ContactSection'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-background  text-gray-300 overflow-x-hidden'>
      {/**Theme Toggle */}

      <ThemeToggle/>

      {/**Star Background */}

      <StarBackground />

      {/**main section */}

     <main>
       <NavBar />
       <HeroSection />
       <AboutSection />
       <SkillsSection />
       <ProjectsSection />
       <ContactSection />
     </main>
     <Footer />
    </div>
  )
}

export default Home
