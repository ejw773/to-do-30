import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
        <div>
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
        </div>
    )
}

export default NewTask;
