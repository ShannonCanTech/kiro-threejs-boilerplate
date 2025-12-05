# Particle System Example - Design

## Architecture

### Component Structure
```
ParticleSystem (React Component)
├── useEffect (Scene Setup)
│   ├── Scene Creation
│   ├── Camera Setup
│   ├── Renderer Configuration
│   ├── Particle System Creation
│   │   ├── BufferGeometry
│   │   ├── Position Attributes
│   │   ├── Color Attributes (optional)
│   │   └── PointsMaterial
│   ├── OrbitControls Setup
│   ├── Animation Loop
│   └── Cleanup Function
└── JSX (Mount Point)
```

### Data Flow
```
Component Mount
    ↓
Create Particle Positions (Float32Array)
    ↓
Create BufferGeometry with Attributes
    ↓
Create Points Object
    ↓
Add to Scene
    ↓
Animation Loop
    ├── Update Positions (Wave Pattern)
    ├── Mark Attributes as Needing Update
    ├── Update Controls
    └── Render Scene
    ↓
Component Unmount
    ↓
Cleanup Resources
```

## Scene Configuration

### Camera
```javascript
Type: PerspectiveCamera
FOV: 75 degrees
Aspect: window.innerWidth / window.innerHeight
Near: 0.1
Far: 1000
Position: (0, 0, 50)
```

### Renderer
```javascript
Type: WebGLRenderer
Antialias: true
Size: window.innerWidth × window.innerHeight
PixelRatio: min(window.devicePixelRatio, 2)
Background: 0x000000 (black)
```

### OrbitControls
```javascript
enableDamping: true
dampingFactor: 0.05
minDistance: 10
maxDistance: 100
```

## Particle System Design

### Particle Configuration
```javascript
const PARTICLE_COUNT = 1000;
const GRID_SIZE = 50; // Particles spread across 50x50 grid
const WAVE_AMPLITUDE = 2;
const WAVE_FREQUENCY = 0.001;
```

### Geometry Structure
```javascript
BufferGeometry
├── position attribute (Float32Array, 3 components per particle)
└── color attribute (Float32Array, 3 components per particle) [optional]
```

### Position Initialization
```javascript
// Distribute particles in a grid pattern
for (let i = 0; i < PARTICLE_COUNT; i++) {
  const x = (Math.random() - 0.5) * GRID_SIZE;
  const y = (Math.random() - 0.5) * GRID_SIZE;
  const z = (Math.random() - 0.5) * GRID_SIZE;
  
  positions[i * 3] = x;
  positions[i * 3 + 1] = y;
  positions[i * 3 + 2] = z;
}
```

### Material Configuration
```javascript
PointsMaterial {
  size: 2,
  sizeAttenuation: true,
  color: 0x00ffff (cyan),
  transparent: true,
  opacity: 0.8,
  blending: THREE.AdditiveBlending [optional]
}
```

## Animation Logic

### Wave Pattern
```javascript
function updateParticles(time) {
  const positions = particles.geometry.attributes.position.array;
  
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const i3 = i * 3;
    
    // Get original x, z positions
    const x = positions[i3];
    const z = positions[i3 + 2];
    
    // Calculate wave height based on position and time
    const distance = Math.sqrt(x * x + z * z);
    const wave = Math.sin(distance * 0.1 - time * 0.001) * WAVE_AMPLITUDE;
    
    // Update y position
    positions[i3 + 1] = wave;
  }
  
  // Mark attribute as needing update
  particles.geometry.attributes.position.needsUpdate = true;
}
```

### Animation Loop
```javascript
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  
  const elapsedTime = clock.getElapsedTime();
  
  // Update particle positions
  updateParticles(elapsedTime * 1000);
  
  // Update controls
  controls.update();
  
  // Render
  renderer.render(scene, camera);
}
```

## Performance Optimization

### Techniques Used
1. **BufferGeometry** - More efficient than regular Geometry
2. **Float32Array** - Typed arrays for better performance
3. **Single Points object** - One draw call for all particles
4. **Attribute updates** - Only update what changes
5. **Efficient math** - Pre-calculate where possible

