import './Main.css'
import {Link} from 'react-router-dom'


function Main() {
    return (
        <div className="Main">
            <header>
                <div>VVV</div>
                <Link to={'/home'} >DESIGN SYSTEM</Link>
            </header>
            <h1>main</h1>
        </div>
    );
}

export default Main;
