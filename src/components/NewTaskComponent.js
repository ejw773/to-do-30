import React, { useState } from 'react';
import { TextField, Button, Paper,  Grid } from '@material-ui/core';

const NewTask = ({addTask}) => {
    const [taskInput, setTaskInput] = useState('');
    const handleChange = ({target}) => {
        setTaskInput(target.value);
    }
    const handleKeyPress = ({key}) => {
        if (key === 'Enter') {
            if (taskInput !== '') {
                addTask(taskInput);
                setTaskInput('')
            }
        }
    };

    const handleClick = () => {
        if (taskInput !== '') {
            addTask(taskInput);
            setTaskInput('');
        }
    }

    return (
        <Paper
            style={{
                margin: 16,
                padding: 16
            }}
        >
            <Grid container>
                <Grid
                    xs={10}
                    md={11}
                    item
                    style={{
                        paddingRight: 16
                    }}
                >
                    <TextField 
                        placeholder='New Task'
                        value={taskInput}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                        fullWidth
                    />
                </Grid>
                <Grid xs={2} md={1} item>
                    <Button
                        fullWidth
                        color='secondary'
                        variant='outlined'
                        onClick={handleClick}
                    >+</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default NewTask;
