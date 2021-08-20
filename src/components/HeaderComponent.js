import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Header = () => {
    return (
        <AppBar color='secondary' position='static' style={{height: 64}}>
            <Toolbar style={{height: 64}}>
                <Typography>To-Do 30</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
