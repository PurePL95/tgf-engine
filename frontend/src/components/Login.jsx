import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../services/api'

export default function Login({ onLoginSuccess }) {
  const navigate = useNavigate()
  const [data, setData] = useState({ username: '', password: '' })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const { access_token } = await loginUser(data)
      localStorage.setItem('token', access_token)
      onLoginSuccess?.()
      navigate('/game')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="rpg-panel max-w-md w-full">
        <h2 className="text-3xl font-title mb-4 text-center">Login</h2>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block mb-1">Username</label>
            <input id="username" name="username" className="rpg-input" value={data.username} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">Password</label>
            <input id="password" name="password" type="password" className="rpg-input" value={data.password} onChange={handleChange} required />
          </div>
          <button disabled={loading} className="btn-rpg w-full mt-4">{loading ? 'Logging in…' : 'Login'}</button>
        </form>
      </div>
    </div>
  )
}
