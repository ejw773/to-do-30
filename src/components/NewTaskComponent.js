import React, { useState } from 'react';
import { addTask } from '../features/taskList/taskListSlice';
import { Paper, TextField, Button, Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

const NewTask = () => {
    const [userInput, setUserInput] = useState('');
    const dispatch = useDispatch();
    const taskList = useSelector((state) => state.tasks.taskList);
    let newId = 0;
    let allIds = taskList.map(item => item.id);
    if (allIds.length > 0) {
        newId = Math.max(...allIds) + 1;
    }
    const handleChange = ({target}) => {
        setUserInput(target.value);
    };
    const handleKeyPress = ({key}) => {
        if (key === 'Enter') {
            handleClick();
        }
    };
    const handleClick = () => {
        if (userInput !== '') {
            dispatch(addTask({userInput, newId}));
            setUserInput('');    
        }
    }
    return (
        <Paper style={{margin: 16, padding: 16}}>
            <Grid container>
                <Grid xs={10} md={10} item style={{paddingRight: 16}}>
                    <TextField
                        placeholder='New Task'
                        value={userInput}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                        fullWidth
                    />
                </Grid>
                <Grid xs={2} md={1} item>
                    <Button
                        onClick={handleClick}
                        fullWidth
                        color='secondary'
                        variant='outlined'
                    >
                        +
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default NewTask;