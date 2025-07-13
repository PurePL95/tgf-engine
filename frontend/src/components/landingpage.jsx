import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import Navbar from './Navbar'
import WelcomeSection from './WelcomeSection'
import FeaturesSlider from './FeaturesSlider'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral text-parchment">
      <Navbar />
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-4 space-y-6">
        <img src="/assets/hero-bg.jpg" alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-40 -z-10" />
        <h1 className="text-5xl md:text-6xl font-title text-gold drop-shadow-lg">TGF Engine</h1>
        <div className="h-8 text-lg">
          <Typewriter
            options={{
              strings: ['Rozwijaj bohatera', 'Walcz', 'Pisz histori\u0119...'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <Link to="/create-character" className="btn-rpg inline-block">Stw\u00f3rz posta\u0107</Link>
      </section>
      <WelcomeSection />
      <FeaturesSlider />
      <Footer />
    </div>
  )
}
