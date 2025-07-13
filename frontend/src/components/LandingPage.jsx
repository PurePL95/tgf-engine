// frontend/src/components/LandingPage.jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'
import WelcomeSection from './WelcomeSection'
import FeaturesSection from './FeaturesSection'
import Footer from './Footer'

export default function LandingPage({ onLoginSuccess }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        // zakładamy endpoint GET /stats/users_count
        axios.get('/stats/users_count')
            .then(res => setCount(res.data.count))
            .catch(() => setCount(1351))
    }, [])

    return (
        <>
            <Navbar onLoginSuccess={onLoginSuccess} />

            <main>
                <section className="container mx-auto text-center py-12">
                    <h1 className="text-5xl font-title mb-2">Vallact – Tekstowa gra RPG</h1>
                    <p className="font-text mb-4">
                        Dołącz do <span className="font-semibold">{count}</span> zarejestrowanych graczy!
                    </p>
                    <Link
                        to="/register"
                        className="btn-rpg px-8 py-3 text-lg"
                    >
                        ZAREJESTRUJ SIĘ
                    </Link>
                </section>

                <WelcomeSection />
                <FeaturesSection />

            </main>

            <Footer />
        </>
    )
}
