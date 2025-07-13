// frontend/src/components/LandingPage.jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'
import WelcomeSection from './WelcomeSection'
import FeaturesSection from './FeaturesSection'
import Footer from './Footer'
import LoginForm from './LoginForm'

export default function LandingPage({ onLoginSuccess }) {
    const [registered, setRegistered] = useState(0)
    const [online, setOnline] = useState(0)

    useEffect(() => {
        axios.get('/stats/users_count')
            .then(res => setRegistered(res.data.count))
            .catch(() => setRegistered(0))
        axios.get('/stats/online_count')
            .then(res => setOnline(res.data.count))
            .catch(() => setOnline(0))
    }, [])

    return (
        <>
            <Navbar onLoginSuccess={onLoginSuccess} />

            <main>
                <section className="container mx-auto text-center py-12">
                    <h1 className="text-5xl font-title mb-2">Vallact – Tekstowa gra RPG</h1>
                    <p className="font-text mb-4">
                        Dołącz do <span className="font-semibold">{registered}</span> zarejestrowanych graczy!
                        {' '}
                        (<span className="font-semibold">{online}</span> online)
                    </p>
                    <Link
                        to="/register"
                        className="btn-rpg px-8 py-3 text-lg"
                    >
                        ZAREJESTRUJ SIĘ
                    </Link>
                </section>

                <section className="container mx-auto my-8">
                    <LoginForm onLogin={onLoginSuccess} />
                </section>

                <WelcomeSection />
                <FeaturesSection />

            </main>

            <Footer />
        </>
    )
}
