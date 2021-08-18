import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant='h6'>To-Do 30</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;