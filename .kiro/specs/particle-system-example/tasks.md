# Particle System Example - Implementation Tasks

## Task Breakdown

### Phase 1: Component Setup
**Estimated Time:** 15 minutes

#### Task 1.1: Create Component File
- [ ] Create `src/examples/ParticleSystem.jsx`
- [ ] Add imports (React, Three.js, OrbitControls)
- [ ] Define constants (PARTICLE_COUNT, GRID_SIZE, etc.)
- [ ] Create functional component structure

**Acceptance Criteria:**
- File exists in correct location
- All imports are correct
- Constants are defined
- Component structure in place

#### Task 1.2: Add Ref and Effect Hook
- [ ] Create `mountRef` using `useRef(null)`
- [ ] Add `useEffect` hook with empty dependency array
- [ ] Add JSX with div using mountRef
- [ ] Add basic styling

**Acceptance Criteria:**
- Ref is properly created
- Effect runs on mount
- Div renders in DOM

---

### Phase 2: Scene Setup
**Estimated Time:** 20 minutes

#### Task 2.1: Create Scene, Camera, Renderer
- [ ] Create `THREE.Scene()`
- [ ] Create `THREE.PerspectiveCamera(75, aspect, 0.1, 1000)`
- [ ] Set camera position to (0, 0, 50)
- [ ] Create `THREE.WebGLRenderer({ antialias: true })`
- [ ] Configure renderer (size, pixel ratio, background)
- [ ] Append renderer to mountRef

**Acceptance Criteria:**
- Scene is created
- Camera is positioned correctly
- Renderer is configured
- Canvas appears in DOM

**Code Reference:**
```javascript
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 50;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x000000);
mountRef.current.appendChild(renderer.domElement);
```

#### Task 2.2: Add OrbitControls
- [ ] Import OrbitControls
- [ ] Create controls instance
- [ ] Configure damping and distance limits
- [ ] Store reference for cleanup

**Acceptance Criteria:**
- Controls are created
- Damping is enabled
- Distance limits are set
- Camera can be rotated

**Code Reference:**
```javascript
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 10;
controls.maxDistance = 100;
```

---

### Phase 3: Create Particle System
**Estimated Time:** 30 minutes

#### Task 3.1: Initialize Particle Positions
- [ ] Create Float32Array for positions (PARTICLE_COUNT * 3)
- [ ] Loop through particles
- [ ] Generate random x, y, z positions within GRID_SIZE
- [ ] Store in positions array

**Acceptance Criteria:**
- Float32Array is created with correct size
- Positions are randomly distributed
- Particles fill 3D space

**Code Reference:**
```javascript
const PARTICLE_COUNT = 1000;
const GRID_SIZE = 50;

const positions = new Float32Array(PARTICLE_COUNT * 3);

for (let i = 0; i < PARTICLE_COUNT; i++) {
  const i3 = i * 3;
  positions[i3] = (Math.random() - 0.5) * GRID_SIZE;     // x
  positions[i3 + 1] = (Math.random() - 0.5) * GRID_SIZE; // y
  positions[i3 + 2] = (Math.random() - 0.5) * GRID_SIZE; // z
}
```

#### Task 3.2: Create BufferGeometry
- [ ] Create `THREE.BufferGeometry()`
- [ ] Create `THREE.BufferAttribute` from positions array
- [ ] Set attribute on geometry with name 'position'

**Acceptance Criteria:**
- BufferGeometry is created
- Position attribute is set correctly
- Attribute has 3 components per vertex

**Code Reference:**
```javascript
const geometry = new THREE.BufferGeometry();
geometry.setAttribute(
  'position',
  new THREE.BufferAttribute(positions, 3)
);
```

#### Task 3.3: Create Material and Points
- [ ] Create `THREE.PointsMaterial` with configuration
- [ ] Set size, color, transparency, opacity
- [ ] Create `THREE.Points(geometry, material)`
- [ ] Add points to scene

**Acceptance Criteria:**
- Material is configured correctly
- Points object is created
- Particles are visible in scene

**Code Reference:**
```javascript
const material = new THREE.PointsMaterial({
  size: 2,
  color: 0x00ffff,
  transparent: true,
  opacity: 0.8,
  sizeAttenuation: true
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);
```

---

### Phase 4: Animation System
**Estimated Time:** 30 minutes

#### Task 4.1: Create Clock
- [ ] Create `THREE.Clock()` instance
- [ ] Store for use in animation loop

**Acceptance Criteria:**
- Clock is created
- Can track elapsed time

#### Task 4.2: Create Update Function
- [ ] Define `updateParticles(time)` function
- [ ] Get positions array from geometry
- [ ] Loop through particles
- [ ] Calculate wave height using sine function
- [ ] Update y positions
- [ ] Mark attribute as needing update

**Acceptance Criteria:**
- Update function is defined
- Wave calculation is correct
- Positions update smoothly
- Attribute update flag is set

**Code Reference:**
```javascript
const WAVE_AMPLITUDE = 2;

function updateParticles(time) {
  const positions = particles.geometry.attributes.position.array;
  
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const i3 = i * 3;
    const x = positions[i3];
    const z = positions[i3 + 2];
    
    const distance = Math.sqrt(x * x + z * z);
    const wave = Math.sin(distance * 0.1 - time * 0.001) * WAVE_AMPLITUDE;
    
    positions[i3 + 1] = wave;
  }
  
  particles.geometry.attributes.position.needsUpdate = true;
}
```

#### Task 4.3: Create Animation Loop
- [ ] Define `animate()` function
- [ ] Call `requestAnimationFrame(animate)`
- [ ] Get elapsed time from clock
- [ ] Call `updateParticles(elapsedTime)`
- [ ] Update controls
- [ ] Render scene
- [ ] Start animation loop

