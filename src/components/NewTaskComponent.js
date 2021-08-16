import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

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
            handleClick();
        }
    };
    return (
        <label>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Add New Task"
                    aria-label="Add New Task"
                    aria-describedby="add-task"
                    value={newTask}
                    onChange={(handleChange)}
                    onKeyPress={handleKeyPress}
                />
                <Button onClick={handleClick} variant="dark" id="add-task">+</Button>
            </InputGroup>
        </label>
    )
}

export default NewTask;
