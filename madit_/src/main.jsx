import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


function  MainComponent() {
  return (<h1>Hello, world!</h1>);
}
const root = createRoot(document.getElementById('root'))

// root.render(<div>
//   <MainComponent />
//   <h1>Hello, world!</h1>
//   <h1>React is great</h1>
//   </div>)


const elementfortest = document.createElement('h1');
elementfortest.textContent = 'Hello, world! This is a test element.';
elementfortest.className = 'header'

document.getElementById('root').appendChild(elementfortest);