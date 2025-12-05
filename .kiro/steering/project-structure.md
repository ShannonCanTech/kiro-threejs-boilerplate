---
inclusion: always
---

# Three.js Kiro Template - Project Structure

This document explains the organization and purpose of this template repository.

## Project Overview

This is an intelligent Three.js starter template that combines:
- **Minimal Boilerplate**: React + Vite + Three.js setup ready to run
- **AI Brain**: Steering docs, specs, and hooks that teach Kiro how to work with Three.js
- **Example Implementations**: Two working examples demonstrating key concepts

## Directory Structure

```
three-js-kiro-template/
├── .kiro/
│   ├── steering/              # AI knowledge base
│   │   ├── threejs-reference.md      # Comprehensive Three.js reference (invoke with #ThreeJS)
│   │   ├── threejs-expert.md         # System prompt for Three.js development
│   │   ├── project-structure.md      # This file - explains the template
│   │   └── best-practices.md         # Performance and optimization guidelines
│   ├── specs/                 # Pre-built feature specifications
│   │   ├── example-game/            # Spec for building a simple game
│   │   └── example-scene/           # Spec for creating a 3D scene
│   └── hooks/                 # Automation and workflows
│       └── hooks.json               # Auto-run tasks on file changes
├── src/
│   ├── App.jsx                # Main React app entry point
│   ├── Scene.jsx              # Minimal Three.js scene (the boilerplate)
│   ├── examples/              # Working examples to learn from
│   │   ├── RotatingCube.jsx         # Example 1: Basic animated object
│   │   └── ParticleSystem.jsx       # Example 2: Particle effects
│   └── utils/
│       └── threeHelpers.js          # Reusable Three.js utilities
├── public/                    # Static assets (textures, models, etc.)
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
└── README.md                  # Getting started guide
```

## The "Brain" (.kiro/ directory)

### Steering Documents
These teach Kiro how to work with this template:

1. **threejs-reference.md** (Manual inclusion via `#ThreeJS`)
   - Comprehensive Three.js API reference
   - Code examples for common tasks
   - Troubleshooting guide
   - Users invoke with: `#ThreeJS How do I change the camera angle?`

2. **threejs-expert.md** (Always included)
   - System prompt defining Kiro's role as Three.js expert
   - Code patterns specific to this template
   - Guidelines for generating and modifying code
   - Common user requests and responses

3. **project-structure.md** (Always included)
   - This file - explains how the template is organized
   - Helps Kiro understand where to create files
   - Defines the purpose of each directory

4. **best-practices.md** (Always included)
   - Performance optimization techniques
   - Three.js best practices
   - Common pitfalls and how to avoid them

### Specs
Pre-built specifications for common use cases:

- **example-game/**: Step-by-step spec for building a simple game
- **example-scene/**: Spec for creating an interactive 3D scene

Users can follow these specs to learn the workflow, then create their own.

### Hooks
Automated workflows that trigger on events:

- Auto-run dev server when files change
- Validate Three.js patterns
- Run tests automatically
- Hot reload helpers

## The "Body" (src/ directory)

### Core Files

**App.jsx**
- Main React component
- Renders the active scene
- Handles routing between examples (if needed)

**Scene.jsx**
- The minimal boilerplate scene
- Basic Three.js setup with camera, renderer, lighting
- Starting point for new users
- Demonstrates the core pattern

### Examples Directory

**RotatingCube.jsx**
- Simple animated 3D object
- Demonstrates basic geometry, material, and animation
- Shows the animation loop pattern
- Good starting point for beginners

**ParticleSystem.jsx**
- More advanced example with particle effects
- Demonstrates BufferGeometry and custom attributes
- Shows performance optimization techniques
- Introduces more complex animations

### Utils Directory

**threeHelpers.js**
- Reusable utility functions
- Common setup code (lights, camera, etc.)
- Helper functions for calculations
- Reduces boilerplate in scene components

## How Users Work With This Template

### 1. Clone and Setup
```bash
git clone <repo-url>
cd three-js-kiro-template
npm install
npm run dev
```

### 2. Explore Examples
- Look at `src/examples/` to see working implementations
- Run the dev server and see them in action
- Read the code comments to understand patterns

### 3. Use Kiro for Development
Users can ask Kiro to:
- "Create a new scene with a bouncing ball"
- "Add mouse interaction to select objects"
- "Generate a terrain with procedural noise"
- "#ThreeJS How do I add textures?"
- "Make the camera orbit around the scene"

### 4. Reference Documentation
- Use `#ThreeJS` in chat to access comprehensive reference
- Steering docs are always active, guiding Kiro's responses
- Specs provide structured workflows for complex features

## File Creation Guidelines

### When Creating New Scene Components
- Place in `src/examples/` if it's a learning example
- Place in `src/` if it's part of the main app
- Use descriptive names: `BouncingBalls.jsx`, `TerrainGenerator.jsx`
- Follow the scene setup pattern from threejs-expert.md

### When Adding Utilities
- Place reusable functions in `src/utils/threeHelpers.js`
- Keep utilities focused and well-documented
- Export named functions, not default exports

### When Adding Assets
- Place textures, models, fonts in `public/`
- Organize by type: `public/textures/`, `public/models/`
- Use relative paths from public: `/textures/wood.jpg`

## Integration Points

### Adding New Examples
1. Create component in `src/examples/`
2. Import in `App.jsx`
3. Add to navigation/routing if needed
4. Document the technique being demonstrated

### Creating Specs
1. Create directory in `.kiro/specs/`
2. Add requirements.md, design.md, tasks.md
3. Reference relevant files with `#[[file:...]]`
4. Test the spec workflow

### Adding Hooks
1. Edit `.kiro/hooks/hooks.json`
2. Define trigger event
3. Specify action (message or command)
4. Test the automation

## Template Philosophy

### Minimal but Complete
- Enough to get started immediately
- Not overwhelming with features
- Easy to understand and modify
- Room to grow based on needs

### AI-Powered Development
- Kiro knows how to work with this codebase
- Steering docs provide consistent guidance
- Specs enable structured feature development
- Hooks automate repetitive tasks

### Learning-Focused
- Examples demonstrate key concepts
- Code is well-commented
- Patterns are consistent
- Encourages experimentation

## Common Workflows

### "I want to create a game"
1. User: "Help me build a simple game"
2. Kiro suggests following the example-game spec
3. Work through requirements → design → implementation
4. Iterate and refine

### "I need a specific scene"
1. User: "Create a solar system visualization"
2. Kiro asks clarifying questions
3. Generates new component in `src/examples/`
4. Provides integration instructions

### "How do I do X?"
1. User: "#ThreeJS How do I add shadows?"
2. Kiro references threejs-reference.md
3. Provides code example specific to this template
4. Suggests where to implement it

### "Optimize my scene"
1. User: "This is running slow"
2. Kiro reads the scene code
3. Applies best-practices.md guidelines
4. Suggests specific optimizations

## Extending the Template

Users can customize this template by:
- Adding more examples in `src/examples/`
- Creating custom steering docs for their domain
- Building specs for their specific use cases
- Adding hooks for their workflow
- Integrating additional libraries (physics, post-processing, etc.)

## Remember

This template is a starting point, not a framework. It's designed to:
- Get users productive quickly
- Teach Three.js concepts through examples
- Leverage AI to accelerate development
- Stay out of the way as projects grow

The "brain" (steering docs) can be modified to fit different use cases, making this template adaptable to various Three.js projects.
