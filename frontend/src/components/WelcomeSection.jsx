import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function WelcomeSection() {
  return (
    <Container className="my-16">
      <Box className="rpg-panel" data-testid="welcome-panel">
        <Typography variant="h2" className="mb-4">Welcome</Typography>
        <Typography paragraph>
          Vallact is a browser based RPG game where you explore dungeons,
          fight fearsome monsters and forge alliances.
        </Typography>
        <Typography>
          Gather resources, trade with others and build your legend in a
          persistent world inspired by old-school text RPGs.
        </Typography>
      </Box>
    </Container>
  )
}
