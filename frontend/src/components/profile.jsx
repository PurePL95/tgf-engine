import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchProfile } from '../services/api'
import StatsPanel from './StatsPanel'

export default function Profile({ onLogout }) {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (!token) return navigate('/login', { replace: true })
        fetchProfile(token)
            .then(setUser)
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [token, navigate])

    if (loading) return <div>Ładowanie…</div>
    if (error)   return <div className="text-red-600">{error}</div>

    return (
        <div className="rpg-panel max-w-md mx-auto mt-10">
            <h2 className="text-3xl font-title mb-4">Profil gracza</h2>
            <div className="rpg-divider mb-4" />
            <StatsPanel user={user} />
            <button
                onClick={() => {
                    localStorage.removeItem('token')
                    onLogout?.()
                    navigate('/login', { replace: true })
                }}
                className="btn btn-accent font-title w-full mt-6"
            >
                Wyloguj się
            </button>
        </div>
    )
}
