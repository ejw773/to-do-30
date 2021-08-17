
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' expand='sm'>
            <Container>
                <Navbar.Brand><FontAwesomeIcon icon={faList} /></Navbar.Brand>
                <Navbar.Brand>To-Do 30</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link href='https://todo.elijahwilcott.com/'>Index</Nav.Link>
                        <Nav.Link href='https://github.com/ejw773/to-do-30/tree/main' target="_blank" rel="noreferrer">About</Nav.Link>
                        <Nav.Link href='https://github.com/ejw773/to-do-30/tree/06' target="_blank" rel="noreferrer">Code</Nav.Link>
                        <Nav.Link href='https://elijahwilcott.com/'>Portfolio</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;