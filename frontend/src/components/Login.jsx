import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../services/api'

export default function Login({ onLogin }) {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        setLoading(true)
        try {
            const { access_token } = await loginUser({ username, password })
            localStorage.setItem('token', access_token)
            onLogin?.()
            navigate('/profile', { replace: true })
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="rpg-panel max-w-md mx-auto">
                <h2 className="text-3xl font-title text-accent text-center mb-6">
                    Logowanie
                </h2>
                {error && (
                    <div className="mb-4 p-3 bg-error text-base-100 rounded">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block mb-1">Username</label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            className="rpg-input"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="rpg-input"
                            required
                        />
                    </div>
                    <button disabled={loading} className="btn-rpg w-full mt-4">
                        {loading ? 'Trwa logowanie…' : 'Zaloguj się'}
                    </button>
                </form>
            </div>
        </div>
    )
}
