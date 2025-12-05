---
inclusion: always
---

# Three.js API Reference Integration Guide

This document guides Kiro on how to use the split API documentation files effectively.

## File Location

All split API files are in: `.kiro/reference/threejs-api/`

## Quick Task-to-File Mapping

When a user asks about specific Three.js functionality, reference the appropriate file:

### Camera & Controls
**File:** `llms-controls.txt` (74K)
**Use for:** OrbitControls, TransformControls, FirstPersonControls, DragControls
**Reference:** `#[[file:.kiro/reference/threejs-api/llms-controls.txt]]`

### Loading 3D Models
**Files:** `llms-loaders-1.txt` (311K) or `llms-loaders-2.txt` (383K)
**Use for:** GLTFLoader, FBXLoader, OBJLoader, TextureLoader
**Reference:** `#[[file:.kiro/reference/threejs-api/llms-loaders-1.txt]]`

### Materials & Textures
**File:** `llms-materials-math.txt` (652K)
**Use for:** MeshStandardMaterial, ShaderMaterial, TextureLoader, Color, Vector3
**Reference:** `#[[file:.kiro/reference/threejs-api/llms-materials-math.txt]]`

### Animation
**File:** `llms-animation.txt` (16K)
**Use for:** AnimationClip, AnimationMixer, KeyframeTrack
**Reference:** `#[[file:.kiro/reference/threejs-api/llms-animation.txt]]`

### Core Classes
**File:** `llms-core-1.txt` (825K)
**Use for:** Scene, Camera, Renderer, Mesh, Object3D, Light classes
**Reference:** `#[[file:.kiro/reference/threejs-api/llms-core-1.txt]]`

### Geometries
**File:** `llms-geometries.txt` (14K) for extras, `llms-core-1.txt` for built-in
**Use for:** TextGeometry, DecalGeometry, RoundedBoxGeometry
**Reference:** `#[[file:.kiro/reference/threejs-api/llms-geometries.txt]]`

### Effects & Post-Processing
**File:** `llms-effects.txt` (16K)
**Use for:** OutlineEffect, AsciiEffect, StereoEffect
**Reference:** `#[[file:.kiro/reference/threejs-api/llms-effects.txt]]`

### Debugging & Helpers
**File:** `llms-helpers.txt` (32K)
**Use for:** AxesHelper, GridHelper, CameraHelper, LightHelper
**Reference:** `#[[file:.kiro/reference/threejs-api/llms-helpers.txt]]`

### Exporting
**File:** `llms-exporters.txt` (27K)
**Use for:** GLTFExporter, OBJExporter, STLExporter
**Reference:** `#[[file:.kiro/reference/threejs-api/llms-exporters.txt]]`

## Usage Strategy

### 1. Start with Practical Guide
First, check if `threejs-reference.md` (invoke with `#ThreeJS`) has the answer with practical examples.

### 2. Reference Specific API File
If detailed API specs are needed, reference the appropriate split file based on the task.

### 3. Provide Context
When referencing API files, extract only the relevant section to keep context focused.

### 4. Combine with Examples
Always combine API specs with practical code examples from threejs-reference.md.

## Example Workflows

### User asks: "How do I add OrbitControls?"

**Response pattern:**
1. Provide practical example from threejs-reference.md
2. If user needs detailed parameters, reference: `llms-controls.txt`
3. Show integration in this template's pattern

### User asks: "How do I load a GLTF model?"

**Response pattern:**
1. Provide basic loading example from threejs-reference.md
2. If user needs advanced options, reference: `llms-loaders-1.txt`
3. Show proper cleanup and error handling

### User asks: "What materials are available?"

**Response pattern:**
1. List common materials with use cases
2. Reference `llms-materials-math.txt` for complete list
3. Provide examples for MeshStandardMaterial (most common)

### User asks: "How do I create custom animations?"

**Response pattern:**
1. Show AnimationClipCreator examples from threejs-reference.md
2. Reference `llms-animation.txt` for all animation methods
3. Demonstrate integration with React useEffect

## File Size Considerations

### Load Small Files First (14-74K)
- Faster loading
- Focused content
- Good for specific tasks

### Load Large Files When Needed (311K-825K)
- Comprehensive reference
- Multiple related APIs
- Deep technical details

### Avoid Loading Multiple Large Files
- Keep context manageable
- Load only what's needed for current task
- Use original llms.txt for cross-file searches

## Integration with Code Generation

When generating code that uses Three.js APIs:

1. **Follow template patterns** from threejs-expert.md
2. **Reference API specs** from split files for exact parameters
3. **Apply best practices** from best-practices.md
4. **Ensure proper cleanup** (dispose, remove event listeners)
5. **Add helpful comments** explaining Three.js-specific concepts

## Searching Strategy

### For Known API
If you know the class/method name:
```bash
grep -n "## ClassName" .kiro/reference/threejs-api/llms-controls.txt
```

### For Unknown API
1. Check QUICK-REFERENCE.md for category
2. Load appropriate file
3. Search within file

### For Cross-Category Search
Use original llms.txt:
```bash
grep -i "keyword" llms.txt
```

## Remember

- **Don't load all files at once** - Be selective
- **Start with small files** - They're faster and focused
- **Combine with practical examples** - API specs alone aren't enough
- **Reference in context** - Only include relevant sections
- **Keep it practical** - Users want working code, not just specs

## Quick Reference Table

| User Need | File to Reference | Size |
|-----------|------------------|------|
| Camera controls | llms-controls.txt | 74K |
| Load models | llms-loaders-1.txt | 311K |
| Materials | llms-materials-math.txt | 652K |
| Animation | llms-animation.txt | 16K |
| Core setup | llms-core-1.txt | 825K |
| Debugging | llms-helpers.txt | 32K |
| Effects | llms-effects.txt | 16K |
| Export | llms-exporters.txt | 27K |

This ensures efficient, focused API reference usage while maintaining fast response times.
