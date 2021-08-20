import React, { useState } from 'react';
import { TextField, Paper, Button, Grid } from '@material-ui/core';

const AddTask = ({addItem}) => {
    const [textInput, setTextInput] = useState('');
    const handleChange = ({target}) => {
        let s = target.value;
        setTextInput(s);
    };
    const handleKeyPress = ({key}) => {
        if (key === 'Enter') {
            handleClick();
        }
    };
    const handleClick = () => {
        if (textInput !== '') {
            addItem(textInput);
            setTextInput('');
        };
    };

    return (
        <Paper style={{margin: 16, padding: 16}}>
            <Grid container>
                <Grid xs={10} md={11} item style={{paddingRight: 16}}>
                    <TextField 
                        placeholder='New Task'
                        value={textInput}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                        fullWidth
                    />
                </Grid>
                <Grid xs={2} md={1} item>
                    <Button onClick={handleClick} fullWidth color='secondary' variant='outlined'>
                        Add
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default AddTask;
