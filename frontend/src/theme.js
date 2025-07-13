import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: { main: '#a9743b' },
    secondary: { main: '#5c432c' },
    info: { main: '#d19c4c' },
    background: { default: '#f5edda' },
    text: { primary: '#3d2b1f' }
  },
  typography: {
    fontFamily: ['Uncial Antiqua', 'serif'].join(','),
    h1: {
      fontFamily: 'MedievalSharp,cursive',
      fontSize: '4rem'
    },
    h2: {
      fontFamily: 'MedievalSharp,cursive',
      fontSize: '2rem'
    }
  }
})

export default theme