**Acceptance Criteria:**
- Animation loop is defined
- Particles animate smoothly
- Controls update each frame
- Scene renders continuously

**Code Reference:**
```javascript
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  
  const elapsedTime = clock.getElapsedTime();
  updateParticles(elapsedTime * 1000);
  
  controls.update();
  renderer.render(scene, camera);
}

animate();
```

---

### Phase 5: Responsive Design
**Estimated Time:** 15 minutes

#### Task 5.1: Create Resize Handler
- [ ] Define `handleResize()` function
- [ ] Update camera aspect ratio
- [ ] Call `camera.updateProjectionMatrix()`
- [ ] Update renderer size

**Acceptance Criteria:**
- Resize handler is defined
- Camera updates correctly
- Renderer resizes properly

#### Task 5.2: Add Event Listener
- [ ] Add resize event listener
- [ ] Store reference for cleanup

**Acceptance Criteria:**
- Event listener is attached
- Resize works correctly

**Code Reference:**
```javascript
function handleResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', handleResize);
```

---

### Phase 6: Cleanup
**Estimated Time:** 20 minutes

#### Task 6.1: Implement Cleanup Function
- [ ] Remove particles from scene
- [ ] Dispose geometry
- [ ] Dispose material
- [ ] Dispose renderer
- [ ] Dispose controls
- [ ] Remove renderer DOM element
- [ ] Remove resize event listener

**Acceptance Criteria:**
- All resources are disposed
- DOM elements are removed
- Event listeners are cleaned up
- No memory leaks

**Code Reference:**
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

---

### Phase 7: Optimization and Polish
**Estimated Time:** 20 minutes

#### Task 7.1: Performance Testing
- [ ] Test with 1000 particles
- [ ] Test with 5000 particles
- [ ] Test with 10000 particles
- [ ] Verify 60 FPS maintained
- [ ] Adjust PARTICLE_COUNT if needed

**Acceptance Criteria:**
- Smooth performance at target particle count
- No frame drops
- Efficient memory usage

#### Task 7.2: Add Comments
- [ ] Add section headers
- [ ] Explain BufferGeometry usage
- [ ] Document wave calculation
- [ ] Explain performance optimizations

**Acceptance Criteria:**
- Code is well-commented
- Concepts are explained
- Easy to understand

#### Task 7.3: Add Accessibility
- [ ] Add ARIA label to div
- [ ] Add screen reader text
- [ ] Document controls usage

**Acceptance Criteria:**
- Accessible to screen readers
- Proper ARIA attributes

---

### Phase 8: Optional Enhancements
**Estimated Time:** 30 minutes (optional)

#### Task 8.1: Add Color Variation
- [ ] Create colors Float32Array
- [ ] Generate random or gradient colors
- [ ] Add color attribute to geometry
- [ ] Enable vertexColors on material

**Acceptance Criteria:**
- Particles have varied colors
- Colors look visually appealing

**Code Reference:**
```javascript
const colors = new Float32Array(PARTICLE_COUNT * 3);

for (let i = 0; i < PARTICLE_COUNT; i++) {
  const i3 = i * 3;
  colors[i3] = Math.random();     // R
  colors[i3 + 1] = Math.random(); // G
  colors[i3 + 2] = Math.random(); // B
}

geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
material.vertexColors = true;
```

#### Task 8.2: Add Additive Blending
- [ ] Set material blending to AdditiveBlending
- [ ] Adjust opacity if needed
- [ ] Test visual effect

**Acceptance Criteria:**
- Particles have glowing effect
- Overlapping particles blend nicely

**Code Reference:**
```javascript
material.blending = THREE.AdditiveBlending;
```

---

## Task Summary

| Phase | Tasks | Estimated Time |
|-------|-------|----------------|
| 1. Component Setup | 2 | 15 min |
| 2. Scene Setup | 2 | 20 min |
| 3. Particle System | 3 | 30 min |
| 4. Animation | 3 | 30 min |
| 5. Responsive Design | 2 | 15 min |
| 6. Cleanup | 1 | 20 min |
| 7. Optimization | 3 | 20 min |
| 8. Optional Enhancements | 2 | 30 min (optional) |
| **Total** | **18** | **2.5-3 hours** |

## Dependencies

- React 18+
- Three.js (latest)
- OrbitControls from three/examples/jsm
- Vite (for development)

## Testing Checklist

- [ ] Particles render correctly
- [ ] Wave animation is smooth
- [ ] OrbitControls work properly
- [ ] Maintains 60 FPS with 1000 particles
- [ ] Window resize works correctly
- [ ] Component unmounts cleanly
- [ ] No console errors or warnings
- [ ] No memory leaks
- [ ] Accessible to screen readers

## Performance Benchmarks

| Particle Count | Expected FPS | Memory Usage |
|----------------|--------------|--------------|
| 1,000 | 60 | ~50MB |
| 5,000 | 60 | ~75MB |
| 10,000 | 50-60 | ~100MB |

## Integration Steps

1. Create the component following tasks above
2. Import in `App.jsx`
3. Add to component tree
4. Test in development
5. Build for production
6. Verify in production build

## Success Criteria

✅ All core tasks completed
✅ Performance targets met
✅ Code follows template patterns
✅ Well-documented and commented
✅ Accessible and optimized
✅ Visually appealing
✅ Ready for users to learn from

## Next Steps After Completion

1. Document in main README
2. Create comparison with RotatingCube example
3. Add navigation between examples
4. Create tutorial explaining BufferGeometry
5. Add to template showcase
6. Consider additional particle patterns
