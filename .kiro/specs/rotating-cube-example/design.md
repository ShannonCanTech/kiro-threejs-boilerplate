# Rotating Cube Example - Design

## Architecture

### Component Structure
```
RotatingCube (React Component)
├── useEffect (Scene Setup)
│   ├── Scene Creation
│   ├── Camera Setup
│   ├── Renderer Configuration
│   ├── Geometry & Material
│   ├── Lighting
│   ├── Animation Loop
│   └── Cleanup Function
└── JSX (Mount Point)
```

### Data Flow
```
Component Mount
    ↓
Create Three.js Objects
    ↓
Add to Scene
    ↓
Start Animation Loop
    ↓
Render Each Frame
    ↓
Component Unmount
    ↓
Cleanup Resources
```

## Component Design

### RotatingCube.jsx

**Purpose:** Demonstrate basic Three.js scene with animated cube

**Props:** None (self-contained example)

**State:** None (Three.js objects stored in closure)

**Refs:**
- `mountRef` - DOM element to attach renderer

**Lifecycle:**
1. **Mount** - Create scene, camera, renderer, cube, lights
2. **Animation** - Rotate cube, render scene
3. **Unmount** - Dispose resources, remove DOM elements

## Scene Configuration

### Camera
```javascript
Type: PerspectiveCamera
FOV: 75 degrees
Aspect: window.innerWidth / window.innerHeight
Near: 0.1
Far: 1000
Position: (5, 5, 5)
LookAt: (0, 0, 0)
```

### Renderer
```javascript
Type: WebGLRenderer
Antialias: true
Size: window.innerWidth × window.innerHeight
PixelRatio: min(window.devicePixelRatio, 2)
```

### Cube
```javascript
Geometry: BoxGeometry(1, 1, 1)
Material: MeshStandardMaterial
Color: 0x00ff00 (green)
Position: (0, 0, 0)
```

### Lighting
```javascript
Ambient Light:
  - Color: 0xffffff
  - Intensity: 0.4

Directional Light:
  - Color: 0xffffff
  - Intensity: 0.8
  - Position: (5, 10, 5)
```

## Animation Logic

### Rotation Speed
```javascript
X-axis: 0.01 radians per frame
Y-axis: 0.01 radians per frame
```

### Animation Loop
```javascript
function animate() {
  requestAnimationFrame(animate);
  
  // Update rotation
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  
  // Render scene
  renderer.render(scene, camera);
}
```

## Responsive Design

### Window Resize Handler
```javascript
function handleResize() {
  // Update camera
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  
  // Update renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', handleResize);
```

## Resource Management

### Cleanup Checklist
- [ ] Remove cube from scene
- [ ] Dispose cube geometry
- [ ] Dispose cube material
- [ ] Dispose renderer
- [ ] Remove renderer DOM element
- [ ] Remove resize event listener

### Cleanup Implementation
```javascript
return () => {
  // Remove from scene
  scene.remove(cube);
  
  // Dispose resources
  geometry.dispose();
  material.dispose();
  renderer.dispose();
  
  // Remove DOM element
  if (mountRef.current) {
    mountRef.current.removeChild(renderer.domElement);
  }
  
  // Remove event listener
  window.removeEventListener('resize', handleResize);
};
```

## Code Organization

### File Structure
```javascript
// Imports
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Component
export default function RotatingCube() {
  // Refs
  const mountRef = useRef(null);
  
  // Effect
  useEffect(() => {
    // 1. Scene setup
    // 2. Camera setup
    // 3. Renderer setup
    // 4. Create cube
    // 5. Add lighting
    // 6. Animation loop
    // 7. Resize handler
    // 8. Cleanup
  }, []);
  
  // JSX
  return <div ref={mountRef} />;
}
```

### Comment Strategy
- Section headers for major blocks
- Inline comments for non-obvious code
- Explain Three.js-specific concepts
- Reference documentation where helpful

## Performance Considerations

### Optimization Techniques
1. **Single geometry/material** - Reused if multiple cubes needed
2. **Capped pixel ratio** - Prevent excessive resolution
3. **Proper disposal** - Prevent memory leaks
4. **Efficient animation** - No unnecessary calculations

### Performance Targets
- 60 FPS on modern hardware
- < 50MB memory usage
- < 100ms initial load time

## Accessibility

### ARIA Labels
```jsx
<div 
  ref={mountRef} 
  role="img"
  aria-label="3D rotating cube visualization"
/>
```

### Alternative Content
```jsx
<div className="sr-only">
  Interactive 3D scene showing a green cube rotating continuously
</div>
```

## Error Handling

### WebGL Support Check
```javascript
if (!renderer.capabilities.isWebGL2) {
  console.warn('WebGL 2 not supported, falling back to WebGL 1');
}
```

### Graceful Degradation
- Show error message if WebGL not available
- Provide static image fallback
- Log errors to console for debugging

## Testing Strategy

### Manual Testing
- [ ] Cube renders correctly
- [ ] Rotation is smooth
- [ ] Resize works properly
- [ ] No console errors
- [ ] Cleanup works on unmount

### Visual Testing
- [ ] Cube is centered
- [ ] Lighting looks good
- [ ] Colors are correct
- [ ] No flickering or artifacts

## Integration

### In App.jsx
```jsx
import RotatingCube from './examples/RotatingCube';

function App() {
  return (
    <div className="App">
      <RotatingCube />
    </div>
  );
}
```

### Standalone Usage
Component is self-contained and can be used anywhere in the React tree.

## Future Enhancements (Out of Scope)

- Add mouse interaction (OrbitControls)
- Change cube color on click
- Add texture to cube
- Multiple cubes
- Pause/play animation
- Speed controls

## References

- Template pattern: `.kiro/steering/threejs-expert.md`
- Best practices: `.kiro/steering/best-practices.md`
- Three.js docs: `#[[file:.kiro/reference/threejs-api/llms-core-1.txt]]`
