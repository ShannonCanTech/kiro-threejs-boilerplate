import * as THREE from 'three'

/**
 * Three.js Helper Utilities
 * 
 * Reusable functions for common Three.js setup tasks.
 * These helpers reduce boilerplate and ensure consistent patterns.
 */

/**
 * Create basic lighting setup (ambient + directional)
 * @param {THREE.Scene} scene - The scene to add lights to
 * @param {Object} options - Lighting configuration
 * @returns {Object} Object containing the created lights
 */
export function createBasicLighting(scene, options = {}) {
  const {
    ambientIntensity = 0.4,
    directionalIntensity = 0.8,
    directionalPosition = [5, 10, 5]
  } = options

  const ambientLight = new THREE.AmbientLight(0xffffff, ambientIntensity)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, directionalIntensity)
  directionalLight.position.set(...directionalPosition)
  scene.add(directionalLight)

  return { ambientLight, directionalLight }
}

/**
 * Create a perspective camera with common settings
 * @param {number} aspect - Aspect ratio (width / height)
 * @param {Object} options - Camera configuration
 * @returns {THREE.PerspectiveCamera} Configured camera
 */
export function createCamera(aspect, options = {}) {
  const {
    fov = 75,
    near = 0.1,
    far = 1000,
    position = [5, 5, 5],
    lookAt = [0, 0, 0]
  } = options

  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  camera.position.set(...position)
  camera.lookAt(...lookAt)

  return camera
}

/**
 * Create a WebGL renderer with common settings
 * @param {Object} options - Renderer configuration
 * @returns {THREE.WebGLRenderer} Configured renderer
 */
export function createRenderer(options = {}) {
  const {
    antialias = true,
    pixelRatio = Math.min(window.devicePixelRatio, 2)
  } = options

  const renderer = new THREE.WebGLRenderer({ antialias })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(pixelRatio)

  return renderer
}

/**
 * Setup window resize handler
 * @param {THREE.Camera} camera - Camera to update
 * @param {THREE.WebGLRenderer} renderer - Renderer to update
 * @returns {Function} Cleanup function to remove event listener
 */
export function setupResizeHandler(camera, renderer) {
  function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  window.addEventListener('resize', handleResize)

  // Return cleanup function
  return () => window.removeEventListener('resize', handleResize)
}

/**
 * Dispose a Three.js object and its resources
 * @param {THREE.Object3D} object - Object to dispose
 */
export function disposeObject(object) {
  if (object.geometry) {
    object.geometry.dispose()
  }

  if (object.material) {
    if (Array.isArray(object.material)) {
      object.material.forEach(material => material.dispose())
    } else {
      object.material.dispose()
    }
  }

  if (object.texture) {
    object.texture.dispose()
  }
}

/**
 * Dispose entire scene and its children
 * @param {THREE.Scene} scene - Scene to dispose
 */
export function disposeScene(scene) {
  scene.traverse(object => {
    disposeObject(object)
  })
}

/**
 * Create a grid helper for debugging
 * @param {number} size - Size of the grid
 * @param {number} divisions - Number of divisions
 * @returns {THREE.GridHelper} Grid helper
 */
export function createGridHelper(size = 10, divisions = 10) {
  return new THREE.GridHelper(size, divisions)
}

/**
 * Create axes helper for debugging
 * @param {number} size - Size of the axes
 * @returns {THREE.AxesHelper} Axes helper (red=X, green=Y, blue=Z)
 */
export function createAxesHelper(size = 5) {
  return new THREE.AxesHelper(size)
}

/**
 * Calculate position on a circle
 * @param {number} radius - Circle radius
 * @param {number} angle - Angle in radians
 * @param {number} height - Y position
 * @returns {Array} [x, y, z] position
 */
export function positionOnCircle(radius, angle, height = 0) {
  return [
    radius * Math.cos(angle),
    height,
    radius * Math.sin(angle)
  ]
}

/**
 * Convert degrees to radians
 * @param {number} degrees - Angle in degrees
 * @returns {number} Angle in radians
 */
export function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180)
}

/**
 * Convert radians to degrees
 * @param {number} radians - Angle in radians
 * @returns {number} Angle in degrees
 */
export function radiansToDegrees(radians) {
  return radians * (180 / Math.PI)
}
