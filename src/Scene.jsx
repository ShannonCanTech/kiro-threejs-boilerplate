import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Basic Three.js Scene Component
 * 
 * This is the minimal boilerplate for a Three.js scene in React.
 * It demonstrates:
 * - Scene setup (Scene, Camera, Renderer)
 * - Basic lighting
 * - Simple geometry
 * - Proper cleanup
 * 
 * Use this as a starting point for your own scenes.
 */
export default function Scene() {
  const mountRef = useRef(null)

  useEffect(() => {
    // 1. Create scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x1a1a2e)

    // 2. Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(0, 0, 5)

    // 3. Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    // 4. Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(5, 10, 5)
    scene.add(directionalLight)

    // 5. Add a simple object (sphere)
    const geometry = new THREE.SphereGeometry(1, 32, 32)
    const material = new THREE.MeshStandardMaterial({
      color: 0x00ffff,
      metalness: 0.3,
      roughness: 0.4
    })
    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    // 6. Animation loop
    function animate() {
      requestAnimationFrame(animate)
      
      // Gentle rotation
      sphere.rotation.y += 0.005
      
      renderer.render(scene, camera)
    }
    animate()

    // 7. Handle window resize
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // 8. Cleanup
    return () => {
      scene.remove(sphere)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
      
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div 
      ref={mountRef} 
      role="img"
      aria-label="3D scene with a rotating sphere"
    />
  )
}
