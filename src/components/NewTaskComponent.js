import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const NewTask = ({addTask}) => {
    const [newTask, setNewTask] = useState('');
    const handleChange = ({target}) => {
        setNewTask(target.value);
    }
    return (
        <div>
            <TextField
                placeholder='Enter New Task'
                onChange={handleChange}
                value={newTask}
            />
            <Button
            onClick={() => addTask(newTask)}
            >
                Add
            </Button>
        </div>
    )
}

export default NewTask;
