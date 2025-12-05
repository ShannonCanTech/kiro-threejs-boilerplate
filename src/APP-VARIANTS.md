# App Variants Guide

This template includes multiple App component variants to give you flexibility in how you run the examples.

## Available Variants

### App.jsx (Default)
**What it includes:**
- All three scenes (Basic, Rotating Cube, Particle System)
- Navigation buttons to switch between scenes
- Info panel showing scene description
- Full UI with styling

**Best for:**
- Exploring all examples
- Comparing different approaches
- Learning from multiple examples
- Showcasing the template

**To use:**
```javascript
// In main.jsx
import App from './App.jsx'
```

---

### App-BasicScene.jsx
**What it includes:**
- Only the basic scene (rotating sphere)
- No navigation UI
- No info panels
- Clean, minimal view

**Best for:**
- Starting a new project from scratch
- Learning the minimal Three.js setup
- Building on the simplest foundation

**To use:**
```javascript
// In main.jsx
import App from './App-BasicScene.jsx'
```

---

### App-RotatingCube.jsx
**What it includes:**
- Only the rotating cube example
- No navigation UI
- No info panels
- Focused view of one example

**Best for:**
- Studying the beginner example in isolation
- Using as a starting point for simple animations
- Learning fundamental Three.js concepts

**To use:**
```javascript
// In main.jsx
import App from './App-RotatingCube.jsx'
```

---

### App-ParticleSystem.jsx
**What it includes:**
- Only the particle system example
- No navigation UI
- No info panels
- Full-screen particle visualization

**Best for:**
- Studying advanced particle techniques
- Building particle-based visualizations
- Learning BufferGeometry and performance optimization

**To use:**
```javascript
// In main.jsx
import App from './App-ParticleSystem.jsx'
```

---

## How to Switch Between Variants

### Method 1: Edit main.jsx (Recommended)

Open `src/main.jsx` and change the import statement:

```javascript
// Comment out the current import
// import App from './App.jsx'

// Uncomment the variant you want
import App from './App-RotatingCube.jsx'
```

Save the file and the dev server will hot-reload with the new variant.

### Method 2: Rename Files

1. Backup the current `App.jsx`:
   ```bash
   mv src/App.jsx src/App-AllScenes.jsx
   ```

2. Copy your chosen variant:
   ```bash
   cp src/App-RotatingCube.jsx src/App.jsx
   ```

3. The import in `main.jsx` will now use your chosen variant

## Creating Your Own Variant

You can create custom App variants for your specific needs:

```javascript
// src/App-MyCustomScene.jsx
import MyScene from './examples/MyScene'

function App() {
  return <MyScene />
}

export default App
```

Then import it in `main.jsx`:
```javascript
import App from './App-MyCustomScene.jsx'
```

## Tips

- **Development**: Use the default `App.jsx` to explore all examples
- **Production**: Use a single-scene variant for your final app
- **Learning**: Switch between variants to focus on one concept at a time
- **Starting new projects**: Copy a variant as your starting point

## Customizing the Default App

If you want to keep the navigation but customize it:

1. Open `src/App.jsx`
2. Modify the `scenes` object to add/remove scenes
3. Adjust the default scene in `useState('basic')`
4. Customize the navigation styling in `src/styles/global.css`

## Questions?

- See `GETTING-STARTED.md` for more details
- Ask Kiro: "How do I run a single scene?"
- Check the comments in each App variant file
