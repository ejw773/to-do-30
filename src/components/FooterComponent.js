import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Footer = () => {
    return (
        <div className="fixed-bottom">
            <Navbar className="justify-content-center">
                <Navbar.Text><a href="https://github.com/ejw773/to-do-30" target="_blank">"To-Do 30"</a> is a challenge to create 30 different to-do apps, each within a one-day period.</Navbar.Text>
            </Navbar>
        </div>
    )
}

export default Footer;
