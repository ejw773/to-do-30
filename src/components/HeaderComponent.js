import React from 'react';
import './HeaderComponent.css'

const Header = () => {
    return (
        <div className='header'>
            <a href="#home" className="logo">#todo30 | Ugly Retro</a>
            <div className="header-right">
                <a href="https://todo30.com">#todo30</a>
                <a href="https://github.com/ejw773/to-do-30/tree/15">Code</a>
            </div>
        </div>
    )
}

export default Header;