import { Link } from 'react-router-dom'
import './navBar.css'

function NavBar() {
    return (
        <div className='navBar'>
            <div className='navBarButtonContainer'>
                <Link className='navButton' to='/'>Home</Link>
                <Link className='navButton' to='/projects'>Projects</Link>
                <Link className='navButton' to='/'>Blog</Link>
                <Link className='navButton' to='/'>Bio</Link>
            </div>
        </div>
    )
}

export default NavBar