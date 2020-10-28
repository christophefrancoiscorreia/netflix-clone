import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
function Header({black}) {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <Link to="/">
                    <img src="/logo.png" alt="Netflix clone" />
                </Link>
            </div>
            <div className="header--user">
                <Link to="/user">
                    <img src="/hBEe3tdn_400x400.png" alt="Netflix clone" />
                </Link>
            </div>
        </header>
    )
}

export default Header
