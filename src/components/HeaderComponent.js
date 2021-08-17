import React from 'react';
import AppBar from  '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'


const Header = () => {
    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <Typography align='left'>
                        To-Do 30 Day Challenge
                    </Typography>
                    {/* <Typography align='right'>
                        Day 7: Material-UI
                    </Typography> */}
                </Toolbar>
            </AppBar>
            {/* <Typography variant='h2'>
                To-Do 30 Day Challenge
            </Typography>
            <Typography variant='subtitle1'>
                Day 7: Material UI
            </Typography> */}
        </React.Fragment>
    )
}

export default Header;