### Memory Management
```javascript
// Store references for cleanup
const geometry = new THREE.BufferGeometry();
const material = new THREE.PointsMaterial({...});
const particles = new THREE.Points(geometry, material);

// Cleanup
geometry.dispose();
material.dispose();
```

## Color Variation (Optional Enhancement)

### Color Gradient
```javascript
const colors = new Float32Array(PARTICLE_COUNT * 3);

for (let i = 0; i < PARTICLE_COUNT; i++) {
  const i3 = i * 3;
  
  // Create color gradient based on position
  colors[i3] = Math.random(); // R
  colors[i3 + 1] = Math.random(); // G
  colors[i3 + 2] = Math.random(); // B
}

geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
material.vertexColors = true;
```

## Responsive Design

### Resize Handler
```javascript
function handleResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', handleResize);
```

## Resource Management

### Cleanup Checklist
- [ ] Remove particles from scene
- [ ] Dispose geometry
- [ ] Dispose material
- [ ] Dispose renderer
- [ ] Dispose controls
- [ ] Remove DOM elements
- [ ] Remove event listeners

### Cleanup Implementation
```javascript
return () => {
  scene.remove(particles);
  geometry.dispose();
  material.dispose();
  renderer.dispose();
  controls.dispose();
  
  if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
    mountRef.current.removeChild(renderer.domElement);
  }
  
  window.removeEventListener('resize', handleResize);
};
```

## Code Organization

### File Structure
```javascript
// Imports
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Constants
const PARTICLE_COUNT = 1000;
const GRID_SIZE = 50;
const WAVE_AMPLITUDE = 2;

// Component
export default function ParticleSystem() {
  const mountRef = useRef(null);
  
  useEffect(() => {
    // 1. Scene setup
    // 2. Camera setup
    // 3. Renderer setup
    // 4. Create particle system
    // 5. Add OrbitControls
    // 6. Animation loop
    // 7. Resize handler
    // 8. Cleanup
  }, []);
  
  return <div ref={mountRef} />;
}
```

### Helper Functions
```javascript
// Create particle positions
function createParticlePositions(count, gridSize) {
  const positions = new Float32Array(count * 3);
  // ... initialization logic
  return positions;
}

// Update particle animation
function updateParticles(particles, time) {
  // ... animation logic
}
```

## Visual Enhancements

### Additive Blending
```javascript
material.blending = THREE.AdditiveBlending;
// Creates glowing effect when particles overlap
```

### Size Variation
```javascript
// Vary size based on distance from camera
material.size = 2;
material.sizeAttenuation = true;
```

### Transparency
```javascript
material.transparent = true;
material.opacity = 0.8;
```

## Performance Targets

- **FPS:** 60 on modern hardware
- **Memory:** < 100MB
- **Draw Calls:** 1 (single Points object)
- **Particles:** 1000-10000 depending on hardware

## Accessibility

### ARIA Labels
```jsx
<div 
  ref={mountRef}
  role="img"
  aria-label="Animated 3D particle system with wave motion"
/>
```

### Alternative Content
```jsx
<div className="sr-only">
  Interactive 3D visualization showing 1000 particles animated in a wave pattern.
  Use mouse to rotate and zoom the view.
</div>
```

## Error Handling

### WebGL Support
```javascript
if (!renderer.capabilities.isWebGL2) {
  console.warn('WebGL 2 not supported');
}
```

### Performance Monitoring
```javascript
// Optional: Add FPS counter for development
console.log('Rendering', PARTICLE_COUNT, 'particles');
```

## Integration

### In App.jsx
```jsx
import ParticleSystem from './examples/ParticleSystem';

function App() {
  return (
    <div className="App">
      <ParticleSystem />
    </div>
  );
}
```

## Future Enhancements (Out of Scope)

- Mouse interaction (particles follow cursor)
- Multiple wave patterns
- Particle spawning/despawning
- Texture sprites for particles
- GPU compute shaders
- Particle trails

## References

- BufferGeometry: `#[[file:.kiro/reference/threejs-api/llms-core-1.txt]]`
- Points: `#[[file:.kiro/reference/threejs-api/llms-core-1.txt]]`
- OrbitControls: `#[[file:.kiro/reference/threejs-api/llms-controls.txt]]`
- Performance: `.kiro/steering/best-practices.md`
