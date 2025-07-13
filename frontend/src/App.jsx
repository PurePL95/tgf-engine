import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import LandingPage from './components/landingpage'
import Register from './components/Register'
import Login from './components/Login'
import Game from './components/Game'
import CreateCharacterForm from './components/CreateCharacterForm'

function AppRoutes({ token, setToken }) {
  const navigate = useNavigate()
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login onLoginSuccess={() => { setToken(localStorage.getItem('token')); navigate('/game') }} />} />
      <Route path="/create-character" element={token ? <CreateCharacterForm /> : <Navigate to="/login" replace />} />
      <Route path="/game" element={token ? <Game token={token} /> : <Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes token={token} setToken={setToken} />
      </BrowserRouter>
    </ThemeProvider>
  )
}
