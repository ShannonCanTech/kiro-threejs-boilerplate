---
inclusion: manual
contextKey: ThreeJSAPI
---

# Three.js API Documentation Index

The complete Three.js API documentation (llms.txt - 3.7MB) has been split into 14 manageable files for selective loading.

## File Organization

### Small Files (Quick Reference)

#### 1. llms-animation.txt (16K)
**Lines:** 1-372
**Contains:**
- AnimationClipCreator
- Animation utilities
- Basic animation classes

**Use for:** Creating animation clips, rotation animations, scale animations

#### 2. llms-effects.txt (16K)
**Lines:** 3499-3983
**Contains:**
- AnaglyphEffect
- AsciiEffect
- OutlineEffect
- ParallaxBarrierEffect
- PeppersGhostEffect
- StereoEffect
- DebugEnvironment
- RoomEnvironment

**Use for:** Post-processing effects, special rendering modes

#### 3. llms-geometries.txt (14K)
**Lines:** 4659-4994
**Contains:**
- BoxLineGeometry
- ConvexGeometry
- DecalGeometry
- ParametricGeometry
- RoundedBoxGeometry
- TeapotGeometry
- TextGeometry

**Use for:** Creating custom or specialized geometries

### Medium Files (Common Use)

#### 4. llms-controls.txt (74K)
**Lines:** 373-2212
**Contains:**
- ArcballControls
- DragControls
- FirstPersonControls
- FlyControls
- MapControls
- **OrbitControls** ⭐ (most commonly used)
- PointerLockControls
- TrackballControls
- **TransformControls** ⭐

**Use for:** Camera controls, object manipulation, user interaction

#### 5. llms-curves-csm.txt (49K)
**Lines:** 2213-3498
**Contains:**
- CSM (Cascaded Shadow Maps)
- Various curve types (GrannyKnot, HeartCurve, etc.)
- NURBS curves and surfaces

**Use for:** Advanced curves, shadow mapping, parametric shapes

#### 6. llms-exporters.txt (27K)
**Lines:** 3984-4658
**Contains:**
- DRACOExporter
- EXRExporter
- GLTFExporter
- KTX2Exporter
- OBJExporter
- PLYExporter
- STLExporter
- USDZExporter

**Use for:** Exporting 3D models and scenes to various formats

#### 7. llms-helpers.txt (32K)
**Lines:** 4995-5860
**Contains:**
- LightProbeHelper
- OctreeHelper
- PositionalAudioHelper
- RectAreaLightHelper
- TextureHelper
- VertexNormalsHelper
- VertexTangentsHelper
- ViewHelper

**Use for:** Debugging, visualization, development tools

#### 8. llms-interactive-lights.txt (27K)
**Lines:** 5861-6525
**Contains:**
- HTMLMesh
- InteractiveGroup
- SelectionBox
- SelectionHelper
- LightProbeGenerator
- RectAreaLight utilities
- Line2, LineGeometry, LineMaterial
- Wireframe utilities

**Use for:** Interactive elements, lighting utilities, line rendering

### Large Files (Comprehensive Reference)

#### 9. llms-loaders-1.txt (311K)
**Lines:** 6526-15000
**Contains:**
- First half of loaders
- Rhino3dmLoader
- ThreeMFLoader
- AMFLoader
- BVHLoader
- ColladaLoader
- DDSLoader
- DRACOLoader
- EXRLoader
- FBXLoader
- And more...

**Use for:** Loading 3D models, textures, and assets (part 1)

#### 10. llms-loaders-2.txt (383K)
**Lines:** 15001-25000
**Contains:**
- Second half of loaders
- Continuation of loader classes
- Additional format support

**Use for:** Loading 3D models, textures, and assets (part 2)

#### 11. llms-materials-math.txt (652K)
**Lines:** 25001-40000
**Contains:**
- Material classes (MeshStandardMaterial, ShaderMaterial, etc.)
- Math utilities (Vector3, Matrix4, Quaternion, etc.)
- Color classes
- Texture classes

**Use for:** Materials, shaders, mathematical operations, textures

#### 12. llms-core-1.txt (825K)
**Lines:** 40001-60000
**Contains:**
- Core Three.js classes (first part)
- Scene
- Camera classes
- Renderer
- Object3D
- Mesh
- Light classes

**Use for:** Core Three.js functionality (part 1)

#### 13. llms-core-2.txt (741K)
**Lines:** 60001-80000
**Contains:**
- Core Three.js classes (second part)
- Additional core functionality
- Advanced rendering features

**Use for:** Core Three.js functionality (part 2)

#### 14. llms-core-3.txt (464K)
**Lines:** 80001-91216
**Contains:**
- Core Three.js classes (final part)
- Remaining core functionality
- Utilities and helpers

**Use for:** Core Three.js functionality (part 3)

## Usage Guide

### For Common Tasks

**Camera Controls:**
```
Reference: llms-controls.txt (74K)
Most used: OrbitControls, TransformControls
```

**Loading Models:**
```
Reference: llms-loaders-1.txt (311K) or llms-loaders-2.txt (383K)
Most used: GLTFLoader, FBXLoader, OBJLoader
```

**Materials and Textures:**
```
Reference: llms-materials-math.txt (652K)
Most used: MeshStandardMaterial, TextureLoader
```

**Core Functionality:**
```
Reference: llms-core-1.txt (825K)
Most used: Scene, PerspectiveCamera, WebGLRenderer
```

**Geometries:**
```
Reference: llms-geometries.txt (14K) for extras
Core geometries in: llms-core-1.txt
```

**Animation:**
```
Reference: llms-animation.txt (16K)
```

**Effects:**
```
Reference: llms-effects.txt (16K)
```

**Debugging:**
```
Reference: llms-helpers.txt (32K)
```

## Recommended Loading Strategy

### For Beginners
Start with:
1. `llms-core-1.txt` - Basic scene setup
2. `llms-controls.txt` - Camera controls
3. `llms-animation.txt` - Simple animations

### For Intermediate Users
Add:
4. `llms-materials-math.txt` - Custom materials
5. `llms-loaders-1.txt` - Loading models
6. `llms-helpers.txt` - Debugging tools

### For Advanced Users
Reference as needed:
7. `llms-core-2.txt` & `llms-core-3.txt` - Advanced features
8. `llms-loaders-2.txt` - Additional loaders
9. `llms-exporters.txt` - Exporting functionality
10. `llms-effects.txt` - Post-processing

## Integration with Steering Docs

**Quick patterns:** Use `#ThreeJS` (threejs-reference.md)
**Detailed API:** Reference specific llms-*.txt files
**How-to guides:** Use steering docs
**Complete specs:** Use llms-*.txt files

## File Reference in Steering Docs

You can reference these files in steering docs using:
```markdown
#[[file:.kiro/reference/threejs-api/llms-controls.txt]]
```

## Original File

The complete, unsplit documentation remains at: `llms.txt` (3.7MB)

Use the split files for:
- Faster loading
- Focused context
- Reduced token usage
- Targeted reference

Use the original for:
- Complete searches
- Cross-referencing
- Backup reference
