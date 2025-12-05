---
inclusion: manual
contextKey: ThreeJSAPI
---

# Three.js API Documentation Reference

This directory contains the complete Three.js API documentation split into manageable sections.

## How to Use

The full Three.js API documentation (llms.txt - 3.7MB) has been organized into logical categories for easier reference and AI context management.

### Invoke with Context Key

Use `#ThreeJSAPI` to access this index, then reference specific sections as needed.

### File Organization

The documentation has been split into 14 files by category:

### Quick Reference (Small Files)
1. **llms-animation.txt** (16K) - Animation system
2. **llms-effects.txt** (16K) - Post-processing effects
3. **llms-geometries.txt** (14K) - Specialized geometries

### Common Use (Medium Files)
4. **llms-controls.txt** (74K) - Camera controls (OrbitControls, etc.)
5. **llms-curves-csm.txt** (49K) - Curves and shadow mapping
6. **llms-exporters.txt** (27K) - Model exporters
7. **llms-helpers.txt** (32K) - Debug helpers
8. **llms-interactive-lights.txt** (27K) - Interactive elements and lighting

### Comprehensive Reference (Large Files)
9. **llms-loaders-1.txt** (311K) - Asset loaders (part 1)
10. **llms-loaders-2.txt** (383K) - Asset loaders (part 2)
11. **llms-materials-math.txt** (652K) - Materials, math, textures
12. **llms-core-1.txt** (825K) - Core classes (part 1)
13. **llms-core-2.txt** (741K) - Core classes (part 2)
14. **llms-core-3.txt** (464K) - Core classes (part 3)

See **INDEX.md** for detailed contents of each file.

## Usage Strategy

Instead of loading the entire 3.7MB file, you can:

1. **Load specific split files** based on what you're working on
2. **Reference in steering docs** with `#[[file:.kiro/reference/threejs-api/llms-controls.txt]]`
3. **Start small** - Use the 14-32K files for quick reference
4. **Use the original llms.txt** as a fallback for comprehensive searches

## Integration with Steering Docs

The existing `threejs-reference.md` steering doc provides practical examples and patterns.
This API documentation provides the complete technical reference.

**Use threejs-reference.md for:** How-to guides, common patterns, troubleshooting
**Use this API reference for:** Detailed parameter lists, method signatures, class hierarchies

## Original Source

The complete documentation is available in the root directory as `llms.txt` (3.7MB).

This split structure makes it easier to:
- Load only relevant sections into context
- Navigate specific API areas
- Reduce token usage
- Maintain faster response times

## Note on File Splitting

Due to the size of llms.txt (91,216 lines), we recommend:
- Referencing specific sections rather than the whole file
- Using search tools to find specific APIs
- Keeping the original llms.txt as the source of truth
- Creating focused extracts for common use cases
