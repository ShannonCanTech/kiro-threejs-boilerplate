# Three.js Kiro Template

An intelligent Three.js starter template with AI-powered development assistance through Kiro. This template combines minimal boilerplate code with comprehensive AI guidance to accelerate 3D web development.

## 🎯 What Makes This Template Special

This isn't just another Three.js boilerplate. It's an **intelligent template** that includes:

- **AI "Brain"** - Steering documents that teach Kiro how to work with Three.js
- **Minimal Boilerplate** - Clean React + Three.js setup ready to run
- **Example Implementations** - Two working examples (beginner & intermediate)
- **Comprehensive Documentation** - API references, specs, and guides
- **High-Quality Assets** - KayKit Collection (10 asset packs, CC0 license)
- **Automated Workflows** - Hooks for validation and optimization

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd threejs-kiro-template

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:3000 to see the template in action!

## 📁 Project Structure

```
threejs-kiro-template/
├── .kiro/                  # AI "brain" - steering docs, specs, hooks
│   ├── steering/           # Guides Kiro's behavior
│   ├── reference/          # Split Three.js API docs
│   ├── specs/              # Feature specifications
│   └── hooks/              # Automated workflows
├── src/                    # Source code
│   ├── examples/           # Example scenes
│   ├── utils/              # Helper functions
│   ├── App.jsx             # Main app
│   └── Scene.jsx           # Basic scene
├── public/                 # Static assets
│   └── assets/             # KayKit Collection (10 packs)
└── package.json
```

## 🎨 Included Examples

### 1. Basic Scene
Minimal Three.js setup with a rotating sphere. Perfect starting point.

### 2. Rotating Cube
Beginner example demonstrating:
- Scene setup
- Geometry and materials
- Lighting
- Animation
- Proper cleanup

### 3. Particle System
Intermediate example showcasing:
- BufferGeometry
- 1000+ particles
- Wave animation
- OrbitControls
- Performance optimization

### Running Individual Scenes

By default, the app shows all three scenes with navigation. To run a single scene:

**Edit `src/main.jsx` and change the import:**

```javascript
// All scenes with navigation (default)
import App from './App'

// Single scene variants
import App from './App-BasicScene'
import App from './App-RotatingCube'
import App from './App-ParticleSystem'
```

Each variant runs independently without navigation UI, perfect for focusing on one scene or using as a starting point for your own project.

## 🎁 Included Assets - KayKit Collection

This template includes **10 high-quality asset packs** from Kay Lousberg (CC0 license):

- **Characters** - Adventurers, Skeletons, Animations
- **Environments** - Dungeon, City, Forest, Halloween
- **Props** - Platformer, Resources, and more

**Total:** 100+ models, animations, and props ready to use!

**License:** CC0 (Public Domain) - Free for any use, no attribution required

**Support KayKit:** https://kaylousberg.itch.io/ | http://patreon.com/kaylousberg

See `public/assets/KAYKIT-ASSETS.md` for complete inventory.

## 🤖 AI-Powered Development with Kiro

This template is designed to work seamlessly with Kiro, an AI coding assistant.

### Using Kiro

**Quick Examples:**
```
"#ThreeJS How do I add OrbitControls?"
"Create a new scene with a bouncing ball"
"Optimize this scene for performance"
"Load a KayKit character model"
```

**Steering Documents:**
- `#ThreeJS` - Comprehensive Three.js reference
- Always-active guides for patterns and best practices
- Task-specific API documentation

**Automated Hooks:**
- Validates Three.js patterns on save
- Suggests optimizations
- Helps debug issues

## 📚 Documentation

### For Users
- **README.md** (this file) - Getting started
- **PROJECT-STRUCTURE.md** - Complete project overview
- **public/assets/README.md** - Asset usage guide
- **public/assets/KAYKIT-ASSETS.md** - KayKit inventory

### For Kiro (AI)
- **.kiro/steering/** - Behavior guides
- **.kiro/reference/** - API documentation
- **.kiro/specs/** - Feature specifications
- **.kiro/hooks/** - Automated workflows

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Adding New Scenes

1. Create component in `src/examples/`
2. Follow patterns from existing examples
3. Import in `App.jsx`
4. Add to navigation

### Using KayKit Assets

```javascript
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const loader = new GLTFLoader()
loader.load(
  '/assets/models/characters/KayKit_Adventurers_2.0_FREE/Characters/gltf/character_knight.gltf',
  (gltf) => {
    scene.add(gltf.scene)
  }
)
```

See `public/assets/models/README.md` for more examples.

## 🎓 Learning Path

### Beginner
1. Explore the Basic Scene (`src/Scene.jsx`)
2. Study the Rotating Cube example
3. Read `#ThreeJS` reference in Kiro
4. Modify examples to experiment

### Intermediate
5. Study the Particle System example
6. Load and use KayKit assets
7. Follow the dungeon scene spec
8. Create your own scenes

### Advanced
9. Build complete environments
10. Add physics and interactions
11. Optimize for production
12. Create custom shaders

## 📖 Specifications

The `.kiro/specs/` directory contains detailed specifications for building features:

- **rotating-cube-example** - Step-by-step cube implementation
- **particle-system-example** - Advanced particle effects
- **kaykit-dungeon-scene** - Building scenes with assets

Each spec includes:
- Requirements (what to build)
- Design (how to build it)
- Tasks (step-by-step guide)

## 🔧 Customization

### For Game Development
- Add game logic in `src/game/`
- Create game-specific specs
- Add physics library (cannon-es, rapier)

### For Data Visualization
- Add `src/visualizations/`
- Create data processing utilities
- Integrate chart libraries

### For VR/AR
- Add WebXR support
- Create VR-specific components
- Include VR examples

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This template: MIT License

KayKit Assets: CC0 (Public Domain)
- Creator: Kay Lousberg (www.kaylousberg.com)
- No attribution required (but appreciated)

## 🙏 Credits

### Template
Created with ❤️ for the Three.js and Kiro communities

### Assets
**KayKit Collection** by Kay Lousberg
- Website: www.kaylousberg.com
- Itch.io: https://kaylousberg.itch.io/
- Patreon: http://patreon.com/kaylousberg
- Twitter: http://twitter.com/KayLousberg

Thank you Kay for creating and sharing these amazing assets!

### Technologies
- **Three.js** - 3D graphics library
- **React** - UI framework
- **Vite** - Build tool
- **Kiro** - AI coding assistant

## 🔗 Resources

### Three.js
- Documentation: https://threejs.org/docs/
- Examples: https://threejs.org/examples/
- Forum: https://discourse.threejs.org/

### Assets
- KayKit: https://kaylousberg.itch.io/
- Poly Haven: https://polyhaven.com/
- Kenney: https://kenney.nl/assets

### Learning
- Three.js Journey: https://threejs-journey.com/
- Three.js Fundamentals: https://threejsfundamentals.org/

## 💬 Support

- **Issues:** Open an issue on GitHub
- **Discussions:** Use GitHub Discussions
- **Kiro:** Ask Kiro for help with Three.js questions

## 🎉 Get Started

```bash
npm install
npm run dev
```

Then ask Kiro: `"Show me how to create a new Three.js scene"`

Happy coding! 🚀
