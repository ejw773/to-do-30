import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' expand='sm'>
        <Container>
            <Navbar.Brand><FontAwesomeIcon icon={faCheckDouble} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="https://github.com/ejw773/to-do-30" target='_blank' rel='noreferrer'>About</Nav.Link>
                    <Nav.Link href="https://elijahwilcott.com/" target='_blank' rel='noreferrer' >Portfolio</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    )
}

export default Header;