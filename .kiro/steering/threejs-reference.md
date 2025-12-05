---
inclusion: manual
contextKey: ThreeJS
---

# Three.js Reference Documentation

This is a comprehensive reference for working with Three.js in this template. Invoke with `#ThreeJS` in chat.

## Core Concepts

### Scene Graph
- **Scene**: Container for all 3D objects, lights, and cameras
- **Camera**: Defines the viewpoint (PerspectiveCamera for realistic, OrthographicCamera for 2D-like)
- **Renderer**: Draws the scene from camera's perspective

### Basic Setup Pattern
```javascript
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
```

## Camera

### PerspectiveCamera
```javascript
// PerspectiveCamera(fov, aspect, near, far)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Position
camera.position.set(x, y, z);
camera.position.z = 5;

// Rotation (in radians)
camera.rotation.x = Math.PI / 4; // 45 degrees
camera.rotation.y = Math.PI / 2; // 90 degrees

// Look at a point
camera.lookAt(0, 0, 0); // Look at origin
camera.lookAt(mesh.position); // Look at object
```

### Changing Camera Angle
```javascript
// Method 1: Direct rotation
camera.rotation.x = Math.PI / 6; // Tilt down 30 degrees
camera.rotation.y = Math.PI / 4; // Pan 45 degrees

// Method 2: Position + lookAt (recommended)
camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0); // Point camera at scene center

// Method 3: Using spherical coordinates for orbit
const radius = 10;
const theta = Math.PI / 4; // horizontal angle
const phi = Math.PI / 3;   // vertical angle
camera.position.x = radius * Math.sin(phi) * Math.cos(theta);
camera.position.y = radius * Math.cos(phi);
camera.position.z = radius * Math.sin(phi) * Math.sin(theta);
camera.lookAt(0, 0, 0);
```

### OrbitControls (for interactive camera)
```javascript
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth movement
controls.dampingFactor = 0.05;
controls.minDistance = 2;
controls.maxDistance = 20;
controls.maxPolarAngle = Math.PI / 2; // Prevent going below ground

// In animation loop
controls.update();
```

## Geometries

### Built-in Geometries
```javascript
// Box
new THREE.BoxGeometry(width, height, depth);

// Sphere
new THREE.SphereGeometry(radius, widthSegments, heightSegments);

// Plane
new THREE.PlaneGeometry(width, height);

// Cylinder
new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments);

// Torus
new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments);

// Custom geometry
const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array([...]);
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
```

## Materials

### Common Materials
```javascript
// Basic (unaffected by lights)
new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Standard (physically-based, realistic)
new THREE.MeshStandardMaterial({
  color: 0x00ff00,
  metalness: 0.5,
  roughness: 0.5
});

// Phong (shiny, specular highlights)
new THREE.MeshPhongMaterial({
  color: 0x0000ff,
  shininess: 100
});

// Lambert (matte, diffuse)
new THREE.MeshLambertMaterial({ color: 0xffff00 });

// With texture
const texture = new THREE.TextureLoader().load('texture.jpg');
new THREE.MeshStandardMaterial({ map: texture });
```

### Material Properties
```javascript
material.transparent = true;
material.opacity = 0.5;
material.wireframe = true;
material.side = THREE.DoubleSide; // Render both sides
material.flatShading = true; // Faceted look
```

## Lighting

### Light Types
```javascript
// Ambient (illuminates everything equally)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Directional (like sunlight, parallel rays)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);

// Point (like a light bulb, radiates in all directions)
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(0, 5, 0);
scene.add(pointLight);

// Spot (cone of light)
const spotLight = new THREE.SpotLight(0xffffff, 1);
spotLight.position.set(10, 10, 10);
spotLight.angle = Math.PI / 6;
spotLight.penumbra = 0.1;
scene.add(spotLight);

// Hemisphere (sky and ground colors)
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
scene.add(hemiLight);
```

## Mesh Operations

### Creating and Adding Objects
```javascript
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);

// Position
mesh.position.set(x, y, z);
mesh.position.x = 2;

// Rotation (radians)
mesh.rotation.x = Math.PI / 4;
mesh.rotation.y = Math.PI / 2;

// Scale
mesh.scale.set(2, 2, 2);
mesh.scale.x = 0.5;

// Add to scene
scene.add(mesh);
```

### Groups
```javascript
const group = new THREE.Group();
group.add(mesh1);
group.add(mesh2);
scene.add(group);

// Transform entire group
group.rotation.y = Math.PI / 4;
```

## Animation

### Animation Loop Pattern
```javascript
function animate() {
  requestAnimationFrame(animate);
  
  // Update objects
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  
  // Update controls if using OrbitControls
  controls.update();
  
  // Render
  renderer.render(scene, camera);
}
animate();
```

### Using Clock for Time-based Animation
```javascript
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  
  const elapsedTime = clock.getElapsedTime();
  
  // Smooth sine wave motion
  mesh.position.y = Math.sin(elapsedTime) * 2;
  mesh.rotation.y = elapsedTime * 0.5;
  
  renderer.render(scene, camera);
}
```

## Textures

### Loading Textures
```javascript
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('path/to/texture.jpg');

// With callbacks
textureLoader.load(
  'texture.jpg',
  (texture) => { console.log('Loaded'); },
  (progress) => { console.log('Loading...'); },
  (error) => { console.error('Error'); }
);

// Texture properties
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(4, 4);
```

## Raycasting (Mouse Interaction)

### Basic Raycasting
```javascript
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseClick(event) {
  // Convert mouse position to normalized device coordinates
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);
  
  if (intersects.length > 0) {
    const object = intersects[0].object;
    object.material.color.set(0xff0000);
  }
}

window.addEventListener('click', onMouseClick);
```

## Performance Optimization

### Best Practices
```javascript
// Reuse geometries and materials
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
for (let i = 0; i < 100; i++) {
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
}

// Dispose when removing objects
scene.remove(mesh);
mesh.geometry.dispose();
mesh.material.dispose();

// Use InstancedMesh for many identical objects
const count = 1000;
const instancedMesh = new THREE.InstancedMesh(geometry, material, count);
scene.add(instancedMesh);

// Frustum culling (automatic, but be aware)
mesh.frustumCulled = true;

// Level of Detail (LOD)
const lod = new THREE.LOD();
lod.addLevel(highDetailMesh, 0);
lod.addLevel(mediumDetailMesh, 50);
lod.addLevel(lowDetailMesh, 100);
```

## Common Patterns in This Template

### React Component Structure
```javascript
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeScene() {
  const mountRef = useRef(null);
  
  useEffect(() => {
    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    mountRef.current.appendChild(renderer.domElement);
    
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
    
    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);
  
  return <div ref={mountRef} />;
}
```

## Troubleshooting

### Black Screen
- Check camera position (not inside objects)
- Ensure lights are added (except with MeshBasicMaterial)
- Verify renderer is rendering: `renderer.render(scene, camera)`

### Objects Not Visible
- Check if added to scene: `scene.add(mesh)`
- Verify camera is looking at scene: `camera.lookAt(0, 0, 0)`
- Check material requires lights (use MeshBasicMaterial to test)

### Performance Issues
- Reduce polygon count
- Use InstancedMesh for repeated objects
- Limit number of lights
- Use texture atlases
- Enable frustum culling
