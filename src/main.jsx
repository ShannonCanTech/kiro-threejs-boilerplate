import React from 'react'
import ReactDOM from 'react-dom/client'

// Choose which App to run:
import App from './App.jsx'              // All scenes with navigation (default)
// import App from './App-BasicScene.jsx'     // Basic scene only
// import App from './App-RotatingCube.jsx'   // Rotating cube only
// import App from './App-ParticleSystem.jsx' // Particle system only

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
