# SVG Editor Example

This project demonstrates how to integrate and use the [svg-editor](https://github.com/KIRA009/svg-editor) package in a React application. It shows how to implement the editor within a modal dialog using Mantine UI components.

## Features

- SVG editing capabilities through a modal interface
- Built with React and Vite
- Uses Mantine UI components for the interface
- Example implementation of the svg-editor package

## Prerequisites

- Node.js (v18 or higher recommended)
- npm

## Installation

1. Clone the repository:
```bash
git clone https://github.com/KIRA009/svg-editor-example
cd svg-editor-example
```

2. Install dependencies:
```bash
npm install
```

## Development

To run the development server:
```bash
npm run dev
```

This will start the development server at `http://localhost:5173` (or another available port if 5173 is in use).

## Project Structure

- `src/App.jsx` - Main application component with the editor modal trigger
- `src/editor-modal.jsx` - SVG Editor modal implementation
- `src/main.jsx` - Application entry point with theme and provider setup

## Usage Example

The project shows how to:
1. Set up the SVG editor within a Mantine modal
2. Configure the editor with custom SVG content
3. Handle editor events and exports

Basic implementation example:

```jsx
import { Button } from '@mantine/core'
import { modals } from '@mantine/modals'

function App() {
  return (
    <Button onClick={() => modals.openContextModal({
      modal: 'editor',
      size: '80vw',
      innerProps: {
        svgString: `<svg>...</svg>` // Your SVG content here
      }
    })}>
      Open editor
    </Button>
  )
}
```