# KayKit Collection - Asset Inventory

This template includes high-quality 3D assets from the **KayKit Collection** by Kay Lousberg.

## License & Attribution

**Creator:** Kay Lousberg  
**Website:** www.kaylousberg.com  
**Itch.io:** https://kaylousberg.itch.io/  
**License:** CC0 (Creative Commons Zero) - Public Domain  

### Usage Rights
- ✅ Free for personal projects
- ✅ Free for educational projects
- ✅ Free for commercial projects
- ✅ No attribution required (but appreciated)
- ✅ Modify and remix freely

### Optional Credit
```
"3D Assets by Kay Lousberg, www.kaylousberg.com"
```

## Included Asset Packs

### 1. KayKit Adventurers 2.0 FREE
**Location:** `models/characters/KayKit_Adventurers_2.0_FREE/`  
**Type:** Characters & Animations  
**Contents:**
- Multiple adventurer character models
- Various character classes (knight, mage, archer, etc.)
- Character animations (walk, run, idle, attack, jump)
- Texture variations
- Low-poly optimized models

**Use Cases:**
- Player characters
- NPCs
- RPG games
- Adventure games

### 2. KayKit Skeletons 1.1 FREE
**Location:** `models/characters/KayKit_Skeletons_1.1_FREE/`  
**Type:** Enemy Characters  
**Contents:**
- Skeleton enemy models
- Multiple variations
- Animation-ready rigs

**Use Cases:**
- Enemy characters
- Dungeon crawlers
- Horror games
- Fantasy games


### 3. KayKit Character Animations 1.0
**Location:** `models/characters/KayKit_Character_Animations_1.0/`  
**Type:** Animation Library  
**Contents:**
- Standard animation set
- Walk, run, idle cycles
- Jump, attack, death animations
- Compatible with KayKit characters

**Use Cases:**
- Animating KayKit characters
- Standard character behaviors
- Game character controllers

### 4. KayKit Dungeon Remastered 1.1 FREE
**Location:** `models/objects/KayKit_DungeonRemastered_1.1_FREE/`  
**Type:** Environment & Props  
**Contents:**
- **Architecture:** Walls, floors, ceilings, pillars, stairs, doors
- **Furniture:** Tables, chairs, benches, shelves
- **Storage:** Chests, barrels, crates, trunks
- **Lighting:** Candles, torches, chandeliers
- **Decorations:** Banners, shields, paintings, rugs
- **Props:** Bottles, books, plates, weapons

**Use Cases:**
- Dungeon environments
- Castle interiors
- Medieval settings
- RPG dungeons

### 5. KayKit City Builder Bits 1.0 FREE
**Location:** `models/objects/KayKit_City_Builder_Bits_1.0_FREE/`  
**Type:** City Building Assets  
**Contents:**
- Building pieces
- Roads and pathways
- City props
- Modular construction system

**Use Cases:**
- City building games
- Urban environments
- Town creation
- Strategy games

### 6. KayKit Forest Nature Pack 1.0 FREE
**Location:** `models/objects/KayKit_Forest_Nature_Pack_1.0_FREE/`  
**Type:** Nature & Environment  
**Contents:**
- Trees (various types and sizes)
- Rocks and boulders
- Plants and vegetation
- Ground pieces
- Nature props

**Use Cases:**
- Forest environments
- Outdoor scenes
- Nature settings
- Open world games


### 7. KayKit Halloween Bits 1.0 FREE
**Location:** `models/objects/KayKit_HalloweenBits_1.0_FREE/`  
**Type:** Themed Props  
**Contents:**
- Pumpkins and jack-o-lanterns
- Graves and tombstones
- Spooky decorations
- Halloween-themed props

**Use Cases:**
- Halloween games
- Spooky environments
- Seasonal content
- Horror themes

### 8. KayKit Platformer Pack 1.0 FREE
**Location:** `models/objects/KayKit_Platformer_Pack_1.0_FREE/`  
**Type:** Platform Game Assets  
**Contents:**
- Platform pieces
- Obstacles
- Collectibles
- Game props

**Use Cases:**
- Platform games
- 2.5D games
- Obstacle courses
- Casual games

