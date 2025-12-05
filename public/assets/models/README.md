# 3D Models Directory

This directory contains all 3D model files organized by category.

## Subdirectories

### characters/
**Purpose:** Character models (humanoids, creatures, NPCs)
**Formats:** GLTF/GLB (preferred), FBX
**Typical Use:** Player characters, NPCs, enemies, creatures

**Examples:**
- `knight-armored.glb` - Medieval knight with armor
- `character-base.glb` - Basic humanoid for rigging
- `creature-dragon.glb` - Fantasy dragon
- `npc-villager.glb` - Village NPC

### animations/
**Purpose:** Animation files (can be separate from models)
**Formats:** GLTF/GLB with animations, FBX
**Typical Use:** Walk cycles, idle animations, actions

**Examples:**
- `walk-cycle.glb` - Generic walk animation
- `run-cycle.glb` - Running animation
- `jump.glb` - Jump animation
- `attack-sword.glb` - Sword attack animation

**Note:** Animations can be embedded in character models or stored separately for reuse.

### furniture/
**Purpose:** Interior furniture and decorative objects
**Formats:** GLTF/GLB, OBJ
**Typical Use:** Room decoration, interior scenes

**Examples:**
- `chair-modern.glb` - Modern office chair
- `table-wooden.glb` - Wooden dining table
- `sofa-leather.glb` - Leather sofa
- `lamp-desk.glb` - Desk lamp
- `bookshelf.glb` - Bookshelf with books

### buildings/
**Purpose:** Buildings and architectural structures
**Formats:** GLTF/GLB, OBJ
**Typical Use:** Environments, cityscapes, level design

**Examples:**
- `house-simple.glb` - Simple house
- `building-office.glb` - Office building
- `castle-medieval.glb` - Medieval castle
- `shop-storefront.glb` - Shop building

### objects/
**Purpose:** General props and interactive objects
**Formats:** GLTF/GLB, OBJ
**Typical Use:** Props, pickups, interactive items

**Examples:**
- `crate-wooden.glb` - Wooden crate
- `barrel.glb` - Barrel
- `chest-treasure.glb` - Treasure chest
- `key-gold.glb` - Golden key
- `potion-health.glb` - Health potion

### vehicles/
**Purpose:** Vehicles and transportation
**Formats:** GLTF/GLB, FBX
**Typical Use:** Drivable vehicles, background traffic

**Examples:**
- `car-sedan.glb` - Sedan car
- `bike-motorcycle.glb` - Motorcycle
- `ship-pirate.glb` - Pirate ship
- `plane-fighter.glb` - Fighter plane

## File Naming Convention

Use descriptive names with category prefix:
```
[category]-[description]-[variant].glb

Examples:
character-knight-armored.glb
furniture-chair-modern.glb
building-house-medieval.glb
vehicle-car-sports.glb
```

## Model Requirements

### Polygon Count Guidelines
- **Characters:** 5,000 - 20,000 triangles
- **Furniture:** 500 - 5,000 triangles
- **Buildings:** 1,000 - 50,000 triangles (use LOD)
- **Objects:** 100 - 2,000 triangles
- **Vehicles:** 5,000 - 30,000 triangles

### Scale
- Use consistent units (meters recommended)
- Character height: ~1.8 units (meters)
- Furniture: Real-world scale
- Buildings: Real-world scale

### Pivot Point
- Characters: At feet, centered
- Furniture: At base, centered
- Buildings: At ground level, corner or center
- Objects: At logical interaction point

## Loading Models

### Basic Loading
```javascript
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const loader = new GLTFLoader();
loader.load('/assets/models/characters/knight.glb', (gltf) => {
  scene.add(gltf.scene);
});
```

### With Progress Tracking
```javascript
loader.load(
  '/assets/models/buildings/castle.glb',
  (gltf) => {
    scene.add(gltf.scene);
  },
  (progress) => {
    const percent = (progress.loaded / progress.total) * 100;
    console.log(`Loading: ${percent.toFixed(2)}%`);
  },
  (error) => {
    console.error('Error loading model:', error);
  }
);
```

