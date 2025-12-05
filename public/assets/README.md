# Assets Directory

This directory contains all static assets for your Three.js project, organized by type for easy access and management.

## Directory Structure

```
public/assets/
├── models/              # 3D models and related files
│   ├── characters/      # Character models (humanoids, creatures, etc.)
│   ├── animations/      # Animation files (FBX, GLTF animations)
│   ├── furniture/       # Furniture and interior objects
│   ├── buildings/       # Buildings and architectural models
│   ├── objects/         # General objects (props, items, etc.)
│   └── vehicles/        # Vehicles (cars, bikes, ships, etc.)
├── textures/            # Texture maps and images
│   ├── characters/      # Character textures and materials
│   ├── environments/    # Skyboxes, HDRIs, environment maps
│   ├── materials/       # PBR textures (albedo, normal, roughness, etc.)
│   └── ui/              # UI textures and sprites
├── audio/               # Sound files
│   ├── music/           # Background music
│   └── sfx/             # Sound effects
└── fonts/               # Font files for 3D text
```

## Recommended File Formats

### 3D Models
- **GLTF/GLB** (Recommended) - Industry standard, efficient, supports PBR
- **FBX** - Good for animations, widely supported
- **OBJ** - Simple format, no animations
- **COLLADA (.dae)** - Legacy format, good compatibility

### Textures
- **JPG** - Photos, albedo maps (no transparency)
- **PNG** - UI elements, textures with transparency
- **HDR/EXR** - Environment maps, HDRI lighting
- **KTX2** - Compressed textures for better performance

### Audio
- **MP3** - Compressed, good for music
- **OGG** - Open format, good compression
- **WAV** - Uncompressed, high quality

### Fonts
- **TTF/OTF** - TrueType/OpenType fonts
- **WOFF/WOFF2** - Web fonts

## Asset Guidelines

### File Naming
Use descriptive, lowercase names with hyphens:
- ✅ `character-knight-armored.glb`
- ✅ `building-medieval-house.glb`
- ✅ `texture-wood-oak-albedo.jpg`
- ❌ `Model1.glb`
- ❌ `texture_final_v2.jpg`

### File Size
- **Models:** Keep under 10MB per file
- **Textures:** Use power-of-two dimensions (512, 1024, 2048)
- **Audio:** Compress music files, keep SFX small

### Organization
- Group related assets together
- Use subdirectories for collections
- Include README files for complex assets

## Loading Assets in Code

### Loading 3D Models

```javascript
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const loader = new GLTFLoader();
loader.load(
  '/assets/models/characters/knight.glb',
  (gltf) => {
    scene.add(gltf.scene);
  },
  (progress) => {
    console.log('Loading:', (progress.loaded / progress.total * 100) + '%');
  },
  (error) => {
    console.error('Error loading model:', error);
  }
);
```

### Loading Textures

```javascript
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/assets/textures/materials/wood-oak.jpg');

const material = new THREE.MeshStandardMaterial({ map: texture });
```

### Loading Animations

```javascript
loader.load('/assets/models/animations/walk.glb', (gltf) => {
  const mixer = new THREE.AnimationMixer(gltf.scene);
  const action = mixer.clipAction(gltf.animations[0]);
  action.play();
});
```

## Sample Assets Included

### Characters
- **knight.glb** - Armored knight character (placeholder)
- **character-base.glb** - Basic humanoid for testing

### Furniture
- **chair-modern.glb** - Modern office chair
- **table-wooden.glb** - Wooden table

### Buildings
- **house-simple.glb** - Simple house model
- **building-office.glb** - Office building

### Objects
- **crate-wooden.glb** - Wooden crate
- **barrel.glb** - Barrel prop

