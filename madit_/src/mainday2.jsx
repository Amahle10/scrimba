
import {render} from 'react-dom';
import './index.css';


// root = render.createRoot(document.getElementById('root'));

// root.render(
//     <main>
//         <img src="react-logo.png" alt="React Logo" />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//         </main>

// )


export function Day2 (){

    return (
        <main>
            <img src="/src/assets/react.svg" alt="React Logo" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
            </main>
    )
}

export function ExcitedReasons () {

    return (
        <ol>
            <li>Im excited to be learning react because it exposes dom manipulation </li>
            <li>it is really cool, you get to work with UI's and stuff</li>
        </ol>
    );
}

function FooterWithHeaderAndBody () {
    return (
    <div>
        <header>Header</header>
        <br>
        </br>
        <p>This is the body of the page</p>
        <br>
        </br>
        <footer>copyrightlogo 20xx jake leak</footer>
    </div>

)

}


///fragments

export function Header () {

    return (
        <header>
            <img src='/src/assets/react.svg' alt='react logo'  />
            <ul className='nav-list'><li>pricing
                </li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </header>
    );
}


export function Fragments () {
    return (
        <Fragment>

        </Fragment>
    )
}
