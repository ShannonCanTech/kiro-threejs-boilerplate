import { useState } from 'react'
import Scene from './Scene'
import RotatingCube from './examples/RotatingCube'
import ParticleSystem from './examples/ParticleSystem'

function App() {
  // Change the default scene here: 'basic', 'cube', or 'particles'
  const [activeScene, setActiveScene] = useState('basic')

  const scenes = {
    basic: { component: Scene, name: 'Basic Scene', description: 'Minimal Three.js setup' },
    cube: { component: RotatingCube, name: 'Rotating Cube', description: 'Animated cube example' },
    particles: { component: ParticleSystem, name: 'Particle System', description: 'Advanced particle effects' }
  }

  const ActiveComponent = scenes[activeScene].component

  return (
    <>
      {/* Navigation - comment out to hide buttons */}
      <nav className="nav">
        {Object.entries(scenes).map(([key, scene]) => (
          <button
            key={key}
            onClick={() => setActiveScene(key)}
            className={activeScene === key ? 'active' : ''}
          >
            {scene.name}
          </button>
        ))}
      </nav>

      {/* Info panel - comment out to hide */}
      <div className="info-panel">
        <h3>{scenes[activeScene].name}</h3>
        <p>{scenes[activeScene].description}</p>
        <p style={{ marginTop: '10px', fontSize: '12px', opacity: 0.7 }}>
          Use mouse to interact • Press buttons to switch scenes
        </p>
      </div>

      <ActiveComponent />
    </>
  )
}

export default App
