import React from 'react';
import './HeaderComponent.css'

const Header = () => {
    return (
        <div className='header'>
            <a href="https://todo30.com/" target="_blank" rel='noreferrer' className="logo">#todo30</a>
            <div className="header-right">
                <a href="https://github.com/ejw773/to-do-30/tree/15" target="_blank" rel="noreferrer">Code</a>
            </div>
        </div>
    )
}

export default Header;