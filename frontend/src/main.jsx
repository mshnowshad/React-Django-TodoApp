import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // ← এই লাইন থাকতে হবে
import App from './App.jsx'
// import { Button } from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