### Textures
- **wood-oak/** - Oak wood PBR textures
- **metal-steel/** - Steel metal PBR textures
- **concrete/** - Concrete PBR textures

## PBR Texture Sets

For realistic materials, use complete PBR texture sets:

```
textures/materials/wood-oak/
├── wood-oak-albedo.jpg      # Base color
├── wood-oak-normal.jpg      # Normal map
├── wood-oak-roughness.jpg   # Roughness map
├── wood-oak-metallic.jpg    # Metallic map
└── wood-oak-ao.jpg          # Ambient occlusion
```

### Using PBR Textures

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

## Included Assets

This template includes high-quality 3D assets from the **KayKit Collection** by Kay Lousberg.

### KayKit Collection
**Creator:** Kay Lousberg (www.kaylousberg.com)
**License:** CC0 (Creative Commons Zero) - Public Domain
**Source:** https://kaylousberg.itch.io/

The KayKit assets included in this template are free to use in personal, educational, and commercial projects with no attribution required (though appreciated).

**Included Packs:**
- **KayKit Adventurers 2.0** - Character models and animations
- **KayKit Skeletons 1.1** - Skeleton character models
- **KayKit Character Animations 1.0** - Animation library
- **KayKit Dungeon Remastered 1.1** - Dungeon environment assets
- **KayKit City Builder Bits 1.0** - City building pieces
- **KayKit Forest Nature Pack 1.0** - Nature and forest assets
- **KayKit Halloween Bits 1.0** - Halloween-themed assets
- **KayKit Platformer Pack 1.0** - Platform game assets
- **KayKit Resource Bits 1.0** - Resource and crafting items

**Support KayKit:**
- Patreon: http://patreon.com/kaylousberg
- Itch.io: https://kaylousberg.itch.io/
- Twitter: http://twitter.com/KayLousberg

### Optional Credit
While not required, you can credit Kay Lousberg:
```
"3D Assets by Kay Lousberg, www.kaylousberg.com"
```

## Additional Asset Sources

### Free 3D Models
- **KayKit** - https://kaylousberg.itch.io/ (CC0)
- **Poly Haven** - https://polyhaven.com/ (CC0)
- **Quaternius** - https://quaternius.com/ (CC0)
- **Kenney** - https://kenney.nl/assets (CC0)
- **Sketchfab** - https://sketchfab.com/ (Various licenses)

### Free Textures
- **Poly Haven** - https://polyhaven.com/textures (CC0)
- **CC0 Textures** - https://cc0textures.com/ (CC0)
- **Texture Haven** - https://texturehaven.com/ (CC0)

### Free Audio
- **Freesound** - https://freesound.org/ (Various licenses)
- **OpenGameArt** - https://opengameart.org/ (Various licenses)

## Optimization Tips

### Models
1. **Reduce polygon count** - Use decimation/simplification
2. **Merge materials** - Fewer materials = fewer draw calls
3. **Use LOD** - Level of Detail for distant objects
4. **Compress geometry** - Use Draco compression for GLTF

### Textures
1. **Resize appropriately** - Don't use 4K textures for small objects
2. **Use compression** - JPG for photos, PNG for transparency
3. **Power-of-two sizes** - 512, 1024, 2048 for better performance
4. **Texture atlases** - Combine multiple textures into one

### Audio
1. **Compress music** - Use MP3 or OGG
2. **Keep SFX short** - Small file sizes
3. **Preload critical sounds** - Load before needed
4. **Use audio sprites** - Combine multiple sounds

## License Information

When adding assets, always include license information:

```
assets/models/characters/knight/
├── knight.glb
├── knight-texture.png
└── LICENSE.txt          # Include license and attribution
```

### Common Licenses
- **CC0** - Public domain, no attribution required
- **CC-BY** - Attribution required
- **CC-BY-SA** - Attribution + share-alike
- **MIT** - Permissive, attribution recommended

## Adding Your Own Assets

1. **Place in appropriate directory**
2. **Follow naming conventions**
3. **Optimize file size**
4. **Include license information**
5. **Update this README if needed**
6. **Test loading in your scene**

## Asset Loading Helper

Create a helper utility for consistent asset loading:

```javascript
// src/utils/assetLoader.js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const gltfLoader = new GLTFLoader();
const textureLoader = new THREE.TextureLoader();

export const loadModel = (path) => {
  return new Promise((resolve, reject) => {
    gltfLoader.load(
      `/assets/models/${path}`,
      resolve,
      undefined,
      reject
    );
  });
};

export const loadTexture = (path) => {
  return textureLoader.load(`/assets/textures/${path}`);
};

// Usage:
// const gltf = await loadModel('characters/knight.glb');
// const texture = loadTexture('materials/wood-oak.jpg');
```

## Performance Monitoring

Monitor asset loading performance:

```javascript
console.time('Model Load');
loader.load('/assets/models/character.glb', (gltf) => {
  console.timeEnd('Model Load');
  scene.add(gltf.scene);
});
```

## Troubleshooting

### Model not appearing
- Check file path is correct
- Verify model is added to scene
- Check camera position and direction
- Ensure proper lighting (MeshStandardMaterial needs lights)

### Texture not loading
- Verify file path
- Check texture format is supported
- Ensure power-of-two dimensions
- Check browser console for errors

### Performance issues
- Reduce polygon count
- Optimize texture sizes
- Use LOD for distant objects
- Enable frustum culling

## Best Practices

1. **Keep assets organized** - Use the directory structure
2. **Optimize before importing** - Don't rely on runtime optimization
3. **Test on target devices** - Ensure performance on all platforms
4. **Version control large files** - Consider Git LFS for large assets
5. **Document custom assets** - Add README files for complex assets
6. **Backup originals** - Keep source files separate from optimized versions

---

For more information on loading assets, see:
- Three.js Loaders: `#[[file:../.kiro/reference/threejs-api/llms-loaders-1.txt]]`
- Loading Guide: `#ThreeJS` (invoke in Kiro)
- Template patterns: `.kiro/steering/threejs-expert.md`
