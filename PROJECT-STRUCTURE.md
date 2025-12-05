# Three.js Kiro Template - Complete Project Structure

This document provides a complete overview of the project structure and organization.

## Directory Tree

```
three-js-kiro-template/
├── .kiro/                          # AI "brain" - steering docs, specs, hooks
│   ├── steering/                   # Steering documents (always/manual inclusion)
│   │   ├── threejs-reference.md    # Practical Three.js guide (#ThreeJS)
│   │   ├── threejs-expert.md       # System prompt for Kiro
│   │   ├── project-structure.md    # This project's organization
│   │   ├── best-practices.md       # Performance & optimization
│   │   ├── api-reference-guide.md  # Guide for using split API files
│   │   └── README.md               # Steering docs overview
│   ├── reference/                  # API documentation
│   │   └── threejs-api/            # Split Three.js API docs
│   │       ├── llms-animation.txt  # Animation APIs (16K)
│   │       ├── llms-controls.txt   # Camera controls (74K)
│   │       ├── llms-core-1.txt     # Core classes part 1 (825K)
│   │       ├── llms-core-2.txt     # Core classes part 2 (741K)
│   │       ├── llms-core-3.txt     # Core classes part 3 (464K)
│   │       ├── llms-effects.txt    # Post-processing (16K)
│   │       ├── llms-exporters.txt  # Model exporters (27K)
│   │       ├── llms-geometries.txt # Specialized geometries (14K)
│   │       ├── llms-helpers.txt    # Debug helpers (32K)
│   │       ├── llms-interactive-lights.txt # Interactive elements (27K)
│   │       ├── llms-loaders-1.txt  # Asset loaders part 1 (311K)
│   │       ├── llms-loaders-2.txt  # Asset loaders part 2 (383K)
│   │       ├── llms-materials-math.txt # Materials & math (652K)
│   │       ├── llms-curves-csm.txt # Curves & shadow mapping (49K)
│   │       ├── INDEX.md            # Detailed file contents
│   │       ├── QUICK-REFERENCE.md  # Task-based lookup
│   │       ├── README.md           # API docs overview
│   │       └── how-to-use-llms-txt.md # Search guide
│   ├── specs/                      # Feature specifications
│   │   ├── rotating-cube-example/  # Beginner example spec
│   │   │   ├── requirements.md     # What to build
│   │   │   ├── design.md           # How to build it
│   │   │   └── tasks.md            # Step-by-step tasks
│   │   ├── particle-system-example/ # Intermediate example spec
│   │   │   ├── requirements.md
│   │   │   ├── design.md
│   │   │   └── tasks.md
│   │   └── README.md               # Specs overview
│   ├── hooks/                      # Agent automation
│   │   ├── hooks.json              # Hook configurations
│   │   └── README.md               # Hooks documentation
│   └── SETUP-COMPLETE.md           # Setup summary
├── src/                            # Source code
│   ├── components/                 # Reusable React components
│   │   └── (UI components, wrappers, etc.)
│   ├── examples/                   # Example Three.js scenes
│   │   ├── RotatingCube.jsx        # Beginner example
│   │   └── ParticleSystem.jsx      # Intermediate example
│   ├── scenes/                     # Complete scene compositions
│   │   └── (Full scenes combining multiple elements)
│   ├── utils/                      # Utility functions
│   │   ├── threeHelpers.js         # Three.js helper functions
│   │   └── assetLoader.js          # Asset loading utilities
│   ├── hooks/                      # Custom React hooks
│   │   └── (useThreeScene, useAnimation, etc.)
│   ├── contexts/                   # React contexts
│   │   └── (ThemeContext, SceneContext, etc.)
│   ├── styles/                     # CSS/styling files
│   │   └── (global.css, components.css, etc.)
│   ├── App.jsx                     # Main React app
│   ├── Scene.jsx                   # Basic scene component
│   └── main.jsx                    # Entry point
├── public/                         # Static assets
│   ├── assets/                     # Organized asset library (includes KayKit Collection)
│   │   ├── models/                 # 3D models
│   │   │   ├── characters/         # Character models (KayKit Adventurers, Skeletons)
│   │   │   ├── animations/         # Animation files (KayKit Animations)
│   │   │   ├── furniture/          # Furniture objects
│   │   │   ├── buildings/          # Building models
│   │   │   ├── objects/            # General props (KayKit Dungeon, City, Forest, etc.)
│   │   │   ├── vehicles/           # Vehicle models
│   │   │   └── README.md           # Models documentation
│   │   ├── textures/               # Texture files
│   │   │   ├── characters/         # Character textures
│   │   │   ├── environments/       # Skyboxes, HDRIs
│   │   │   ├── materials/          # PBR texture sets
│   │   │   │   ├── wood-oak/       # Oak wood PBR set
│   │   │   │   ├── metal-steel/    # Steel PBR set
│   │   │   │   └── concrete/       # Concrete PBR set
│   │   │   ├── ui/                 # UI textures
│   │   │   └── README.md           # Textures documentation
│   │   ├── audio/                  # Sound files
│   │   │   ├── music/              # Background music
│   │   │   └── sfx/                # Sound effects
│   │   ├── fonts/                  # Font files for 3D text
│   │   ├── README.md               # Assets overview
│   │   └── KAYKIT-ASSETS.md        # KayKit Collection inventory
│   └── index.html                  # HTML entry point
├── llms.txt                        # Complete Three.js API (3.7MB)
├── package.json                    # Dependencies and scripts
├── vite.config.js                  # Vite configuration
├── .gitignore                      # Git ignore rules
├── PROJECT-STRUCTURE.md            # This file
└── README.md                       # Main documentation
```

