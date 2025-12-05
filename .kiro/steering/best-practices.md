---
inclusion: always
---

# Three.js Best Practices and Optimization

This document outlines performance optimization techniques, common pitfalls, and best practices for Three.js development in this template.

## Performance Optimization

### 1. Geometry and Material Reuse

**❌ Bad - Creates new geometry/material for each object:**
```javascript
for (let i = 0; i < 100; i++) {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
}
```

**✅ Good - Reuses geometry and material:**
```javascript
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

for (let i = 0; i < 100; i++) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(i, 0, 0);
  scene.add(mesh);
}
```

**✅ Best - Uses InstancedMesh for many identical objects:**
```javascript
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const instancedMesh = new THREE.InstancedMesh(geometry, material, 100);

const matrix = new THREE.Matrix4();
for (let i = 0; i < 100; i++) {
  matrix.setPosition(i, 0, 0);
  instancedMesh.setMatrixAt(i, matrix);
}
instancedMesh.instanceMatrix.needsUpdate = true;
scene.add(instancedMesh);
```

### 2. Proper Resource Disposal

**❌ Bad - Memory leak:**
```javascript
useEffect(() => {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  
  // No cleanup!
}, []);
```

**✅ Good - Proper cleanup:**
```javascript
useEffect(() => {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  
  return () => {
    scene.remove(mesh);
    geometry.dispose();
    material.dispose();
  };
}, []);
```

### 3. Texture Optimization

**Best Practices:**
- Use power-of-two dimensions (256, 512, 1024, 2048)
- Compress textures (use JPG for photos, PNG for transparency)
- Use texture atlases to combine multiple textures
- Set appropriate minFilter and magFilter

```javascript
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/texture.jpg');

// Optimize texture settings
texture.minFilter = THREE.LinearMipmapLinearFilter;
texture.magFilter = THREE.LinearFilter;
texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

// For pixel art or low-res textures
texture.minFilter = THREE.NearestFilter;
texture.magFilter = THREE.NearestFilter;
```

### 4. Geometry Complexity

**Use appropriate detail levels:**
```javascript
// ❌ Too many segments for a simple sphere
const sphere = new THREE.SphereGeometry(1, 64, 64); // 4096 triangles

// ✅ Sufficient detail for most cases
const sphere = new THREE.SphereGeometry(1, 32, 32); // 1024 triangles

// ✅ Low detail for distant objects
const sphere = new THREE.SphereGeometry(1, 16, 16); // 256 triangles
```

**Use Level of Detail (LOD):**
```javascript
const lod = new THREE.LOD();

// High detail (close)
const highDetail = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  material
);
lod.addLevel(highDetail, 0);

// Medium detail
const mediumDetail = new THREE.Mesh(
  new THREE.SphereGeometry(1, 16, 16),
  material
);
lod.addLevel(mediumDetail, 50);

// Low detail (far)
const lowDetail = new THREE.Mesh(
  new THREE.SphereGeometry(1, 8, 8),
  material
);
lod.addLevel(lowDetail, 100);

scene.add(lod);
```

### 5. Lighting Optimization

**Limit number of lights:**
```javascript
// ❌ Too many lights (expensive)
for (let i = 0; i < 20; i++) {
  const light = new THREE.PointLight(0xffffff, 1, 100);
  scene.add(light);
}

// ✅ Use 2-3 lights strategically
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 10, 5);
scene.add(ambientLight, directionalLight);
```

**Use baked lighting when possible:**
- Pre-render lighting into textures
- Use lightmaps for static scenes
- Combine with ambient occlusion maps

### 6. Render Optimization

**Set appropriate pixel ratio:**
```javascript
// ❌ May render at higher resolution than needed
renderer.setPixelRatio(window.devicePixelRatio);

// ✅ Cap at 2 for performance
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
```

**Use frustum culling (enabled by default):**
```javascript
// Objects outside camera view are automatically not rendered
mesh.frustumCulled = true; // default
```

**Disable auto-clear for layered rendering:**
```javascript
renderer.autoClear = false;
renderer.clear();
renderer.render(scene1, camera);
renderer.clearDepth();
renderer.render(scene2, camera);
```

## Common Pitfalls

### 1. Camera Position Issues

**❌ Camera inside or too close to objects:**
```javascript
camera.position.set(0, 0, 0); // Inside the scene!
```

**✅ Position camera with good view:**
```javascript
camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);
```

### 2. Missing Lights

**❌ Using materials that need lights without adding lights:**
```javascript
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
// Scene is black because no lights!
```

**✅ Add lights or use MeshBasicMaterial:**
```javascript
// Option 1: Add lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Option 2: Use material that doesn't need lights
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
```

### 3. Forgetting to Add Objects to Scene

**❌ Creating objects but not adding them:**
```javascript
const mesh = new THREE.Mesh(geometry, material);
// Nothing appears because mesh not added to scene!
```

**✅ Always add to scene:**
```javascript
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
```

### 4. Not Updating Camera Aspect on Resize

**❌ Distorted view on window resize:**
```javascript
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  // Camera aspect not updated!
});
```

**✅ Update camera aspect ratio:**
```javascript
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
```

### 5. Animation Loop Issues

**❌ Not calling render in animation loop:**
```javascript
function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.y += 0.01;
  // Forgot to render!
}
```

**✅ Always render each frame:**
```javascript
function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}
```

## React-Specific Best Practices

### 1. Use Refs for Three.js Objects

**❌ Bad - Objects recreated on every render:**
```javascript
function Scene() {
  const scene = new THREE.Scene(); // Created every render!
  return <div />;
}
```

**✅ Good - Objects persist across renders:**
```javascript
function Scene() {
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  
  useEffect(() => {
    if (!sceneRef.current) {
      sceneRef.current = new THREE.Scene();
      cameraRef.current = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    }
  }, []);
  
  return <div />;
}
```

