import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


function  MainComponent() {
  return (<h1>Hello, world!</h1>);
}
const root = createRoot(document.getElementById('root'))

root.render(<div>
  <MainComponent />
  <h1>Hello, world!</h1>
  </div>)
