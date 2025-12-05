# KayKit Dungeon Scene - Design

## Architecture

### Component Structure
```
DungeonScene (React Component)
├── useEffect (Scene Setup)
│   ├── Scene Creation
│   ├── Camera Setup
│   ├── Renderer Configuration
│   ├── Lighting Setup
│   ├── OrbitControls Setup
│   ├── Asset Loading System
│   │   ├── GLTFLoader
│   │   ├── Loading Manager
│   │   ├── Progress Tracking
│   │   └── Error Handling
│   ├── Scene Composition
│   │   ├── Floor Group
│   │   ├── Walls Group
│   │   ├── Furniture Group
│   │   └── Props Group
│   ├── Animation Loop
│   └── Cleanup Function
└── JSX (Mount Point + Loading UI)
```

### Data Flow
```
Component Mount
    ↓
Initialize Loading Manager
    ↓
Start Loading Assets
    ↓
Track Progress (0-100%)
    ↓
Assets Loaded
    ↓
Compose Scene
    ├── Place Floor Tiles
    ├── Build Walls
    ├── Add Furniture
    └── Place Props
    ↓
Start Animation Loop
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
Position: (8, 6, 8)
LookAt: (0, 0, 0)
```

### Renderer
```javascript
Type: WebGLRenderer
Antialias: true
Size: window.innerWidth × window.innerHeight
PixelRatio: min(window.devicePixelRatio, 2)
ShadowMap: Enabled (optional)
```

### OrbitControls
```javascript
enableDamping: true
dampingFactor: 0.05
minDistance: 5
maxDistance: 20
maxPolarAngle: Math.PI / 2.5 (prevent going below floor)
```

## Asset Loading System

### Loading Manager
```javascript
const loadingManager = new THREE.LoadingManager();

loadingManager.onStart = (url, loaded, total) => {
  console.log(`Started loading: ${url}`);
};

loadingManager.onProgress = (url, loaded, total) => {
  const progress = (loaded / total) * 100;
  setLoadingProgress(progress);
};

loadingManager.onLoad = () => {
  console.log('All assets loaded');
  setIsLoading(false);
};

loadingManager.onError = (url) => {
  console.error(`Error loading: ${url}`);
};
```

### GLTF Loader
```javascript
const loader = new GLTFLoader(loadingManager);
const basePath = '/assets/models/objects/KayKit_DungeonRemastered_1.1_FREE/Assets/gltf/';
```

### Asset Loading Pattern
```javascript
function loadAsset(filename) {
  return new Promise((resolve, reject) => {
    loader.load(
      basePath + filename,
      (gltf) => resolve(gltf.scene),
      undefined,
      (error) => reject(error)
    );
  });
}

// Usage
const floor = await loadAsset('floor_tile_large.gltf');
```

## Scene Composition

### Floor Layout (3x3 Grid)
```javascript
const TILE_SIZE = 2;
const GRID_SIZE = 3;

for (let x = 0; x < GRID_SIZE; x++) {
  for (let z = 0; z < GRID_SIZE; z++) {
    const tile = floor.clone();
    tile.position.set(
      (x - 1) * TILE_SIZE,
      0,
      (z - 1) * TILE_SIZE
    );
    floorGroup.add(tile);
  }
}
```

### Wall Placement
```javascript
// Corners
const corners = [
  { pos: [-3, 0, -3], rot: 0 },
  { pos: [3, 0, -3], rot: Math.PI / 2 },
  { pos: [3, 0, 3], rot: Math.PI },
  { pos: [-3, 0, 3], rot: -Math.PI / 2 }
];

corners.forEach(({ pos, rot }) => {
  const corner = wallCorner.clone();
  corner.position.set(...pos);
  corner.rotation.y = rot;
  wallsGroup.add(corner);
});

// Straight walls
const walls = [
  { pos: [-1, 0, -3], rot: 0 },
  { pos: [1, 0, -3], rot: 0 },
  // ... more walls
];
```

### Furniture Placement
```javascript
// Table in center
table.position.set(0, 0, 0);
furnitureGroup.add(table);

// Chairs around table
const chair1 = chair.clone();
chair1.position.set(-1, 0, 0);
chair1.rotation.y = Math.PI / 2;
furnitureGroup.add(chair1);

const chair2 = chair.clone();
chair2.position.set(1, 0, 0);
chair2.rotation.y = -Math.PI / 2;
furnitureGroup.add(chair2);
```

