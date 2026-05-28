import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Day2 } from './mainday2.jsx'
import { ExcitedReasons } from './mainday2.jsx'
import { Header} from './mainday2.jsx'


function  MainComponent() {
  return (<h1>Hello, world!</h1>);
}
const root = createRoot(document.getElementById('root'))

// root.render(<div>
//   <MainComponent />
//   <h1>Hello, world!</h1>
//   <h1>React is great</h1>
//   </div>)


// this is impereative way of rendering element to the dom
const elementfortest = document.createElement('h1');
elementfortest.textContent = 'Hello, world! This is a test element.';
elementfortest.className = 'header'

document.getElementById('root').appendChild(elementfortest); 

root.render(
  <main>
    <MainComponent />
    <Header/>
    <Day2 />
    <ExcitedReasons />
  </main>
)