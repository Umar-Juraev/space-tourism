import { Link } from 'react-router-dom'
function Header() {
    return (<header>
        <nav>
            <ul>
                <li><Link to="/home">1</Link></li>
                <li><a href="">2</a></li>
                <li><a href="">3</a></li>
                <li><a href="">4</a></li>
            </ul>
        </nav>
    </header>)
}

export default Header