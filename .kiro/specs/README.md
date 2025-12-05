# Three.js Example Specifications

This directory contains detailed specifications for example Three.js projects included in this template.

## What are Specs?

Specs are structured documents that guide the development of features or examples through three phases:
1. **Requirements** - What needs to be built and why
2. **Design** - How it will be built (architecture, patterns, configuration)
3. **Tasks** - Step-by-step implementation checklist

## Available Example Specs

### 1. Rotating Cube Example
**Location:** `rotating-cube-example/`
**Difficulty:** Beginner
**Estimated Time:** 2 hours

A simple Three.js example demonstrating fundamental concepts:
- Basic scene setup (Scene, Camera, Renderer)
- Creating geometry and materials
- Adding lighting
- Animation loop
- Proper cleanup

**Purpose:** Serves as the "Hello World" of Three.js, teaching core patterns.

**Files:**
- `requirements.md` - What the example should do
- `design.md` - How it's structured and configured
- `tasks.md` - Step-by-step implementation guide

### 2. Particle System Example
**Location:** `particle-system-example/`
**Difficulty:** Intermediate
**Estimated Time:** 2.5-3 hours

An advanced example demonstrating performance optimization:
- BufferGeometry and custom attributes
- Particle systems with 1000+ particles
- Mathematical animation (wave patterns)
- OrbitControls for interaction
- Performance optimization techniques

**Purpose:** Teaches advanced Three.js concepts and optimization strategies.

**Files:**
- `requirements.md` - Functional and non-functional requirements
- `design.md` - Architecture and implementation details
- `tasks.md` - Detailed task breakdown with code examples

## How to Use These Specs

### For Learning
1. Read the requirements to understand the goal
2. Study the design to see how it's structured
3. Follow the tasks step-by-step to implement
4. Compare your implementation with the final code

### For Building New Examples
1. Copy a spec directory as a template
2. Modify requirements for your use case
3. Update design with your architecture
4. Create task breakdown
5. Follow your own spec to implement

### With Kiro
Ask Kiro to help implement a spec:
```
"Help me implement the rotating-cube-example spec"
```

Kiro will:
- Read the requirements, design, and tasks
- Guide you through implementation
- Follow the patterns defined in the spec
- Apply best practices from steering docs

## Spec Structure

### requirements.md
- **Overview** - High-level description
- **Purpose** - Why this example exists
- **Functional Requirements** - What it must do
- **Non-Functional Requirements** - Performance, quality, accessibility
- **User Stories** - Who benefits and how
- **Success Criteria** - Definition of done
- **Out of Scope** - What's not included

### design.md
- **Architecture** - Component structure and data flow
- **Scene Configuration** - Camera, renderer, objects setup
- **Animation Logic** - How things move and update
- **Performance Optimization** - Techniques used
- **Resource Management** - Cleanup strategy
- **Code Organization** - File structure and patterns

### tasks.md
- **Phase Breakdown** - Logical groupings of work
- **Individual Tasks** - Specific, actionable items
- **Acceptance Criteria** - How to know it's done
- **Code References** - Example implementations
- **Time Estimates** - How long each phase takes
- **Testing Checklist** - Verification steps

## Creating Your Own Specs

### Step 1: Create Directory
```bash
mkdir -p .kiro/specs/my-example/
```

### Step 2: Write Requirements
Define what you want to build and why:
- What problem does it solve?
- Who is it for?
- What are the key features?
- What are the constraints?

### Step 3: Design the Solution
Plan the implementation:
- How will it be structured?
- What Three.js objects are needed?
- How will animation work?
- What are the performance considerations?

### Step 4: Break Down Tasks
Create actionable steps:
- Organize into logical phases
- Make tasks specific and measurable
- Include code examples
- Estimate time for each task

### Step 5: Implement
Follow your spec:
- Work through tasks in order
- Check off completed items
- Adjust spec if needed
- Document learnings

## Spec Template

Use this template for new specs:

```markdown
# [Example Name] - Requirements

## Overview
Brief description of the example

## Purpose
Why this example exists and what it teaches

## Functional Requirements
### FR1: [Feature Name]
- Specific requirement
- Another requirement

## Non-Functional Requirements
### NFR1: [Quality Attribute]
- Performance target
- Quality standard

## Success Criteria
- [ ] Criterion 1
- [ ] Criterion 2

## References
- Relevant documentation
- Related examples
```

## Benefits of Using Specs

### For Developers
- Clear roadmap for implementation
- Reduces decision fatigue
- Ensures nothing is forgotten
- Easy to track progress

### For Teams
- Shared understanding of goals
- Consistent implementation patterns
- Easy to review and provide feedback
- Documentation for future reference

### For AI Assistance
- Kiro can follow specs precisely
- Reduces back-and-forth clarification
- Ensures consistent code quality
- Applies template patterns automatically

## Integration with Template

### Steering Docs
Specs reference steering docs for patterns:
- `threejs-expert.md` - Scene setup patterns
- `best-practices.md` - Optimization techniques
- `project-structure.md` - File organization

### API Documentation
Specs reference API docs for details:
- `llms-controls.txt` - For OrbitControls
- `llms-core-1.txt` - For core classes
- `llms-animation.txt` - For animation

### Hooks
Specs can trigger hooks:
- Validation on file save
- Performance checks
- Code quality reviews

## Example Workflow

### 1. Choose a Spec
```
User: "I want to learn about particle systems"
Kiro: "Let's follow the particle-system-example spec!"
```

### 2. Review Requirements
```
User: "Show me what we'll build"
Kiro: [Summarizes requirements.md]
```

### 3. Understand Design
```
User: "How will it work?"
Kiro: [Explains design.md architecture]
```

### 4. Implement Tasks
```
User: "Let's start building"
Kiro: [Guides through tasks.md step-by-step]
```

### 5. Verify Success
```
User: "Is it done?"
Kiro: [Checks against success criteria]
```

## Best Practices

### Writing Specs
1. **Be specific** - Vague requirements lead to confusion
2. **Include examples** - Code snippets clarify intent
3. **Set clear criteria** - Define what "done" means
4. **Estimate realistically** - Help users plan their time
5. **Reference docs** - Link to relevant documentation

### Following Specs
1. **Read completely first** - Understand the full picture
2. **Follow in order** - Tasks build on each other
3. **Check off items** - Track your progress
4. **Ask for help** - Use Kiro when stuck
5. **Adapt as needed** - Specs are guides, not rules

### Maintaining Specs
1. **Update regularly** - Keep in sync with code
2. **Document changes** - Note why specs were modified
3. **Get feedback** - Improve based on user experience
4. **Version control** - Track spec evolution
5. **Share learnings** - Help others avoid pitfalls

## Future Specs (Ideas)

Potential examples to add:
- **3D Model Loader** - Loading and displaying GLTF models
- **Interactive Game** - Simple game with physics
- **Data Visualization** - 3D charts and graphs
- **Terrain Generator** - Procedural landscape
- **VR Experience** - WebXR integration
- **Post-Processing** - Effects and filters
- **Custom Shaders** - GLSL shader examples

## Contributing

To add a new spec:
1. Create directory in `.kiro/specs/`
2. Write requirements.md
3. Write design.md
4. Write tasks.md
5. Test by implementing
6. Update this README
7. Submit for review

## Resources

- Template patterns: `.kiro/steering/`
- API reference: `.kiro/reference/threejs-api/`
- Three.js docs: https://threejs.org/docs/
- React docs: https://react.dev/

---

These specs are living documents - they evolve as we learn and improve. Use them as guides, adapt them to your needs, and share your improvements!
