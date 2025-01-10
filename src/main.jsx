import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { initEmailJs } from './emailConfig.js'
import {
  MapContainer,
  TileLayer,
  useMap,
} from 'https://cdn.esm.sh/react-leaflet'


initEmailJs();

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 
    <App />
  </BrowserRouter>
)
