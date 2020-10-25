import React from 'react'
import './Header.css'
function Header({black}) {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="/logo.png" alt="Netflix clone" />
                </a>
            </div>
            <div className="header--user">
                <a href="">
                    <img src="/hBEe3tdn_400x400.png" alt="Netflix clone" />
                </a>
            </div>
        </header>
    )
}

export default Header
