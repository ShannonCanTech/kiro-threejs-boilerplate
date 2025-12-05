# Steering Documents Overview

This directory contains the "brain" of the Three.js Kiro Template - steering documents that teach Kiro how to work with Three.js and this codebase.

## Available Steering Documents

### 1. threejs-reference.md
**Inclusion:** Manual (invoke with `#ThreeJS`)
**Purpose:** Comprehensive Three.js API reference

This is a detailed reference guide covering:
- Core concepts (Scene, Camera, Renderer)
- Camera operations and angle changes
- Geometries and materials
- Lighting systems
- Mesh operations and transformations
- Animation patterns
- Textures and loading
- Raycasting for interactivity
- Performance optimization
- Troubleshooting common issues

**Usage Example:**
```
User: "#ThreeJS How do I change the camera angle?"
Kiro: [Provides detailed camera positioning examples from reference]
```

### 2. threejs-expert.md
**Inclusion:** Always
**Purpose:** System prompt defining Kiro's role as Three.js expert

Teaches Kiro:
- How to approach Three.js development in this template
- Scene setup patterns specific to React + Three.js
- Resource management and cleanup
- Common tasks and how to implement them
- Code generation guidelines
- Error prevention strategies

This is the primary steering doc that shapes how Kiro responds to Three.js requests.

### 3. project-structure.md
**Inclusion:** Always
**Purpose:** Explains template organization and workflows

Covers:
- Directory structure and file organization
- Purpose of each directory (.kiro/, src/, public/)
- How users work with the template
- File creation guidelines
- Integration points for new features
- Common workflows and use cases

Helps Kiro understand where to create files and how components fit together.

### 4. best-practices.md
**Inclusion:** Always
**Purpose:** Performance optimization and best practices

Includes:
- Performance optimization techniques
- Common pitfalls and how to avoid them
- React-specific best practices
- Code organization patterns
- Debugging tips
- Security and accessibility considerations
- Pre-deployment checklist

Ensures Kiro generates high-quality, performant code.

### 5. api-reference-guide.md
**Inclusion:** Always
**Purpose:** Guide for using split API documentation files

Teaches Kiro:
- Which API file to reference for specific tasks
- Task-to-file mapping (e.g., camera controls → llms-controls.txt)
- When to use small vs large API files
- How to combine API specs with practical examples
- File size considerations for context management

Ensures efficient use of the 14 split API documentation files.

## How Steering Docs Work Together

1. **User asks a question** → `threejs-expert.md` guides Kiro's approach
2. **User needs quick examples** → Kiro suggests using `#ThreeJS` to access `threejs-reference.md`
3. **User needs detailed API specs** → `api-reference-guide.md` determines which split file to reference
4. **User creates new files** → `project-structure.md` determines where they go
5. **User needs optimization** → `best-practices.md` provides techniques

## Testing the Steering Docs

Try these prompts to see the steering docs in action:

### Basic Scene Creation
```
"Create a rotating cube scene"
```
Expected: Kiro creates a component following the patterns in threejs-expert.md

### API Reference
```
"#ThreeJS How do I add OrbitControls?"
```
Expected: Kiro provides detailed code from threejs-reference.md

### Detailed API Specs
```
"What are all the parameters for OrbitControls?"
```
Expected: Kiro references llms-controls.txt from split API files

### Optimization
```
"I need to render 1000 cubes efficiently"
```
Expected: Kiro suggests InstancedMesh from best-practices.md

### File Organization
```
"Create a new particle effect example"
```
Expected: Kiro creates file in src/examples/ per project-structure.md

## Customizing Steering Docs

You can modify these steering docs to fit your specific needs:

### Add Domain-Specific Knowledge
Create new steering docs for your use case:
- `game-mechanics.md` - For game development patterns
- `data-visualization.md` - For 3D data viz techniques
- `vr-patterns.md` - For WebXR/VR development

### Modify Inclusion Rules
Change front-matter to control when docs are included:
```markdown
---
inclusion: always
---
```

Or make it manual:
```markdown
---
inclusion: manual
contextKey: MyCustomKey
---
```

Then invoke with: `#MyCustomKey`

### Add File References
Include external files in steering docs:
```markdown
See the API specification: #[[file:api-spec.json]]
```

## Best Practices for Steering Docs

1. **Keep them focused** - Each doc should have a clear purpose
2. **Use examples** - Code examples are more effective than descriptions
3. **Update regularly** - Keep docs in sync with codebase changes
4. **Test thoroughly** - Verify Kiro responds as expected
5. **Be specific** - Concrete patterns work better than general advice

## Next Steps

Now that the steering docs are in place:
1. Create the minimal boilerplate code (src/ directory)
2. Build example implementations
3. Create specs for common workflows
4. Set up hooks for automation
5. Write comprehensive README.md

The "brain" is ready - time to build the "body"!
