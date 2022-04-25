import { Link } from 'react-router-dom'

import './Header.css'

function Header() {
    return (
        <header >
            <nav>
                <div className='nav__logo'>
                    O
                </div>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/destination">destination</Link></li>
                    <li><Link to="/">crew</Link></li>
                    <li><Link to="/">technology</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header


