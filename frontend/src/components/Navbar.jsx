import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import LoginForm from './LoginForm'

export default function Navbar({ onLoginSuccess }) {
  const [open, setOpen] = useState(false)
  const token = localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    onLoginSuccess?.()
  }

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Register', to: '/register' },
    ...(token ? [{ label: 'Profile', to: '/profile' }] : [])
  ]

  const drawer = (
    <List sx={{ width: 200 }} onClick={() => setOpen(false)}>
      {navLinks.map(link => (
        <ListItem button component={Link} to={link.to} key={link.to}>
          <ListItemText primary={link.label} />
        </ListItem>
      ))}
      {token ? (
        <ListItem button onClick={handleLogout}>
          <ListItemText primary="Logout" />
        </ListItem>
      ) : (
        <ListItem>
          <LoginForm onLogin={onLoginSuccess} />
        </ListItem>
      )}
    </List>
  )

  return (
    <>
      <AppBar position="static" color="secondary" className="font-title">
        <Toolbar className="justify-between">
          <div className="text-2xl">
            <Link to="/">Vallact 2.0</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map(link => (
              <Button
                key={link.to}
                color="inherit"
                component={Link}
                to={link.to}
              >
                {link.label}
              </Button>
            ))}
            {token ? (
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
            ) : (
              <LoginForm onLogin={onLoginSuccess} />
            )}
          </div>
          <IconButton className="md:hidden" color="inherit" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        {drawer}
      </Drawer>
    </>
  )
}
