import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import theme from './theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={1} preventDuplicate anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
          <App />
        </SnackbarProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>
)
