# Agent Hooks for Three.js Template

This directory contains automated workflows that trigger on specific events to help with Three.js development.

## Available Hooks

### 1. Validate Three.js Patterns (Auto)
**Trigger:** On file save (*.jsx, *.tsx in src/)
**Action:** Checks for proper Three.js patterns
**Enabled:** Yes

Automatically validates:
- Proper cleanup (dispose, remove event listeners)
- Resource management
- React patterns (useEffect, useRef)
- Memory leak prevention

**When it runs:** Every time you save a React component file

### 2. Suggest API Reference (Manual)
**Trigger:** Manual (click to run)
**Action:** Suggests relevant API documentation
**Enabled:** Yes

Analyzes the current file and suggests which API reference file would be most helpful:
- Working with controls? → llms-controls.txt
- Loading models? → llms-loaders-1.txt
- Creating materials? → llms-materials-math.txt

**How to use:** Click the hook button or run from command palette

### 3. Optimize Three.js Scene (Manual)
**Trigger:** Manual (click to run)
**Action:** Reviews scene for performance optimizations
**Enabled:** Yes

Checks for:
- Geometry and material reuse
- InstancedMesh opportunities
- Proper disposal
- Lighting count
- Texture optimization
- Polygon counts

**How to use:** Run when scene performance is slow

### 4. Generate Three.js Example (Manual)
**Trigger:** Manual (click to run)
**Action:** Creates new example component
**Enabled:** Yes

Interactive workflow:
1. Asks what you want to demonstrate
2. Creates component in src/examples/
3. Follows template patterns
4. Includes proper setup and cleanup

**How to use:** When you want to create a new example

### 5. Debug Three.js Scene (Manual)
**Trigger:** Manual (click to run)
**Action:** Adds debug helpers to scene
**Enabled:** Yes

Adds visualization helpers:
- AxesHelper (show X/Y/Z axes)
- GridHelper (ground grid)
- Light helpers
- Camera helpers

**How to use:** When you need to visualize scene structure

### 6. Check Three.js Version (Disabled)
**Trigger:** On package.json save
**Action:** Checks for outdated dependencies
**Enabled:** No (enable if needed)

Runs `npm outdated` to check:
- three
- @react-three/fiber
- @react-three/drei

**How to enable:** Edit hooks.json and set `"enabled": true`

## Using Hooks

### Via UI
1. Open the Agent Hooks panel in Kiro
2. Click on any manual hook to run it
3. Auto hooks run automatically on their triggers

### Via Command Palette
1. Open command palette (Cmd/Ctrl + Shift + P)
2. Search for "Kiro: Run Hook"
3. Select the hook you want to run

### Editing Hooks
Edit `hooks.json` to:
- Enable/disable hooks
- Modify trigger conditions
- Change actions
- Add new hooks

## Hook Configuration

### Trigger Types
- `onFileSave` - Runs when specific files are saved
- `onMessage` - Runs when message is sent to agent
- `onSessionStart` - Runs when new session starts
- `manual` - Runs only when explicitly triggered

### Action Types
- `sendMessage` - Sends message to Kiro
- `command` - Executes shell command

### File Patterns
Use glob patterns for file matching:
- `src/**/*.jsx` - All JSX files in src/
- `*.json` - All JSON files in root
- `src/examples/*` - Files in examples directory

## Creating Custom Hooks

Example: Auto-format on save
```json
{
  "id": "format-on-save",
  "name": "Format Three.js Files",
  "description": "Auto-formats Three.js components",
  "trigger": {
    "type": "onFileSave",
    "filePattern": "src/**/*.{jsx,tsx}"
  },
  "action": {
    "type": "command",
    "command": "prettier --write"
  },
  "enabled": true
}
```

Example: Check for missing imports
```json
{
  "id": "check-imports",
  "name": "Check Three.js Imports",
  "description": "Validates Three.js imports",
  "trigger": {
    "type": "onFileSave",
    "filePattern": "src/**/*.{jsx,tsx}"
  },
  "action": {
    "type": "sendMessage",
    "message": "Check if all Three.js classes used in this file are properly imported from 'three' or 'three/examples/jsm/'"
  },
  "enabled": true
}
```

## Best Practices

1. **Keep auto hooks lightweight** - They run frequently
2. **Use manual hooks for heavy tasks** - Optimization, generation
3. **Provide clear descriptions** - Help users understand what hooks do
4. **Test hooks thoroughly** - Ensure they work as expected
5. **Disable unused hooks** - Reduce overhead

## Troubleshooting

### Hook not running
- Check if enabled in hooks.json
- Verify file pattern matches
- Check trigger type is correct

### Hook running too often
- Adjust file pattern to be more specific
- Consider changing to manual trigger
- Add conditions to the action

### Hook causing errors
- Check command syntax
- Verify message format
- Test action independently

## Integration with Steering Docs

Hooks work together with steering docs:
- Hooks trigger actions
- Steering docs guide how Kiro responds
- API reference files provide detailed specs
- Best practices ensure quality output

This creates an intelligent, automated development environment for Three.js.
