# Three.js API Quick Reference Guide

Use this guide to quickly find which split file contains the API you need.

## Common Tasks → File Mapping

### 🎮 Camera Controls
**File:** `llms-controls.txt` (74K)
```
- OrbitControls (most common)
- TransformControls (object manipulation)
- FirstPersonControls (FPS games)
- DragControls (drag objects)
```

### 📦 Loading 3D Models
**Files:** `llms-loaders-1.txt` (311K) or `llms-loaders-2.txt` (383K)
```
- GLTFLoader (recommended format)
- FBXLoader (Autodesk format)
- OBJLoader (simple format)
- ColladaLoader (.dae files)
```

### 🎨 Materials & Textures
**File:** `llms-materials-math.txt` (652K)
```
- MeshStandardMaterial (PBR, most common)
- MeshPhongMaterial (shiny surfaces)
- MeshBasicMaterial (no lighting)
- ShaderMaterial (custom shaders)
- TextureLoader
```

### 🎬 Animation
**File:** `llms-animation.txt` (16K)
```
- AnimationClipCreator
- CreateRotationAnimation
- CreateScaleAnimation
- CreatePulsationAnimation
```

### 📐 Geometries
**File:** `llms-geometries.txt` (14K) for extras
**File:** `llms-core-1.txt` (825K) for built-in geometries
```
Extras:
- TextGeometry (3D text)
- DecalGeometry (decals on surfaces)
- RoundedBoxGeometry
- TeapotGeometry

Built-in (in core):
- BoxGeometry
- SphereGeometry
- PlaneGeometry
- CylinderGeometry
```

### 💡 Lighting
**File:** `llms-core-1.txt` (825K)
**File:** `llms-interactive-lights.txt` (27K) for utilities
```
Core lights:
- DirectionalLight (sun-like)
- PointLight (light bulb)
- SpotLight (flashlight)
- AmbientLight (overall illumination)
- HemisphereLight (sky/ground)

Utilities:
- RectAreaLight helpers
- LightProbeGenerator
```

### 🔧 Debugging & Helpers
**File:** `llms-helpers.txt` (32K)
```
- AxesHelper (show X/Y/Z axes)
- GridHelper (ground grid)
- CameraHelper (visualize camera frustum)
- DirectionalLightHelper
- VertexNormalsHelper
```

### ✨ Effects & Post-Processing
**File:** `llms-effects.txt` (16K)
```
- OutlineEffect (object outlines)
- AsciiEffect (ASCII art rendering)
- AnaglyphEffect (3D glasses)
- StereoEffect (VR)
```

### 📤 Exporting Models
**File:** `llms-exporters.txt` (27K)
```
- GLTFExporter (recommended)
- OBJExporter
- STLExporter (3D printing)
- PLYExporter
```

### 🧮 Math & Vectors
**File:** `llms-materials-math.txt` (652K)
```
- Vector3 (3D positions)
- Matrix4 (transformations)
- Quaternion (rotations)
- Euler (rotation angles)
- Color
```

### 🎯 Core Setup
**File:** `llms-core-1.txt` (825K)
```
- Scene
- PerspectiveCamera
- OrthographicCamera
- WebGLRenderer
- Object3D
- Mesh
- Group
```

### 🎪 Interactive Elements
**File:** `llms-interactive-lights.txt` (27K)
```
- SelectionBox (box selection)
- SelectionHelper
- InteractiveGroup
- HTMLMesh (HTML in 3D)
```

### 🌀 Curves & Paths
**File:** `llms-curves-csm.txt` (49K)
```
- NURBSCurve
- Various knot curves
- Parametric curves
- Custom curve types
```

## File Size Guide

### Start Here (Lightweight)
- `llms-animation.txt` - 16K ⚡
- `llms-effects.txt` - 16K ⚡
- `llms-geometries.txt` - 14K ⚡

### Common Use (Medium)
- `llms-controls.txt` - 74K 📦
- `llms-helpers.txt` - 32K 📦
- `llms-exporters.txt` - 27K 📦

### Deep Dive (Comprehensive)
- `llms-core-1.txt` - 825K 📚
- `llms-core-2.txt` - 741K 📚
- `llms-materials-math.txt` - 652K 📚

## Usage Examples

### Example 1: Setting up OrbitControls
```markdown
Reference: #[[file:.kiro/reference/threejs-api/llms-controls.txt]]
Search for: "## OrbitControls"
```

### Example 2: Loading a GLTF model
```markdown
Reference: #[[file:.kiro/reference/threejs-api/llms-loaders-1.txt]]
Search for: "GLTFLoader"
```

### Example 3: Creating custom material
```markdown
Reference: #[[file:.kiro/reference/threejs-api/llms-materials-math.txt]]
Search for: "MeshStandardMaterial" or "ShaderMaterial"
```

### Example 4: Adding animation
```markdown
Reference: #[[file:.kiro/reference/threejs-api/llms-animation.txt]]
Search for: "CreateRotationAnimation"
```

## Pro Tips

1. **Start with small files** - They load faster and are easier to search
2. **Use grep for searching** - `grep -n "ClassName" llms-controls.txt`
3. **Reference in steering docs** - Include file references for context
4. **Combine with threejs-reference.md** - Use steering doc for patterns, API files for specs
5. **Keep original llms.txt** - Use for comprehensive cross-file searches

## When to Use What

| Task | Use This | File Size |
|------|----------|-----------|
| Quick camera setup | llms-controls.txt | 74K |
| Load a model | llms-loaders-1.txt | 311K |
| Create material | llms-materials-math.txt | 652K |
| Add animation | llms-animation.txt | 16K |
| Debug scene | llms-helpers.txt | 32K |
| Core setup | llms-core-1.txt | 825K |
| Add effects | llms-effects.txt | 16K |
| Export model | llms-exporters.txt | 27K |

## Search Strategy

1. **Know your category** - Use this guide to find the right file
2. **Load only what you need** - Don't load all files at once
3. **Search within file** - Use grep or text search
4. **Extract relevant section** - Copy just what you need
5. **Reference in context** - Include in steering docs if frequently used
