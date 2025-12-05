# Rotating Cube Example - Implementation Tasks

## Task Breakdown

### Phase 1: Component Setup
**Estimated Time:** 15 minutes

#### Task 1.1: Create Component File
- [ ] Create `src/examples/RotatingCube.jsx`
- [ ] Add imports (React, Three.js)
- [ ] Create functional component structure
- [ ] Export component

**Acceptance Criteria:**
- File exists in correct location
- Basic component structure in place
- No syntax errors

#### Task 1.2: Add Ref and Effect Hook
- [ ] Create `mountRef` using `useRef(null)`
- [ ] Add `useEffect` hook with empty dependency array
- [ ] Add JSX with div using mountRef
- [ ] Add basic styling (full viewport)

**Acceptance Criteria:**
- Ref is properly created
- Effect runs on mount
- Div renders in DOM

---

### Phase 2: Three.js Scene Setup
**Estimated Time:** 20 minutes

#### Task 2.1: Create Scene and Camera
- [ ] Create `THREE.Scene()`
- [ ] Create `THREE.PerspectiveCamera(75, aspect, 0.1, 1000)`
- [ ] Set camera position to (5, 5, 5)
- [ ] Point camera at origin with `lookAt(0, 0, 0)`

**Acceptance Criteria:**
- Scene is created
- Camera is configured correctly
- Camera is positioned for good view

**Code Reference:**
```javascript
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);
```

#### Task 2.2: Create and Configure Renderer
- [ ] Create `THREE.WebGLRenderer({ antialias: true })`
- [ ] Set size to window dimensions
- [ ] Set pixel ratio (capped at 2)
- [ ] Append renderer DOM element to mountRef

**Acceptance Criteria:**
- Renderer is created with antialiasing
- Size matches window
- Canvas appears in DOM

**Code Reference:**
```javascript
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
mountRef.current.appendChild(renderer.domElement);
```

---

### Phase 3: Create Cube
**Estimated Time:** 15 minutes

#### Task 3.1: Create Geometry and Material
- [ ] Create `THREE.BoxGeometry(1, 1, 1)`
- [ ] Create `THREE.MeshStandardMaterial({ color: 0x00ff00 })`
- [ ] Store in variables for cleanup

**Acceptance Criteria:**
- Geometry is created
- Material is created with green color
- Variables are accessible for disposal

#### Task 3.2: Create and Add Mesh
- [ ] Create `THREE.Mesh(geometry, material)`
- [ ] Add mesh to scene with `scene.add(cube)`

**Acceptance Criteria:**
- Mesh is created
- Mesh is added to scene
- Cube is visible (after lighting added)

**Code Reference:**
```javascript
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```

---

### Phase 4: Add Lighting
**Estimated Time:** 10 minutes

#### Task 4.1: Add Ambient Light
- [ ] Create `THREE.AmbientLight(0xffffff, 0.4)`
- [ ] Add to scene

**Acceptance Criteria:**
- Ambient light is created
- Light is added to scene
- Provides base illumination

#### Task 4.2: Add Directional Light
- [ ] Create `THREE.DirectionalLight(0xffffff, 0.8)`
- [ ] Set position to (5, 10, 5)
- [ ] Add to scene

**Acceptance Criteria:**
- Directional light is created
- Light is positioned correctly
- Cube shows depth and shading

**Code Reference:**
```javascript
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);
```

---

### Phase 5: Animation Loop
**Estimated Time:** 15 minutes

#### Task 5.1: Create Animation Function
- [ ] Define `animate` function
- [ ] Call `requestAnimationFrame(animate)` inside
- [ ] Update cube rotation (x += 0.01, y += 0.01)
- [ ] Render scene with `renderer.render(scene, camera)`

**Acceptance Criteria:**
- Animation function is defined
- Rotation updates each frame
- Scene renders continuously

#### Task 5.2: Start Animation
- [ ] Call `animate()` to start the loop

