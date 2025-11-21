import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Navbar from './component/Navbar.tsx'
import Hero from './component/Hero.tsx'
import Flota from './component/Flota.tsx'
import Footer from './component/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="min-h-screen bg-black">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/flota" element={<Flota />} />
          {/* Agrega más rutas aquí cuando las necesites */}
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>,
)