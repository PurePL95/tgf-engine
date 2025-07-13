import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import BackgroundParticles from './BackgroundParticles'

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center text-center" id="hero">
      <BackgroundParticles className="!absolute !inset-0" />
      <div className="absolute inset-0 bg-black/60" />
      <img src="/assets/hero-bg.jpg" alt="hero" className="absolute inset-0 w-full h-full object-cover -z-10" />
      <div className="space-y-6 relative z-10 animate-fade-in text-parchment">
        <h1 className="text-5xl font-title">TGF Engine</h1>
        <div className="h-8 text-lg">
          <Typewriter
            options={{
              strings: ['Explore the realm', 'Fight epic battles', 'Become a legend'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="space-x-4">
          <Link to="/register" className="btn-rpg inline-block">Start Adventure</Link>
          <Link to="/login" className="btn-rpg border border-gold bg-transparent text-parchment">Login</Link>
        </div>
      </div>
    </div>
  )
}
