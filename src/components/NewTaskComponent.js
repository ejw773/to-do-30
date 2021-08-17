import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'

const NewTask = ({addTask}) => {
    const [newTask, setNewTask] = useState('');
    const handleChange = ({target}) => {
        setNewTask(target.value);
    };
    const handleClick = () => {
        if (newTask !== '') {
            addTask(newTask);
            setNewTask('');
        }
    };
    const handleKeyPress = ({key}) => {
        if (key === 'Enter') {
            handleClick()
        }
    }
    return (
        <Box p={6}>
            <Typography className='heading-subtitle' variant='subtitle1'>Day 7: Material-UI</Typography>
            <TextField
                placeholder='Enter New Task'
                onChange={handleChange}
                value={newTask}
                onKeyPress={handleKeyPress}
            />
            <Button
            onClick={handleClick}
            >
                Add
            </Button>
        </Box>
    )
}

export default NewTask;