### Loading with Animations
```javascript
loader.load('/assets/models/characters/knight.glb', (gltf) => {
  const model = gltf.scene;
  scene.add(model);
  
  // Setup animation mixer
  const mixer = new THREE.AnimationMixer(model);
  const action = mixer.clipAction(gltf.animations[0]);
  action.play();
  
  // Update in animation loop
  function animate() {
    requestAnimationFrame(animate);
    mixer.update(clock.getDelta());
    renderer.render(scene, camera);
  }
});
```

## Optimization Tips

### Before Import
1. **Reduce polygons** - Use decimation in Blender/Maya
2. **Merge materials** - Fewer materials = better performance
3. **Remove hidden geometry** - Delete faces not visible
4. **Bake textures** - Combine multiple textures
5. **Use Draco compression** - Smaller file sizes

### In Code
1. **Use InstancedMesh** - For repeated objects
2. **Implement LOD** - Level of Detail for distant objects
3. **Frustum culling** - Don't render off-screen objects
4. **Dispose properly** - Clean up when removing models

## Model Formats Comparison

| Format | Pros | Cons | Best For |
|--------|------|------|----------|
| GLTF/GLB | Industry standard, PBR, animations, efficient | Newer format | Everything (recommended) |
| FBX | Animations, widely supported | Larger files | Animations, complex rigs |
| OBJ | Simple, universal | No animations, no PBR | Static objects |
| COLLADA | Good compatibility | Verbose, large files | Legacy projects |

## Creating Models

### Recommended Tools
- **Blender** (Free) - Full 3D suite
- **Maya** - Professional tool
- **3ds Max** - Professional tool
- **Cinema 4D** - Motion graphics
- **Houdini** - Procedural modeling

### Export Settings (Blender → GLTF)
1. Select objects to export
2. File → Export → glTF 2.0
3. Format: GLB (binary)
4. Include: Selected Objects
5. Transform: +Y Up
6. Geometry: Apply Modifiers
7. Compression: Draco (optional)

## Included Assets - KayKit Collection

This template includes high-quality 3D assets from the **KayKit Collection** by Kay Lousberg.

**Creator:** Kay Lousberg (www.kaylousberg.com)
**License:** CC0 (Creative Commons Zero) - Public Domain
**Source:** https://kaylousberg.itch.io/

All KayKit assets are free to use in personal, educational, and commercial projects with no attribution required (though appreciated).

### Characters

**KayKit Adventurers 2.0 FREE**
- Location: `characters/KayKit_Adventurers_2.0_FREE/`
- Multiple character models with variations
- Includes animations (walk, run, idle, attack, etc.)
- Low-poly style, optimized for performance
- Textures included

**KayKit Skeletons 1.1 FREE**
- Location: `characters/KayKit_Skeletons_1.1_FREE/`
- Skeleton enemy characters
- Multiple variations
- Animation-ready

**KayKit Character Animations 1.0**
- Location: `characters/KayKit_Character_Animations_1.0/`
- Standard animation library
- Compatible with KayKit characters
- Walk, run, jump, attack, idle, and more

### Objects & Environment

**KayKit Dungeon Remastered 1.1 FREE**
- Location: `objects/KayKit_DungeonRemastered_1.1_FREE/`
- Complete dungeon building kit
- Walls, floors, pillars, stairs
- Furniture: tables, chairs, barrels, crates
- Decorations: banners, candles, torches
- Props: chests, bottles, books

**KayKit City Builder Bits 1.0 FREE**
- Location: `objects/KayKit_City_Builder_Bits_1.0_FREE/`
- City building pieces
- Buildings, roads, props
- Modular construction system

**KayKit Forest Nature Pack 1.0 FREE**
- Location: `objects/KayKit_Forest_Nature_Pack_1.0_FREE/`
- Trees, rocks, plants
- Ground pieces
- Nature props

**KayKit Halloween Bits 1.0 FREE**
- Location: `objects/KayKit_HalloweenBits_1.0_FREE/`
- Halloween-themed assets
- Pumpkins, graves, spooky decorations

**KayKit Platformer Pack 1.0 FREE**
- Location: `objects/KayKit_Platformer_Pack_1.0_FREE/`
- Platform game assets
- Platforms, obstacles, collectibles

**KayKit Resource Bits 1.0 FREE**
- Location: `objects/KayKit_ResourceBits_1.0_FREE/`
- Resource and crafting items
- Ores, gems, materials

