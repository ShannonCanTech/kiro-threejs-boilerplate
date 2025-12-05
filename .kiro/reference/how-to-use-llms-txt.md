---
inclusion: manual
contextKey: APIReference
---

# How to Use the Three.js API Documentation (llms.txt)

The `llms.txt` file in the root directory contains the complete Three.js API documentation (3.7MB, 91,216 lines).

## Quick Reference Commands

### Search for Specific APIs

```bash
# Find a specific class or method
grep -n "## ClassName" llms.txt

# Search for specific functionality
grep -i "keyword" llms.txt

# Get line numbers for a section
grep -n "## OrbitControls" llms.txt
```

### Extract Specific Sections

```bash
# Extract lines 1000-2000
sed -n '1000,2000p' llms.txt

# Extract a specific class documentation
awk '/## OrbitControls/,/^## [^#]/' llms.txt
```

## Common API Sections (Line Numbers)

Based on the structure, here are approximate locations:

- **Animation**: Lines 1-500
- **Controls**: Lines 373-2213
  - OrbitControls: ~1118
  - TransformControls: ~1887
- **Geometries**: Search for "Geometry"
- **Materials**: Search for "Material"
- **Lights**: Search for "Light"
- **Loaders**: Search for "Loader"

## When to Use llms.txt vs threejs-reference.md

### Use `threejs-reference.md` (Steering Doc) for:
- Quick how-to guides
- Common patterns and examples
- Troubleshooting
- Best practices
- Code snippets ready to use

### Use `llms.txt` (API Reference) for:
- Complete method signatures
- All available parameters
- Class hierarchies
- Detailed technical specifications
- Less common APIs

## Practical Workflow

1. **Start with threejs-reference.md** - Get the pattern and example
2. **Check llms.txt if needed** - For detailed parameters or advanced options
3. **Use grep/search** - Find specific APIs quickly

## Example: Finding OrbitControls Documentation

```bash
# Find where OrbitControls starts
grep -n "^## OrbitControls" llms.txt
# Output: 1118:## OrbitControls ⇐ <code>Controls</code>

# Read that section (approximately 400 lines)
sed -n '1118,1538p' llms.txt
```

## Integration with Kiro

When asking Kiro about Three.js:

**For common tasks:**
```
"#ThreeJS How do I add OrbitControls?"
```
Uses the steering doc with practical examples.

**For detailed API info:**
```
"Check llms.txt for all OrbitControls parameters"
```
Kiro can search and extract specific sections.

**For specific methods:**
```
"What are all the parameters for PerspectiveCamera constructor?"
```
Kiro can grep the API docs for exact signatures.

## File Structure

```
llms.txt (3.7MB)
├── Animation classes
├── Controls (OrbitControls, TransformControls, etc.)
├── Geometries (BoxGeometry, SphereGeometry, etc.)
├── Materials (MeshStandardMaterial, etc.)
├── Lights (DirectionalLight, PointLight, etc.)
├── Cameras (PerspectiveCamera, etc.)
├── Loaders (GLTFLoader, TextureLoader, etc.)
├── Math utilities (Vector3, Matrix4, etc.)
├── Core classes (Scene, Renderer, etc.)
└── Helpers and utilities
```

## Tips

1. **Don't load the entire file** - It's too large for context
2. **Search first** - Use grep to find what you need
3. **Extract sections** - Pull out 100-500 lines at a time
4. **Use steering docs** - They're optimized for common use cases
5. **Reference when needed** - llms.txt is there for deep dives

## Creating Focused Extracts

If you frequently need specific sections, create focused extracts:

```bash
# Extract OrbitControls to a separate file
sed -n '1118,1538p' llms.txt > .kiro/reference/threejs-api/orbit-controls.md

# Extract all Controls
grep -A 100 "## .*Controls" llms.txt > .kiro/reference/threejs-api/controls.md
```

This keeps commonly-used APIs readily available without loading the full 3.7MB file.
