import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

/**
 * Particle System Example
 * 
 * An intermediate Three.js example demonstrating:
 * - BufferGeometry and custom attributes
 * - Particle systems with 1000+ particles
 * - Mathematical animation (wave patterns)
 * - OrbitControls for interaction
 * - Performance optimization techniques
 */

// Configuration constants
const PARTICLE_COUNT = 1000
const GRID_SIZE = 50
const WAVE_AMPLITUDE = 2

export default function ParticleSystem() {
  const mountRef = useRef(null)

  useEffect(() => {
    // === 1. SCENE SETUP ===
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)

    // === 2. CAMERA SETUP ===
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(0, 0, 50)

    // === 3. RENDERER SETUP ===
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    // === 4. ORBIT CONTROLS ===
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.minDistance = 10
    controls.maxDistance = 100

    // === 5. CREATE PARTICLE SYSTEM ===
    
    // Create Float32Array for particle positions
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    
    // Initialize particle positions in 3D space
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * GRID_SIZE     // x
      positions[i3 + 1] = (Math.random() - 0.5) * GRID_SIZE // y
      positions[i3 + 2] = (Math.random() - 0.5) * GRID_SIZE // z
    }
    
    // Create BufferGeometry and set position attribute
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    )
    
    // Create material for particles
    const material = new THREE.PointsMaterial({
      size: 2,
      color: 0x00ffff,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    })
    
    // Create Points object (particle system)
    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // === 6. ANIMATION SYSTEM ===
    
    const clock = new THREE.Clock()
    
    /**
     * Update particle positions to create wave effect
     * @param {number} time - Elapsed time in milliseconds
     */
    function updateParticles(time) {
      const positions = particles.geometry.attributes.position.array
      
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3
        
        // Get x and z positions
        const x = positions[i3]
        const z = positions[i3 + 2]
        
        // Calculate distance from center
        const distance = Math.sqrt(x * x + z * z)
        
        // Create wave effect using sine function
        const wave = Math.sin(distance * 0.1 - time * 0.001) * WAVE_AMPLITUDE
        
        // Update y position
        positions[i3 + 1] = wave
      }
      
      // Mark attribute as needing update
      particles.geometry.attributes.position.needsUpdate = true
    }
    
    // Animation loop
    function animate() {
      requestAnimationFrame(animate)
      
      const elapsedTime = clock.getElapsedTime()
      
      // Update particle positions
      updateParticles(elapsedTime * 1000)
      
      // Update controls
      controls.update()
      
      // Render scene
      renderer.render(scene, camera)
    }
    animate()

    // === 7. HANDLE WINDOW RESIZE ===
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // === 8. CLEANUP ===
    return () => {
      // Remove particles from scene
      scene.remove(particles)
      
      // Dispose resources
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      controls.dispose()
      
      // Remove DOM element
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
      
      // Remove event listener
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div 
        ref={mountRef}
        role="img"
        aria-label="Animated 3D particle system with wave motion"
      />
      <div className="sr-only">
        Interactive 3D visualization showing 1000 particles animated in a wave pattern.
        Use mouse to rotate and zoom the view.
      </div>
    </>
  )
}
