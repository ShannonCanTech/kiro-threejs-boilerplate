# Rotating Cube Example - Requirements

## Overview
Create a simple Three.js example that demonstrates the fundamental concepts: scene setup, geometry, material, lighting, and animation. This serves as the "Hello World" of Three.js.

## Purpose
This example is designed to:
- Teach basic Three.js scene structure
- Demonstrate the animation loop
- Show proper React integration
- Illustrate resource cleanup
- Serve as a starting point for beginners

## Functional Requirements

### FR1: Scene Setup
- Create a Three.js scene with camera and renderer
- Position camera for optimal viewing
- Configure renderer with antialiasing

### FR2: Cube Object
- Create a cube geometry (1x1x1 units)
- Apply a colored material (green)
- Add the cube to the scene

### FR3: Lighting
- Add ambient light for base illumination
- Add directional light for depth and shadows
- Position lights for good visibility

### FR4: Animation
- Rotate cube continuously on X and Y axes
- Use requestAnimationFrame for smooth animation
- Maintain consistent rotation speed

### FR5: Responsive Design
- Handle window resize events
- Update camera aspect ratio
- Resize renderer to match window

### FR6: Cleanup
- Dispose geometry on unmount
- Dispose material on unmount
- Dispose renderer on unmount
- Remove DOM elements properly

## Non-Functional Requirements

### NFR1: Performance
- Maintain 60 FPS on modern devices
- Minimal memory usage
- No memory leaks

### NFR2: Code Quality
- Follow React best practices
- Use proper TypeScript/JSX patterns
- Include helpful comments
- Clear variable names

### NFR3: Accessibility
- Provide alternative text description
- Ensure keyboard navigation works
- Support screen readers

## Technical Constraints

### Dependencies
- React 18+
- Three.js (latest stable)
- Vite for bundling

### Browser Support
- Modern browsers with WebGL support
- Chrome, Firefox, Safari, Edge (latest versions)

## User Stories

### US1: As a beginner
I want to see a simple working example
So that I can understand the basic Three.js structure

### US2: As a developer
I want to see proper cleanup patterns
So that I can avoid memory leaks in my projects

### US3: As a learner
I want clear comments explaining each step
So that I can understand what the code does

## Success Criteria

- [ ] Cube renders and is visible
- [ ] Cube rotates smoothly
- [ ] Scene responds to window resize
- [ ] No console errors or warnings
- [ ] Proper cleanup on component unmount
- [ ] Code is well-commented
- [ ] Follows template patterns

## Out of Scope

- User interaction (clicking, dragging)
- Complex geometries
- Textures or advanced materials
- Post-processing effects
- Multiple objects
- Physics simulation
- Loading 3D models (see KayKit assets for that)

## Available Assets

This template includes the **KayKit Collection** by Kay Lousberg (CC0 license):
- Characters, animations, dungeon pieces, nature assets, and more
- See `public/assets/KAYKIT-ASSETS.md` for complete inventory
- While not used in this basic example, these assets are available for more advanced projects

## References

- Three.js documentation: https://threejs.org/docs/
- React hooks: https://react.dev/reference/react
- Template patterns: See `.kiro/steering/threejs-expert.md`
- KayKit assets: See `public/assets/KAYKIT-ASSETS.md`
