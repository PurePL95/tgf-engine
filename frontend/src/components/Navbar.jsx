import { useState } from 'react'
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

export default function Navbar({ onLogout }) {
  const [open, setOpen] = useState(false)
  const token = localStorage.getItem('token')

  const drawer = (
    <List sx={{ width: 200 }} onClick={() => setOpen(false)}>
      <ListItem button component={Link} to="/">
        <ListItemText primary="Home" />
      </ListItem>
      {!token && (
        <ListItem button component={Link} to="/register">
          <ListItemText primary="Register" />
        </ListItem>
      )}
      {token ? (
        <ListItem button component={Link} to="/game">
          <ListItemText primary="Game" />
        </ListItem>
      ) : (
        <ListItem button component={Link} to="/login">
          <ListItemText primary="Login" />
        </ListItem>
      )}
    </List>
  )

  return (
    <>
      <AppBar position="static" color="secondary" className="font-title">
        <Toolbar className="justify-between">
          <div className="text-2xl">
            <Link to="/">TGF Engine</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button color="inherit" component={Link} to="/">Home</Button>
            {!token && <Button color="inherit" component={Link} to="/register">Register</Button>}
            {token ? (
              <Button color="inherit" component={Link} to="/game">Game</Button>
            ) : (
              <Button color="inherit" component={Link} to="/login">Login</Button>
            )}
          </div>
          <IconButton color="inherit" edge="end" className="md:hidden" onClick={() => setOpen(true)}>
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
