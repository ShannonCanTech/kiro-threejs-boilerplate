import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Rotating Cube Example
 * 
 * A simple Three.js example demonstrating fundamental concepts:
 * - Basic scene setup (Scene, Camera, Renderer)
 * - Creating geometry and materials
 * - Adding lighting
 * - Animation loop
 * - Proper cleanup
 * 
 * This serves as the "Hello World" of Three.js.
 */
export default function RotatingCube() {
  const mountRef = useRef(null)

  useEffect(() => {
    // === 1. SCENE SETUP ===
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x16213e)

    // === 2. CAMERA SETUP ===
    const camera = new THREE.PerspectiveCamera(
      75, // Field of view
      window.innerWidth / window.innerHeight, // Aspect ratio
      0.1, // Near clipping plane
      1000 // Far clipping plane
    )
    camera.position.set(5, 5, 5) // Position camera for good view
    camera.lookAt(0, 0, 0) // Point camera at origin

    // === 3. RENDERER SETUP ===
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    // === 4. CREATE CUBE ===
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshStandardMaterial({
      color: 0x00ff00, // Green
      metalness: 0.3,
      roughness: 0.4
    })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    // === 5. ADD LIGHTING ===
    // Ambient light for base illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)

    // Directional light for depth and shadows
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(5, 10, 5)
    scene.add(directionalLight)

    // === 6. ANIMATION LOOP ===
    function animate() {
      requestAnimationFrame(animate)
      
      // Rotate cube on X and Y axes
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      
      // Render scene from camera's perspective
      renderer.render(scene, camera)
    }
    animate()

    // === 7. HANDLE WINDOW RESIZE ===
    function handleResize() {
      // Update camera aspect ratio
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      
      // Update renderer size
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // === 8. CLEANUP ===
    return () => {
      // Remove cube from scene
      scene.remove(cube)
      
      // Dispose resources to prevent memory leaks
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      
      // Remove renderer DOM element
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
        aria-label="3D rotating green cube"
      />
      <div className="sr-only">
        Interactive 3D scene showing a green cube rotating continuously
      </div>
    </>
  )
}
