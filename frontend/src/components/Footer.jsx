import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { FaFacebook, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <Box component="footer" className="rpg-footer">
      <Box className="space-x-4 text-2xl">
        <IconButton color="inherit" component="a" href="#"><FaFacebook /></IconButton>
        <IconButton color="inherit" component="a" href="#"><FaYoutube /></IconButton>
      </Box>
      <Typography variant="body2">© 2025 TGF Engine</Typography>
    </Box>
  )
}