### Props Placement
```javascript
// Barrels in corners
barrel.position.set(-2, 0, -2);
propsGroup.add(barrel);

// Crate near wall
crate.position.set(2, 0, -2);
propsGroup.add(crate);

// Candles on table
candle.position.set(0, 1, 0);
propsGroup.add(candle);
```

## Lighting Design

### Basic Lighting
```javascript
// Ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

// Directional light (main)
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);
```

### Enhanced Lighting (Optional)
```javascript
// Point lights for candles
const candleLight = new THREE.PointLight(0xffaa00, 0.5, 5);
candleLight.position.set(0, 1.5, 0);
scene.add(candleLight);

// Shadows (if enabled)
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;
```

## Scene Organization

### Group Hierarchy
```javascript
const scene = new THREE.Scene();
├── floorGroup (all floor tiles)
├── wallsGroup (all walls and corners)
├── furnitureGroup (tables, chairs)
├── propsGroup (barrels, crates, decorations)
├── lightsGroup (point lights for candles)
└── camera, controls
```

### Benefits of Grouping
- Easy to show/hide entire categories
- Simplified transformations
- Better organization
- Easier debugging

## Performance Optimization

### Asset Reuse
```javascript
// Load once, clone many times
const floorTile = await loadAsset('floor_tile_large.gltf');

for (let i = 0; i < 9; i++) {
  const tile = floorTile.clone();
  // Position and add to scene
}
```

### Efficient Loading
```javascript
// Load all unique assets first
const assets = await Promise.all([
  loadAsset('floor_tile_large.gltf'),
  loadAsset('wall_corner.gltf'),
  loadAsset('wall.gltf'),
  loadAsset('table_small.gltf'),
  // ... etc
]);

// Then compose scene using clones
```

### Memory Management
```javascript
// Store references for cleanup
const loadedModels = [];

function addModel(model) {
  loadedModels.push(model);
  scene.add(model);
}

// Cleanup
loadedModels.forEach(model => {
  model.traverse(child => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) child.material.dispose();
  });
});
```

## Loading UI

### Progress Display
```jsx
{isLoading && (
  <div className="loading-overlay">
    <div className="loading-bar">
      <div 
        className="loading-progress" 
        style={{ width: `${loadingProgress}%` }}
      />
    </div>
    <p>Loading dungeon... {Math.round(loadingProgress)}%</p>
  </div>
)}
```

### State Management
```javascript
const [isLoading, setIsLoading] = useState(true);
const [loadingProgress, setLoadingProgress] = useState(0);
```

## Responsive Design

### Window Resize
```javascript
function handleResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', handleResize);
```

## Resource Cleanup

### Cleanup Checklist
- [ ] Remove all groups from scene
- [ ] Dispose all geometries
- [ ] Dispose all materials
- [ ] Dispose all textures
- [ ] Dispose renderer
- [ ] Dispose controls
- [ ] Remove DOM elements
- [ ] Remove event listeners

### Implementation
```javascript
return () => {
  // Remove groups
  scene.remove(floorGroup, wallsGroup, furnitureGroup, propsGroup);
  
  // Dispose models
  loadedModels.forEach(model => {
    model.traverse(child => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach(mat => mat.dispose());
        } else {
          child.material.dispose();
        }
      }
    });
  });
  
  // Dispose renderer and controls
  renderer.dispose();
  controls.dispose();
  
  // Remove DOM
  if (mountRef.current) {
    mountRef.current.removeChild(renderer.domElement);
  }
  
  // Remove listeners
  window.removeEventListener('resize', handleResize);
};
```

## Error Handling

### Loading Errors
```javascript
try {
  const assets = await Promise.all([
    loadAsset('floor_tile_large.gltf'),
    // ... more assets
  ]);
} catch (error) {
  console.error('Failed to load assets:', error);
  setLoadingError(true);
}
```

### Fallback Display
```jsx
{loadingError && (
  <div className="error-message">
    Failed to load dungeon assets. Please refresh.
  </div>
)}
```

## Future Enhancements (Out of Scope)

- Character placement and animation
- Interactive objects (open chests, light candles)
- Multiple rooms with doorways
- Procedural dungeon generation
- Minimap
- Fog effects
- Advanced lighting (torches, shadows)

## References

- KayKit Assets: `public/assets/KAYKIT-ASSETS.md`
- GLTFLoader: `#[[file:../../reference/threejs-api/llms-loaders-1.txt]]`
- Loading Manager: `#[[file:../../reference/threejs-api/llms-loaders-1.txt]]`
- OrbitControls: `#[[file:../../reference/threejs-api/llms-controls.txt]]`
- Best practices: `../../steering/best-practices.md`
