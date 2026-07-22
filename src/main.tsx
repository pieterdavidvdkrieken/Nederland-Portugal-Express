import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/cormorant-garamond/300.css'
import '@fontsource/cormorant-garamond/400.css'
import '@fontsource/cormorant-garamond/500.css'
import '@fontsource/cormorant-garamond/600.css'
import '@fontsource/cormorant-garamond/400-italic.css'
import '@fontsource/cormorant-garamond/500-italic.css'
import '@fontsource/manrope/200.css'
import '@fontsource/manrope/300.css'
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/600.css'
import '@fontsource/manrope/700.css'
import '@fontsource/bodoni-moda/400.css'
import '@fontsource/bodoni-moda/500.css'
import '@fontsource/bodoni-moda/600.css'
import '@fontsource/bodoni-moda/400-italic.css'
import './i18n/config'
import './index.css'
import App from './App.tsx'
import SmoothScroll from './components/layout/SmoothScroll.tsx'
import CustomCursor from './components/layout/CustomCursor.tsx'
import Preloader from './components/layout/Preloader.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Preloader />
      <SmoothScroll />
      <CustomCursor />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