### Animation Library
- Location: `objects/Animation Library[Standard]/`
- Standard animation set for Godot/Three.js
- Compatible with KayKit characters

## Using KayKit Assets

### Loading a Character
```javascript
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const loader = new GLTFLoader();
loader.load(
  '/assets/models/characters/KayKit_Adventurers_2.0_FREE/Characters/gltf/character_knight.gltf',
  (gltf) => {
    const character = gltf.scene;
    scene.add(character);
    
    // Setup animations if included
    if (gltf.animations.length > 0) {
      const mixer = new THREE.AnimationMixer(character);
      const action = mixer.clipAction(gltf.animations[0]);
      action.play();
    }
  }
);
```

### Loading Dungeon Assets
```javascript
// Load multiple dungeon pieces
const dungeonPath = '/assets/models/objects/KayKit_DungeonRemastered_1.1_FREE/Assets/gltf/';

loader.load(dungeonPath + 'wall_corner.gltf', (gltf) => {
  scene.add(gltf.scene);
});

loader.load(dungeonPath + 'floor_tile_large.gltf', (gltf) => {
  scene.add(gltf.scene);
});
```

### Building a Scene
```javascript
// Create a dungeon room using KayKit assets
const dungeonAssets = [
  'floor_tile_large.gltf',
  'wall_corner.gltf',
  'pillar.gltf',
  'table_small.gltf',
  'candle_lit.gltf'
];

dungeonAssets.forEach(asset => {
  loader.load(
    `/assets/models/objects/KayKit_DungeonRemastered_1.1_FREE/Assets/gltf/${asset}`,
    (gltf) => {
      scene.add(gltf.scene);
    }
  );
});
```

## Asset Characteristics

### Style
- Low-poly aesthetic
- Stylized, not realistic
- Consistent art style across all packs
- Vibrant colors

### Performance
- Optimized polygon counts
- Efficient for real-time rendering
- Mobile-friendly
- Good for games and interactive experiences

### Scale
- Consistent scale across packs
- Character height: ~1.8 units
- Easy to combine different packs

## Optional Attribution

While not required by the CC0 license, you can credit Kay Lousberg:

```
"3D Assets by Kay Lousberg, www.kaylousberg.com"
```

Or in your credits:
```
3D Models: KayKit Collection by Kay Lousberg
Website: www.kaylousberg.com
Itch.io: https://kaylousberg.itch.io/
```

## Support KayKit

If you find these assets useful, consider supporting Kay Lousberg:
- **Patreon:** http://patreon.com/kaylousberg
- **Itch.io:** Purchase EXTRA or SOURCE tier packs
- **Social Media:** Follow for updates
  - Twitter: http://twitter.com/KayLousberg
  - Mastodon: https://mastodon.gamedev.place/@Kay

## More KayKit Assets

Explore the full KayKit collection on itch.io:
- https://kaylousberg.itch.io/

Additional packs available (some free, some paid):
- Weapons pack
- Animations pack
- Prototype bits
- And many more!

## Adding Custom Models

1. Place model in appropriate subdirectory
2. Follow naming convention
3. Test loading in a scene
4. Verify scale and orientation
5. Check performance (polygon count, draw calls)
6. Include license information if needed

## Troubleshooting

### Model appears black
- Add lights to scene (MeshStandardMaterial needs lights)
- Check if materials are properly loaded
- Verify normals are correct

### Model is too large/small
- Check scale in modeling software
- Apply scale transformations before export
- Adjust scale in code: `model.scale.set(0.1, 0.1, 0.1)`

### Animations not playing
- Verify animations are included in GLTF
- Check AnimationMixer is created
- Ensure mixer.update() is called in animation loop

### Performance issues
- Reduce polygon count
- Use LOD (Level of Detail)
- Implement frustum culling
- Use InstancedMesh for repeated objects

## Resources

- GLTF Validator: https://github.khronos.org/glTF-Validator/
- Blender GLTF Export: https://docs.blender.org/manual/en/latest/addons/import_export/scene_gltf2.html
- Three.js GLTFLoader: `#[[file:../../.kiro/reference/threejs-api/llms-loaders-1.txt]]`
