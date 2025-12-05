# Getting Started with Three.js Kiro Template

Welcome! This guide will help you get up and running quickly.

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at http://localhost:3000

## What You'll See

The template includes three example scenes you can switch between:

1. **Basic Scene** - A rotating sphere (minimal setup)
2. **Rotating Cube** - An animated cube (beginner example)
3. **Particle System** - 1000 particles with wave animation (intermediate)

Use the buttons in the top-left to switch between scenes.

## Running Individual Scenes

If you want to run a single scene without the navigation UI, you have two options:

### Option 1: Change the Import in main.jsx (Recommended)

Edit `src/main.jsx` and change the import:

```javascript
// Default - all scenes with navigation
import App from './App'

// Run only the basic scene
import App from './App-BasicScene'

// Run only the rotating cube
import App from './App-RotatingCube'

// Run only the particle system
import App from './App-ParticleSystem'
```

### Option 2: Modify App.jsx

In `src/App.jsx`, you can:

1. **Change the default scene** - Modify line 7:
   ```javascript
   const [activeScene, setActiveScene] = useState('cube') // or 'particles'
   ```

2. **Hide the navigation** - Comment out the nav section (lines 19-29)

3. **Hide the info panel** - Comment out the info-panel div (lines 31-39)

### Available App Variants

- `App.jsx` - All scenes with navigation (default)
- `App-BasicScene.jsx` - Basic scene only
- `App-RotatingCube.jsx` - Rotating cube only
- `App-ParticleSystem.jsx` - Particle system only

Each variant is a complete, standalone app that you can use as a starting point.

## Your First Steps

### 1. Explore the Examples

Open these files to see how they work:
- `src/Scene.jsx` - Basic scene
- `src/examples/RotatingCube.jsx` - Beginner example
- `src/examples/ParticleSystem.jsx` - Intermediate example

### 2. Try the KayKit Assets

The template includes 10 asset packs with 100+ models. Try loading one:

```javascript
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const loader = new GLTFLoader()
loader.load(
  '/assets/models/characters/KayKit_Adventurers_2.0_FREE/Characters/gltf/character_knight.gltf',
  (gltf) => {
    scene.add(gltf.scene)
  }
)
```

See `public/assets/KAYKIT-ASSETS.md` for the complete asset list.

### 3. Use Kiro for Help

If you're using Kiro, try these prompts:

```
"#ThreeJS How do I add OrbitControls?"
"Create a new scene with a bouncing ball"
"Load a KayKit dungeon asset"
"Optimize this scene for performance"
```

### 4. Create Your Own Scene

1. Create a new file in `src/examples/`
2. Copy the pattern from `RotatingCube.jsx`
3. Modify to create your scene
4. Import in `App.jsx`

## Common Tasks

### Add OrbitControls

```javascript
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

// In animation loop
controls.update()

// In cleanup
controls.dispose()
```

### Load a 3D Model

```javascript
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const loader = new GLTFLoader()
loader.load('/path/to/model.gltf', (gltf) => {
  scene.add(gltf.scene)
})
```

### Add Textures

```javascript
const textureLoader = new THREE.TextureLoader()
const texture = textureLoader.load('/path/to/texture.jpg')

const material = new THREE.MeshStandardMaterial({ map: texture })
```

### Handle Mouse Clicks

```javascript
const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()

function onMouseClick(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
  
  raycaster.setFromCamera(mouse, camera)
  const intersects = raycaster.intersectObjects(scene.children)
  
  if (intersects.length > 0) {
    console.log('Clicked:', intersects[0].object)
  }
}

window.addEventListener('click', onMouseClick)
```

## Project Structure

```
src/
├── examples/           # Your scenes go here
├── utils/              # Helper functions
├── App.jsx             # Main app with navigation
└── Scene.jsx           # Basic scene template

public/assets/
├── models/             # 3D models (KayKit Collection)
├── textures/           # Texture files
└── audio/              # Sound files

.kiro/
├── steering/           # AI guidance documents
├── specs/              # Feature specifications
└── hooks/              # Automated workflows
```

## Learning Resources

### In This Template
- `README.md` - Overview and features
- `PROJECT-STRUCTURE.md` - Detailed structure
- `public/assets/README.md` - Asset usage
- `.kiro/specs/` - Step-by-step guides

### External
- Three.js Docs: https://threejs.org/docs/
- Three.js Examples: https://threejs.org/examples/
- KayKit Assets: https://kaylousberg.itch.io/

## Troubleshooting

### Black Screen
- Check if lights are added (MeshStandardMaterial needs lights)
- Verify camera position (not inside objects)
- Check console for errors

### Model Not Loading
- Verify file path is correct
- Check if model is added to scene
- Look for errors in console

### Performance Issues
- Reduce polygon count
- Use fewer lights
- Optimize texture sizes
- Check FPS in browser dev tools

## Next Steps

1. **Beginner:** Follow the rotating cube spec in `.kiro/specs/rotating-cube-example/`
2. **Intermediate:** Build the particle system from `.kiro/specs/particle-system-example/`
3. **Advanced:** Create a dungeon scene with `.kiro/specs/kaykit-dungeon-scene/`

## Get Help

- **Kiro:** Ask questions directly in Kiro
- **Documentation:** Check the docs in `.kiro/` and `public/assets/`
- **Three.js Forum:** https://discourse.threejs.org/
- **GitHub Issues:** Report bugs or request features

## Quick Reference

### Scene Setup Pattern
```javascript
useEffect(() => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  
  // Add objects, lights, etc.
  
  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }
  animate()
  
  return () => {
    // Cleanup
  }
}, [])
```

### Cleanup Pattern
```javascript
return () => {
  scene.remove(mesh)
  geometry.dispose()
  material.dispose()
  renderer.dispose()
  mountRef.current?.removeChild(renderer.domElement)
  window.removeEventListener('resize', handleResize)
}
```

Happy coding! 🚀
