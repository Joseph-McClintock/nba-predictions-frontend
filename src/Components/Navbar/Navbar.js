import { useState } from 'react'
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from 'react-icons/fa'
import "./navbar.css"

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <nav className="navbar-container">
            <div className="navbar-home">
                <Link to="/">Home</Link>
            </div>

            <div className="navbar-icon" onClick={handleClick}>{click ? <FaTimes/> : <FaBars/>}</div>
            <div className={click ? "navbar-list active" : "navbar-list"}>
                <ul>
                    <li>
                        <Link to="/about" onClick={click ? handleClick : null}>About</Link>
                    </li>
                    <li>
                        <a href="https://github.com/Joseph-McClintock" rel="noreferrer" target="_blank" onClick={click ? handleClick : null}>Github</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/joseph-mcclintock/" rel="noreferrer" target="_blank" onClick={click ? handleClick : null}>LinkedIn</a>
                    </li>
                </ul>  
            </div>
            
        </nav>

    )
}

export default Navbar;