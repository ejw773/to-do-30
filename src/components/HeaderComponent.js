import React from 'react';
import { Navbar, Container } from  'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' fixed='top'>
            <Container>
                <Navbar.Brand href="https://todo30.com/" target="_blank" rel="noreferrer">ToDo30.com</Navbar.Brand>
                <Navbar.Text className="justify-content-right">Day 14: Redux Remixed</Navbar.Text>
            </Container>
        </Navbar>
    )
}

export default Header;