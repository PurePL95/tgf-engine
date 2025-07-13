import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateCharacterForm() {
  const [name, setName] = useState('')
  const [race, setRace] = useState('Human')
  const [clazz, setClazz] = useState('Warrior')
  const [gender, setGender] = useState('Male')
  const [avatar, setAvatar] = useState(null)
  const [preview, setPreview] = useState(null)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleFile = e => {
    const file = e.target.files[0]
    if (file && ['image/png', 'image/jpeg'].includes(file.type)) {
      setAvatar(file)
      setPreview(URL.createObjectURL(file))
    } else {
      setError('Avatar must be PNG or JPG')
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (name.length < 3) {
      setError('Name too short')
      return
    }
    const form = new FormData()
    form.append('name', name)
    form.append('race', race)
    form.append('class', clazz)
    form.append('gender', gender)
    if (avatar) form.append('avatar', avatar)
    try {
      const res = await fetch('/characters/', {
        method: 'POST',
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        body: form,
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.detail || 'Error')
      }
      navigate('/game')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <form onSubmit={handleSubmit} className="rpg-panel max-w-md mx-auto space-y-4">
        <h2 className="text-3xl font-title text-center">Stw\u00f3rz posta\u0107</h2>
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Imi\u0119"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <select className="select select-bordered w-full" value={race} onChange={e => setRace(e.target.value)}>
          <option>Human</option>
          <option>Elf</option>
          <option>Dwarf</option>
        </select>
        <select className="select select-bordered w-full" value={clazz} onChange={e => setClazz(e.target.value)}>
          <option>Warrior</option>
          <option>Mage</option>
          <option>Rogue</option>
        </select>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input type="radio" name="gender" value="Male" checked={gender==='Male'} onChange={e=>setGender(e.target.value)} />
            <span>Male</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="gender" value="Female" checked={gender==='Female'} onChange={e=>setGender(e.target.value)} />
            <span>Female</span>
          </label>
        </div>
        <input type="file" accept="image/png,image/jpeg" onChange={handleFile} />
        {preview && <img src={preview} alt="preview" className="w-32 h-32 object-cover mx-auto" />}
        {error && <p className="text-red-500 text-center">{error}</p>}
        <button type="submit" className="btn-rpg w-full">Utw\u00f3rz</button>
      </form>
    </div>
  )
}
