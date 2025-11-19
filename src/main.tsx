import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Navbar from './component/Navbar.tsx';
import Hero from './component/Hero.tsx';
import Footer from './component/Footer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>  
    <Navbar />
    <Hero />
    <Footer />
  </StrictMode>,
)
