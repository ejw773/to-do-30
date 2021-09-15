import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
            <Navbar fixed='top' bg='dark' variant='dark'>
                <Navbar.Brand>#ToDo30</Navbar.Brand>
            </Navbar>
        </Container>
    )
}

export default Header;