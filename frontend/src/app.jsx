// frontend/src/App.jsx
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Register from './components/Register'
import Profile from './components/Profile'
import Ranking from './components/Ranking'
import Faq from './components/Faq'

export default function App() {
    const [token, setToken] = useState(localStorage.getItem('token'))

    useEffect(() => {
        const handler = () => setToken(localStorage.getItem('token'))
        window.addEventListener('storage', handler)
        return () => window.removeEventListener('storage', handler)
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<LandingPage onLoginSuccess={() => setToken(localStorage.getItem('token'))} />}
                />
                <Route path="/register" element={<Register />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/faq" element={<Faq />} />
                <Route
                    path="/profile"
                    element={token
                        ? <Profile onLogout={() => setToken(null)} />
                        : <Navigate to="/" replace />}
                />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    )
}
