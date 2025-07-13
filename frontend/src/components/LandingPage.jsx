import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import WelcomeSection from './WelcomeSection'
import FeaturesSlider from './FeaturesSlider'
import Footer from './Footer'

export default function LandingPage({ onLoginSuccess }) {
  return (
    <>
      <Navbar onLoginSuccess={onLoginSuccess} />
      <Hero />
      <div className="angle-divider" />
      <WelcomeSection />
      <FeaturesSlider />
      <Footer />
    </>
  )
}
