import Navbar from './Navbar'
import Hero from './Hero'
import WelcomeSection from './WelcomeSection'
import FeaturesSlider from './FeaturesSlider'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="angle-divider" aria-hidden="true">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="#3d2b1f" points="0,100 100,0 100,100" />
        </svg>
      </div>
      <WelcomeSection />
      <FeaturesSlider />
      <Footer />
    </>
  )
}
