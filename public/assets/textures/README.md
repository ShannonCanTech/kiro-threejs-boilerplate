# Textures Directory

This directory contains all texture files organized by category.

## Subdirectories

### characters/
**Purpose:** Character-specific textures and materials
**Formats:** JPG, PNG
**Typical Use:** Character skins, clothing, accessories

**Examples:**
- `knight-armor-albedo.jpg` - Knight armor base color
- `knight-armor-normal.jpg` - Knight armor normal map
- `skin-human-albedo.jpg` - Human skin texture
- `clothing-leather-roughness.jpg` - Leather roughness map

### environments/
**Purpose:** Environment maps, skyboxes, HDRIs
**Formats:** HDR, EXR, JPG (for skyboxes)
**Typical Use:** Lighting, reflections, backgrounds

**Examples:**
- `skybox-day.jpg` - Daytime skybox (6 faces or equirectangular)
- `hdri-studio.hdr` - Studio HDRI for lighting
- `environment-forest.exr` - Forest environment map
- `skybox-night.jpg` - Night sky

### materials/
**Purpose:** PBR material texture sets
**Formats:** JPG (albedo, AO), PNG (with alpha)
**Typical Use:** Realistic materials for objects

**Structure:** Each material should have a complete PBR set:
```
materials/wood-oak/
├── wood-oak-albedo.jpg      # Base color (diffuse)
├── wood-oak-normal.jpg      # Normal map (bump detail)
├── wood-oak-roughness.jpg   # Roughness map
├── wood-oak-metallic.jpg    # Metallic map
├── wood-oak-ao.jpg          # Ambient occlusion
└── wood-oak-height.jpg      # Height/displacement (optional)
```

**Common Materials:**
- `wood-oak/` - Oak wood PBR set
- `metal-steel/` - Steel metal PBR set
- `concrete/` - Concrete PBR set
- `fabric-cotton/` - Cotton fabric PBR set
- `stone-granite/` - Granite stone PBR set

### ui/
**Purpose:** UI elements, icons, sprites
**Formats:** PNG (with transparency)
**Typical Use:** HUD elements, menus, icons

**Examples:**
- `icon-health.png` - Health icon
- `button-play.png` - Play button
- `crosshair.png` - Crosshair sprite
- `logo.png` - Game/app logo

## Texture Types Explained

### Albedo (Base Color)
- The base color of the material
- No lighting information
- RGB channels
- Format: JPG (no alpha) or PNG (with alpha)

### Normal Map
- Adds surface detail without geometry
- Simulates bumps and dents
- RGB channels encode XYZ normals
- Format: JPG or PNG
- Usually purple/blue in color

### Roughness Map
- Controls how rough/smooth surface is
- Black = smooth/shiny, White = rough/matte
- Grayscale
- Format: JPG

### Metallic Map
- Defines metallic vs non-metallic areas
- Black = non-metal, White = metal
- Grayscale
- Format: JPG

### Ambient Occlusion (AO)
- Adds shadows in crevices
- Enhances depth perception
- Grayscale
- Format: JPG

### Height/Displacement
- Used for parallax or actual displacement
- Grayscale height information
- Format: JPG or PNG

## Texture Size Guidelines

### Resolution Recommendations
- **Characters (close-up):** 2048x2048 or 4096x4096
- **Furniture/Objects:** 1024x1024 or 2048x2048
- **Buildings (exterior):** 2048x2048 or 4096x4096
- **Small props:** 512x512 or 1024x1024
- **UI elements:** 256x256 to 1024x1024

### Power-of-Two Rule
Always use power-of-two dimensions for better performance:
- ✅ 512, 1024, 2048, 4096
- ❌ 500, 1000, 1500, 3000

### Aspect Ratios
- Square textures (1:1) are most common
- Rectangular textures are fine (e.g., 2048x1024)
- Both dimensions should be power-of-two

## File Naming Convention

```
[material-name]-[map-type].jpg

Examples:
wood-oak-albedo.jpg
wood-oak-normal.jpg
wood-oak-roughness.jpg
metal-steel-metallic.jpg
```