### 9. KayKit Resource Bits 1.0 FREE
**Location:** `models/objects/KayKit_ResourceBits_1.0_FREE/`  
**Type:** Resource Items  
**Contents:**
- Ores and minerals
- Gems and crystals
- Crafting materials
- Resource nodes

**Use Cases:**
- Crafting systems
- Resource gathering games
- Mining games
- RPG materials

### 10. Animation Library (Standard)
**Location:** `models/objects/Animation Library[Standard]/`  
**Type:** Animation Set  
**Contents:**
- Standard animation library for Godot/Three.js
- Compatible with KayKit characters
- Various character actions

**Use Cases:**
- Character animation
- Game character controllers
- Animation systems

## Quick Start Examples

### Loading a Character
```javascript
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const loader = new GLTFLoader();
loader.load(
  '/assets/models/characters/KayKit_Adventurers_2.0_FREE/Characters/gltf/character_knight.gltf',
  (gltf) => {
    scene.add(gltf.scene);
  }
);
```

### Building a Dungeon Scene
```javascript
const dungeonPath = '/assets/models/objects/KayKit_DungeonRemastered_1.1_FREE/Assets/gltf/';

// Load floor
loader.load(dungeonPath + 'floor_tile_large.gltf', (gltf) => {
  scene.add(gltf.scene);
});

// Load walls
loader.load(dungeonPath + 'wall_corner.gltf', (gltf) => {
  scene.add(gltf.scene);
});

// Load props
loader.load(dungeonPath + 'table_small.gltf', (gltf) => {
  scene.add(gltf.scene);
});
```


### Creating a Forest Environment
```javascript
const forestPath = '/assets/models/objects/KayKit_Forest_Nature_Pack_1.0_FREE/Assets/gltf/';

// Load trees
loader.load(forestPath + 'tree_large.gltf', (gltf) => {
  scene.add(gltf.scene);
});

// Load rocks
loader.load(forestPath + 'rock_large.gltf', (gltf) => {
  scene.add(gltf.scene);
});
```

## Asset Characteristics

### Visual Style
- **Low-poly aesthetic** - Stylized, not realistic
- **Vibrant colors** - Eye-catching and appealing
- **Consistent style** - All packs work together
- **Hand-painted look** - Artistic and charming

### Technical Specs
- **Format:** GLTF/GLB
- **Polygon count:** Optimized for real-time
- **Textures:** Embedded in models
- **Scale:** Consistent across packs
- **Performance:** Mobile-friendly

### Compatibility
- ✅ Three.js
- ✅ React Three Fiber
- ✅ Babylon.js
- ✅ Unity
- ✅ Unreal Engine
- ✅ Godot
- ✅ Blender

## Support KayKit

These assets are provided free of charge. If you find them useful, consider supporting Kay Lousberg:

### Ways to Support
- **Patreon:** http://patreon.com/kaylousberg
- **Itch.io:** Purchase EXTRA or SOURCE tier packs at https://kaylousberg.itch.io/
- **Donations:** Leave a tip on itch.io
- **Social Media:** Follow and share
  - Twitter: http://twitter.com/KayLousberg
  - Mastodon: https://mastodon.gamedev.place/@Kay

### Benefits of Supporting
- Access to EXTRA tier packs with more assets
- SOURCE tier with editable Blender files
- Early access to new releases
- Support continued development
- Help create more free assets

## More KayKit Assets

Explore the full collection:
- **Itch.io Store:** https://kaylousberg.itch.io/
- **Patreon:** http://patreon.com/kaylousberg

Additional packs available:
- Weapons & Tools
- Vehicles
- Prototype Bits
- Seasonal Packs
- And many more!

## Community & Updates

Stay updated with new releases:
- **Twitter:** http://twitter.com/KayLousberg
- **Mastodon:** https://mastodon.gamedev.place/@Kay
- **Itch.io:** https://kaylousberg.itch.io/

## License Details

**License:** Creative Commons Zero (CC0)  
**Link:** http://creativecommons.org/publicdomain/zero/1.0/

This means:
- No copyright restrictions
- Use for any purpose
- No attribution required
- Modify freely
- Commercial use allowed
- No warranty provided

---

**Thank you to Kay Lousberg for creating and sharing these amazing assets with the community!**

For questions about the assets, visit: www.kaylousberg.com
