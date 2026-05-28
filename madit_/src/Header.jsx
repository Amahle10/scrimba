export function Header () {

    return (
        <header className='header'>
            
            <img className='nav-logo'src='/src/assets/react.svg' alt='react logo'  />
            <nav>
                <ul className='nav-list'>
                    <li className='nav-list-item'>pricing</li>
                    <li className='nav-list-item'>about</li>
                    <li className='nav-list-item'>contact</li>
                </ul>
            </nav>
        </header>
    );
}