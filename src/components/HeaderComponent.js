import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';


const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' expand='sm'>
        <Container>
            <Navbar.Brand>To-Do 30</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="https://github.com/ejw773/to-do-30" target="_blank" rel="noreferrer">About</Nav.Link>
                    <Nav.Link href="https://github.com/ejw773/to-do-30/tree/04" target="_blank" rel="noreferrer">Code</Nav.Link>
                    <Nav.Link href="https://elijahwilcott.com/">Portfolio</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    )
}

export default Header;