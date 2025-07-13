import { useEffect, useState } from 'react'
import { fetchProfile } from '../services/api'

export default function PlayerProfile({ token }) {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProfile(token)
      .then(setUser)
      .catch(err => setError(err.message))
  }, [token])

  if (error) return <div className="rpg-panel">{error}</div>
  if (!user) return <div className="rpg-panel">Loading…</div>

  return (
    <div className="rpg-panel">
      <h2 className="text-2xl font-title mb-2">{user.username}</h2>
      <div className="rpg-divider mb-2" />
      <p>Level: {user.level}</p>
      <p>HP: {user.hp}</p>
      <p>AP: {user.ap}</p>
    </div>
  )
}
