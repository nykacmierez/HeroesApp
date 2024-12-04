import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HeroesApp } from './HeroesApp'




createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>

    <StrictMode>
      <HeroesApp />
    </StrictMode>

  </BrowserRouter>
)