## Loading Textures

### Basic Texture Loading
```javascript
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/assets/textures/materials/wood-oak-albedo.jpg');

const material = new THREE.MeshStandardMaterial({
  map: texture
});
```

### Complete PBR Material
```javascript
const textureLoader = new THREE.TextureLoader();
const basePath = '/assets/textures/materials/wood-oak/';

const material = new THREE.MeshStandardMaterial({
  map: textureLoader.load(basePath + 'wood-oak-albedo.jpg'),
  normalMap: textureLoader.load(basePath + 'wood-oak-normal.jpg'),
  roughnessMap: textureLoader.load(basePath + 'wood-oak-roughness.jpg'),
  metalnessMap: textureLoader.load(basePath + 'wood-oak-metallic.jpg'),
  aoMap: textureLoader.load(basePath + 'wood-oak-ao.jpg')
});
```

### Texture Settings
```javascript
const texture = textureLoader.load('/assets/textures/materials/wood-oak-albedo.jpg');

// Wrapping
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;

// Repeat
texture.repeat.set(4, 4); // Tile 4x4 times

// Filtering
texture.minFilter = THREE.LinearMipmapLinearFilter;
texture.magFilter = THREE.LinearFilter;

// Anisotropy (improves quality at angles)
texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
```

### Loading Environment Maps
```javascript
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

const rgbeLoader = new RGBELoader();
rgbeLoader.load('/assets/textures/environments/studio.hdr', (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = texture;
  scene.background = texture;
});
```

### Loading Skybox (Cube Map)
```javascript
const cubeTextureLoader = new THREE.CubeTextureLoader();
const skyboxTexture = cubeTextureLoader.load([
  '/assets/textures/environments/skybox/px.jpg', // positive x
  '/assets/textures/environments/skybox/nx.jpg', // negative x
  '/assets/textures/environments/skybox/py.jpg', // positive y
  '/assets/textures/environments/skybox/ny.jpg', // negative y
  '/assets/textures/environments/skybox/pz.jpg', // positive z
  '/assets/textures/environments/skybox/nz.jpg'  // negative z
]);

scene.background = skyboxTexture;
```

## Optimization Tips

### File Size
1. **Use JPG for photos** - Better compression, smaller files
2. **Use PNG for transparency** - When alpha channel needed
3. **Compress textures** - Use tools like TinyPNG, ImageOptim
4. **Appropriate resolution** - Don't use 4K for small objects

### Performance
1. **Power-of-two sizes** - Better GPU performance
2. **Mipmaps** - Automatically generated, improves quality
3. **Texture atlases** - Combine multiple textures into one
4. **Compressed formats** - Use KTX2 for production

### Memory
1. **Dispose unused textures** - `texture.dispose()`
2. **Reuse textures** - Don't load same texture multiple times
3. **Limit resolution** - Balance quality vs memory

## Creating Textures

### Recommended Tools
- **Substance Painter** - PBR texture painting
- **Substance Designer** - Procedural textures
- **Photoshop** - Photo editing, texture creation
- **GIMP** (Free) - Open-source alternative
- **Quixel Mixer** (Free) - Texture blending

### Generating PBR Maps
- **Materialize** (Free) - Generate maps from photos
- **AwesomeBump** (Free) - Normal map generator
- **CrazyBump** - Commercial tool

## Texture Wrapping Modes

```javascript
// Repeat texture
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;

// Clamp to edge (no repeat)
texture.wrapS = THREE.ClampToEdgeWrapping;
texture.wrapT = THREE.ClampToEdgeWrapping;

// Mirror repeat
texture.wrapS = THREE.MirroredRepeatWrapping;
texture.wrapT = THREE.MirroredRepeatWrapping;
```

## Texture Filtering

