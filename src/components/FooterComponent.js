import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar bg='dark' variant='dark' fixed='bottom'>
            <Container>
                <Navbar.Brand href='https://github.com/ejw773/to-do-30/tree/14' target="_blank" rel="noreferrer">Source Code</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Footer;