**Acceptance Criteria:**
- Animation starts on mount
- Cube rotates smoothly
- No performance issues

**Code Reference:**
```javascript
function animate() {
  requestAnimationFrame(animate);
  
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  
  renderer.render(scene, camera);
}
animate();
```

---

### Phase 6: Responsive Design
**Estimated Time:** 15 minutes

#### Task 6.1: Create Resize Handler
- [ ] Define `handleResize` function
- [ ] Update camera aspect ratio
- [ ] Call `camera.updateProjectionMatrix()`
- [ ] Update renderer size

**Acceptance Criteria:**
- Resize handler is defined
- Camera updates correctly
- Renderer resizes properly

#### Task 6.2: Add Event Listener
- [ ] Add resize event listener
- [ ] Store reference for cleanup

**Acceptance Criteria:**
- Event listener is attached
- Resize works correctly
- No memory leaks

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

### Phase 7: Cleanup
**Estimated Time:** 15 minutes

#### Task 7.1: Implement Cleanup Function
- [ ] Remove cube from scene
- [ ] Dispose geometry
- [ ] Dispose material
- [ ] Dispose renderer
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
  scene.remove(cube);
  geometry.dispose();
  material.dispose();
  renderer.dispose();
  
  if (mountRef.current) {
    mountRef.current.removeChild(renderer.domElement);
  }
  
  window.removeEventListener('resize', handleResize);
};
```

---

### Phase 8: Documentation and Polish
**Estimated Time:** 15 minutes

#### Task 8.1: Add Comments
- [ ] Add section headers
- [ ] Explain Three.js concepts
- [ ] Document cleanup process
- [ ] Add usage example in comments

**Acceptance Criteria:**
- Code is well-commented
- Concepts are explained
- Easy for beginners to understand

#### Task 8.2: Add Accessibility
- [ ] Add ARIA label to div
- [ ] Add screen reader text
- [ ] Test with keyboard navigation

**Acceptance Criteria:**
- Accessible to screen readers
- Proper ARIA attributes
- Follows accessibility guidelines

#### Task 8.3: Final Testing
- [ ] Test in multiple browsers
- [ ] Test resize functionality
- [ ] Test component unmount
- [ ] Check console for errors
- [ ] Verify 60 FPS performance

**Acceptance Criteria:**
- Works in all target browsers
- No console errors
- Smooth performance
- Proper cleanup

---

## Task Summary

| Phase | Tasks | Estimated Time |
|-------|-------|----------------|
| 1. Component Setup | 2 | 15 min |
| 2. Scene Setup | 2 | 20 min |
| 3. Create Cube | 2 | 15 min |
| 4. Add Lighting | 2 | 10 min |
| 5. Animation Loop | 2 | 15 min |
| 6. Responsive Design | 2 | 15 min |
| 7. Cleanup | 1 | 15 min |
| 8. Documentation | 3 | 15 min |
| **Total** | **16** | **2 hours** |

## Dependencies

- React 18+
- Three.js (latest)
- Vite (for development)

## Testing Checklist

- [ ] Cube renders and is visible
- [ ] Cube rotates smoothly at 60 FPS
- [ ] Window resize works correctly
- [ ] Component unmounts cleanly
- [ ] No console errors or warnings
- [ ] No memory leaks
- [ ] Accessible to screen readers
- [ ] Works in Chrome, Firefox, Safari, Edge

## Integration Steps

1. Create the component following tasks above
2. Import in `App.jsx`
3. Add to component tree
4. Test in development
5. Build for production
6. Verify in production build

## Success Criteria

✅ All tasks completed
✅ All tests passing
✅ Code follows template patterns
✅ Well-documented and commented
✅ Accessible and performant
✅ Ready for users to learn from

## Next Steps After Completion

1. Create second example (ParticleSystem)
2. Add navigation between examples
3. Document in main README
4. Create video tutorial (optional)
5. Add to template showcase