## Directory Purposes

### .kiro/ - The "Brain"
Contains all AI-related documentation that teaches Kiro how to work with this template.

**steering/** - Documents that guide Kiro's behavior
- Always-included docs shape every response
- Manual docs invoked with context keys (e.g., `#ThreeJS`)
- Defines patterns, best practices, and workflows

**reference/** - API documentation
- Split Three.js API for selective loading
- Organized by functionality (controls, loaders, core, etc.)
- Reduces context size, improves response speed

**specs/** - Feature specifications
- Structured development workflows
- Requirements → Design → Tasks
- Example projects with step-by-step guides

**hooks/** - Automated workflows
- Trigger on events (file save, message, etc.)
- Validate code, suggest improvements, generate examples
- Enhance development experience

### src/ - Source Code
Contains all application source code organized by purpose.

**components/** - Reusable React components
- UI components (buttons, panels, menus)
- Three.js wrappers
- Shared functionality

**examples/** - Example Three.js scenes
- Learning examples (RotatingCube, ParticleSystem)
- Demonstrate specific techniques
- Well-commented for education

**scenes/** - Complete scene compositions
- Full scenes combining multiple elements
- Game levels, environments, experiences
- Production-ready implementations

**utils/** - Utility functions
- Three.js helpers (lighting setup, camera creation)
- Asset loading utilities
- Common calculations and operations

**hooks/** - Custom React hooks
- useThreeScene - Scene setup and cleanup
- useAnimation - Animation loop management
- useAssetLoader - Asset loading with progress

**contexts/** - React contexts
- Global state management
- Theme, settings, scene data
- Shared across components

**styles/** - CSS and styling
- Global styles
- Component-specific styles
- Theme definitions

### public/ - Static Assets
Contains all static files served directly by the web server.

**assets/models/** - 3D Models
- Organized by category (characters, furniture, buildings, etc.)
- GLTF/GLB format recommended
- Includes animations

**assets/textures/** - Texture Files
- PBR texture sets (albedo, normal, roughness, etc.)
- Environment maps and skyboxes
- UI textures and sprites

**assets/audio/** - Sound Files
- Background music
- Sound effects
- Compressed formats (MP3, OGG)

**assets/fonts/** - Font Files
- For 3D text rendering
- TTF, OTF, WOFF formats

### Included Assets - KayKit Collection

This template includes high-quality 3D assets from the **KayKit Collection** by Kay Lousberg (www.kaylousberg.com).

**License:** CC0 (Creative Commons Zero) - Free for any use, no attribution required

**Included Packs:**
- KayKit Adventurers 2.0 - Characters and animations
- KayKit Skeletons 1.1 - Enemy characters
- KayKit Character Animations 1.0 - Animation library
- KayKit Dungeon Remastered 1.1 - Dungeon environment
- KayKit City Builder Bits 1.0 - City building pieces
- KayKit Forest Nature Pack 1.0 - Nature assets
- KayKit Halloween Bits 1.0 - Halloween props
- KayKit Platformer Pack 1.0 - Platform game assets
- KayKit Resource Bits 1.0 - Resource items

**Documentation:** See `public/assets/KAYKIT-ASSETS.md` for complete inventory

**Support KayKit:** https://kaylousberg.itch.io/ | http://patreon.com/kaylousberg

## File Naming Conventions

### Source Code
- **Components:** PascalCase - `RotatingCube.jsx`, `SceneWrapper.jsx`
- **Utilities:** camelCase - `threeHelpers.js`, `assetLoader.js`
- **Hooks:** camelCase with 'use' prefix - `useThreeScene.js`
- **Contexts:** PascalCase with 'Context' suffix - `ThemeContext.jsx`

### Assets
- **Models:** lowercase-with-hyphens - `character-knight.glb`
- **Textures:** lowercase-with-hyphens - `wood-oak-albedo.jpg`
- **Audio:** lowercase-with-hyphens - `background-music-1.mp3`

### Documentation
- **Markdown:** UPPERCASE or lowercase - `README.md`, `requirements.md`
- **Configs:** lowercase - `package.json`, `vite.config.js`

## Key Files

### Configuration Files

**package.json**
- Dependencies (React, Three.js, etc.)
- Scripts (dev, build, preview)
- Project metadata

**vite.config.js**
- Vite bundler configuration
- Build settings
- Plugin configuration

**.gitignore**
- Files to exclude from version control
- node_modules, dist, .env, etc.

### Entry Points

**public/index.html**
- HTML template
- Root div for React
- Meta tags, title

**src/main.jsx**
- JavaScript entry point
- Renders React app
- Imports global styles

**src/App.jsx**
- Main React component
- Routing (if applicable)
- Layout structure

### Core Components

**src/Scene.jsx**
- Basic Three.js scene
- Minimal boilerplate
- Starting point for users

**src/examples/RotatingCube.jsx**
- Beginner example
- Demonstrates fundamentals
- Well-commented

**src/examples/ParticleSystem.jsx**
- Intermediate example
- Performance optimization
- Advanced techniques

## Development Workflow

### 1. Clone and Setup
```bash
git clone <repo-url>
cd three-js-kiro-template
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Explore Examples
- Open browser to localhost
- View RotatingCube example
- View ParticleSystem example
- Read code comments

### 4. Use Kiro for Development
```
"Create a new scene with a bouncing ball"
"#ThreeJS How do I add OrbitControls?"
"Optimize this scene for performance"
```

### 5. Add Assets
- Place models in `public/assets/models/`
- Place textures in `public/assets/textures/`
- Follow naming conventions
- Update README if needed

### 6. Build for Production
```bash
npm run build
npm run preview
```

## Integration Points

### Adding New Examples
1. Create component in `src/examples/`
2. Follow template patterns from steering docs
3. Import in `App.jsx`
4. Add navigation if needed

### Adding New Assets
1. Place in appropriate `public/assets/` subdirectory
2. Follow naming conventions
3. Test loading in a scene
4. Document if complex

### Creating New Specs
1. Create directory in `.kiro/specs/`
2. Write requirements.md, design.md, tasks.md
3. Follow existing spec structure
4. Update specs README

### Adding Custom Hooks
1. Create in `.kiro/hooks/hooks.json`
2. Define trigger and action
3. Test thoroughly
4. Document in hooks README

## Best Practices

### Code Organization
- Keep components focused and single-purpose
- Use utils for shared functionality
- Follow React best practices
- Apply Three.js patterns from steering docs

### Asset Management
- Optimize before importing
- Use appropriate file formats
- Follow naming conventions
- Document complex assets

### Performance
- Dispose resources properly
- Reuse geometries and materials
- Use InstancedMesh for repeated objects
- Follow best-practices.md guidelines

### Documentation
- Comment complex code
- Update READMEs when adding features
- Keep specs in sync with code
- Document breaking changes

## Customization

### For Game Development
- Add `src/game/` directory for game logic
- Create game-specific specs
- Add game mechanics steering doc
- Include game assets

### For Data Visualization
- Add `src/visualizations/` directory
- Create data processing utilities
- Add data-viz steering doc
- Include sample datasets

### For VR/AR
- Add WebXR support
- Create VR-specific components
- Add VR patterns steering doc
- Include VR examples

## Resources

### Internal Documentation
- Steering docs: `.kiro/steering/`
- API reference: `.kiro/reference/threejs-api/`
- Specs: `.kiro/specs/`
- Asset docs: `public/assets/README.md`

### External Resources
- Three.js docs: https://threejs.org/docs/
- React docs: https://react.dev/
- Vite docs: https://vitejs.dev/

---

This structure is designed to be:
- **Organized** - Everything has a logical place
- **Scalable** - Easy to add new features
- **Documented** - Clear purpose for each directory
- **AI-Friendly** - Kiro understands the structure
- **Developer-Friendly** - Easy to navigate and use