```javascript
// Minification filter (texture smaller than screen)
texture.minFilter = THREE.LinearMipmapLinearFilter; // Best quality
texture.minFilter = THREE.LinearFilter; // Faster, no mipmaps
texture.minFilter = THREE.NearestFilter; // Pixelated look

// Magnification filter (texture larger than screen)
texture.magFilter = THREE.LinearFilter; // Smooth
texture.magFilter = THREE.NearestFilter; // Pixelated (pixel art)
```

## Included Textures - KayKit Collection

The KayKit 3D models included in this template come with their own textures embedded in the GLTF/GLB files.

**Creator:** Kay Lousberg (www.kaylousberg.com)
**License:** CC0 (Creative Commons Zero) - Public Domain
**Source:** https://kaylousberg.itch.io/

### KayKit Texture Style
- Stylized, hand-painted look
- Vibrant colors
- Low-poly aesthetic
- Optimized for performance
- Embedded in model files

### Extracting KayKit Textures

If you need to access the textures separately:

```javascript
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const loader = new GLTFLoader();
loader.load('/assets/models/characters/character.gltf', (gltf) => {
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      const material = child.material;
      if (material.map) {
        // Access the texture
        const texture = material.map;
        console.log('Texture:', texture);
      }
    }
  });
});
```

## Adding Custom Textures

You can add your own PBR texture sets to the `materials/` directory following this structure:

### Sample PBR Texture Set Structure
```
textures/materials/wood-oak/
├── wood-oak-albedo.jpg      # Base color
├── wood-oak-normal.jpg      # Normal map
├── wood-oak-roughness.jpg   # Roughness map
├── wood-oak-metallic.jpg    # Metallic map
└── wood-oak-ao.jpg          # Ambient occlusion
```

## Free Texture Resources

### PBR Textures
- **Poly Haven** - https://polyhaven.com/textures (CC0)
- **CC0 Textures** - https://cc0textures.com/ (CC0)
- **Texture Haven** - https://texturehaven.com/ (CC0)
- **ambientCG** - https://ambientcg.com/ (CC0)

### HDRIs
- **Poly Haven** - https://polyhaven.com/hdris (CC0)
- **HDRI Haven** - https://hdrihaven.com/ (CC0)

### UI Textures
- **Kenney** - https://kenney.nl/assets (CC0)
- **OpenGameArt** - https://opengameart.org/

## Troubleshooting

### Texture appears black
- Check if lights are in scene (MeshStandardMaterial needs lights)
- Verify texture path is correct
- Check if texture loaded successfully

### Texture is blurry
- Increase texture resolution
- Enable anisotropic filtering
- Check minFilter/magFilter settings

### Texture not tiling correctly
- Set wrapS and wrapT to RepeatWrapping
- Adjust repeat values: `texture.repeat.set(x, y)`
- Ensure texture is seamless

### Performance issues
- Reduce texture resolution
- Use texture atlases
- Compress textures
- Dispose unused textures

## Best Practices

1. **Use PBR workflow** - Physically accurate materials
2. **Keep textures organized** - Use subdirectories
3. **Name consistently** - Follow naming convention
4. **Optimize file sizes** - Compress without quality loss
5. **Power-of-two dimensions** - Better performance
6. **Dispose properly** - Clean up when done
7. **Reuse textures** - Don't load duplicates
8. **Test on target devices** - Ensure performance

## Advanced Techniques

### Texture Arrays
For terrain or similar materials:
```javascript
const textureArray = new THREE.DataArrayTexture(data, width, height, depth);
```

### Video Textures
For animated textures:
```javascript
const video = document.createElement('video');
video.src = '/assets/textures/video.mp4';
video.play();

const videoTexture = new THREE.VideoTexture(video);
```

### Canvas Textures
For dynamic textures:
```javascript
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
// Draw on canvas...

const canvasTexture = new THREE.CanvasTexture(canvas);
```

---

For more information on textures, see:
- Three.js Textures: `#[[file:../../.kiro/reference/threejs-api/llms-core-1.txt]]`
- Material Guide: `#ThreeJS` (invoke in Kiro)
- Best practices: `../../.kiro/steering/best-practices.md`
