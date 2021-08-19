import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';

const Header = () => {
    return (
        <AppBar
            color='primary'
            position='static'
            style={{height: 64}}
        >
            <Toolbar style={{height: 64}} >
                <Typography color='inherit'>To-Do 30</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
