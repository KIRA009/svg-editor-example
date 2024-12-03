import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@mantine/core/styles.css';
import App from './App.jsx'
import { createTheme, MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import EditorModal from './editor-modal.jsx';

const theme = createTheme({
  /** Put your mantine theme override here */
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <ModalsProvider modals={{
        editor: EditorModal,
      }}>
        <App />
      </ModalsProvider>
    </MantineProvider>
  </StrictMode>,
)