### 2. Proper Cleanup in useEffect

**Always return cleanup function:**
```javascript
useEffect(() => {
  // Setup
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer();
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
  const mesh = new THREE.Mesh(geometry, material);
  
  // Cleanup
  return () => {
    scene.remove(mesh);
    geometry.dispose();
    material.dispose();
    renderer.dispose();
    mountRef.current?.removeChild(renderer.domElement);
  };
}, []);
```

### 3. Handle Window Events Properly

**Add and remove event listeners:**
```javascript
useEffect(() => {
  function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

## Code Organization

### 1. Separate Concerns

**Create reusable setup functions:**
```javascript
// src/utils/threeHelpers.js
export function createBasicLighting(scene) {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 10, 5);
  scene.add(ambientLight, directionalLight);
  return { ambientLight, directionalLight };
}

export function createCamera(aspect) {
  const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
  camera.position.set(5, 5, 5);
  camera.lookAt(0, 0, 0);
  return camera;
}
```

### 2. Use Constants for Magic Numbers

**❌ Bad - Magic numbers everywhere:**
```javascript
camera.position.set(5, 5, 5);
light.intensity = 0.8;
mesh.scale.set(2, 2, 2);
```

**✅ Good - Named constants:**
```javascript
const CAMERA_DISTANCE = 5;
const LIGHT_INTENSITY = 0.8;
const MESH_SCALE = 2;

camera.position.set(CAMERA_DISTANCE, CAMERA_DISTANCE, CAMERA_DISTANCE);
light.intensity = LIGHT_INTENSITY;
mesh.scale.set(MESH_SCALE, MESH_SCALE, MESH_SCALE);
```

### 3. Comment Complex Logic

**Add comments for non-obvious code:**
```javascript
// Convert mouse coordinates to normalized device coordinates (-1 to +1)
mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

// Use spherical coordinates for camera orbit
const theta = Date.now() * 0.001; // Horizontal angle
const phi = Math.PI / 3; // 60° vertical angle
const radius = 10;
camera.position.x = radius * Math.sin(phi) * Math.cos(theta);
camera.position.y = radius * Math.cos(phi);
camera.position.z = radius * Math.sin(phi) * Math.sin(theta);
```

## Debugging Tips

### 1. Use Helpers

```javascript
// Visualize axes (red=X, green=Y, blue=Z)
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Visualize grid
const gridHelper = new THREE.GridHelper(10, 10);
scene.add(gridHelper);

// Visualize camera frustum
const cameraHelper = new THREE.CameraHelper(camera);
scene.add(cameraHelper);

// Visualize directional light
const lightHelper = new THREE.DirectionalLightHelper(directionalLight);
scene.add(lightHelper);
```

### 2. Console Logging

```javascript
// Check what's in the scene
console.log('Scene children:', scene.children);

// Check camera position
console.log('Camera position:', camera.position);

// Check object properties
console.log('Mesh:', mesh);
console.log('Material:', mesh.material);
console.log('Geometry:', mesh.geometry);
```

### 3. Wireframe Mode

```javascript
// Toggle wireframe to see geometry structure
material.wireframe = true;
```

## Performance Monitoring

### Track FPS

```javascript
const stats = new Stats();
document.body.appendChild(stats.dom);

function animate() {
  requestAnimationFrame(animate);
  stats.begin();
  
  // Your rendering code
  renderer.render(scene, camera);
  
  stats.end();
}
```

### Monitor Draw Calls

```javascript
console.log('Render info:', renderer.info);
// Shows: geometries, textures, programs, calls, triangles, points, lines
```

## Security Considerations

### 1. Sanitize User Input

If loading models or textures from user input:
```javascript
// Validate file types
const allowedTypes = ['image/jpeg', 'image/png'];
if (!allowedTypes.includes(file.type)) {
  throw new Error('Invalid file type');
}

// Limit file size
const maxSize = 5 * 1024 * 1024; // 5MB
if (file.size > maxSize) {
  throw new Error('File too large');
}
```

### 2. Use CORS Properly

```javascript
const textureLoader = new THREE.TextureLoader();
textureLoader.crossOrigin = 'anonymous';
const texture = textureLoader.load('https://example.com/texture.jpg');
```

## Accessibility

### 1. Provide Alternative Content

```javascript
return (
  <div>
    <div ref={mountRef} aria-label="3D scene visualization" />
    <div className="sr-only">
      Interactive 3D scene showing a rotating cube
    </div>
  </div>
);
```

### 2. Keyboard Controls

```javascript
useEffect(() => {
  function handleKeyPress(event) {
    switch(event.key) {
      case 'ArrowUp':
        camera.position.y += 1;
        break;
      case 'ArrowDown':
        camera.position.y -= 1;
        break;
      // etc.
    }
  }
  
  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, []);
```

## Summary Checklist

Before deploying or sharing your Three.js scene:

- [ ] Geometries and materials are reused where possible
- [ ] All resources are properly disposed in cleanup
- [ ] Textures are optimized (power-of-two, compressed)
- [ ] Geometry detail is appropriate for use case
- [ ] Number of lights is limited (2-3 typically)
- [ ] Pixel ratio is capped at 2
- [ ] Camera aspect ratio updates on resize
- [ ] Animation loop calls renderer.render()
- [ ] Objects are added to scene
- [ ] Camera is positioned with good view
- [ ] Lights are added (if using materials that need them)
- [ ] Event listeners are cleaned up
- [ ] Code is commented and organized
- [ ] Performance is acceptable (60fps target)
- [ ] Accessibility considerations are addressed

Following these best practices will result in performant, maintainable, and professional Three.js applications.
