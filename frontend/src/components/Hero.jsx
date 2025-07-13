import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Typed from 'react-typed'
import BackgroundParticles from './BackgroundParticles'

export default function Hero() {
  return (
    <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }} className="flex items-center justify-center text-center" id="hero">
      <BackgroundParticles className="!absolute !inset-0" />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/assets/hero-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1
        }}
      />
      <Box className="space-y-6 relative z-10 animate-fade-in">
        <Typography variant="h1" component="h1">
          Vallact 2.0
        </Typography>
        <Typography variant="h6" component="div">
          <Typed strings={[
            'Explore the realm',
            'Fight epic battles',
            'Become a legend'
          ]} typeSpeed={40} backSpeed={20} loop />
        </Typography>
        <div className="space-x-4">
          <Button variant="contained" color="primary" size="large" href="/register">
            Start Adventure
          </Button>
          <Button variant="outlined" color="primary" size="large" href="/login">
            Login
          </Button>
        </div>
      </Box>
    </Box>
  )
}
