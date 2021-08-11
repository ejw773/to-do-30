import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const NewTask = ({createNewTask}) => {
    const [userInput, setUserInput] = useState('');
    const handleClick = () => {
        if (userInput !== '') {
            createNewTask(userInput);
        }
        setUserInput('')
    };
    const handleChange = ({target}) => {
        setUserInput(target.value);
    };

    return (
        <div>
            <InputGroup className="mb-3 p-3">
                <FormControl
                placeholder='New Task'
                aria-label='New Task'
                aria-describedby='new-task'
                value={userInput}
                onChange={handleChange}
                onKeyPress={event => {if(event.key === 'Enter') {handleClick(userInput)}}}
                />
                <Button variant="success" id="newTaskButton" onClick={handleClick}>
                    Add
                </Button>
            </InputGroup>
        </div>
    )
}

export default NewTask;
