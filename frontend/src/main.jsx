import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="min-h-screen bg-[url('./assets/wallpaper.jpg')] w-full">
    <App />
      
    </div>
  </StrictMode>,
)
