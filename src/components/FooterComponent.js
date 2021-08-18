import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { classes } from 'istanbul-lib-coverage';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    footerBar: {
        top: 'auto',
        bottom: 0
    }
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <AppBar position='fixed' className={classes.footerBar}>
            <Toolbar>
                <Typography style={{align: 'center'}}></Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Footer;