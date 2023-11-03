import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import Layout from './editor/layouts'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <DndProvider backend={HTML5Backend}>
    <Layout />
  </DndProvider>
)

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
