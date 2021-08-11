import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const NewTask = (props) => {
    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl
                placeholder='New Task'
                aria-label='New Task'
                aria-describedby='new-task'
                value={props.userInput}
                onChange={props.handleChange}
                onKeyPress={event => {if(event.key === 'Enter') {props.handleClick()}}}
                />
                <Button variant="success" id="newTaskButton" onClick={props.handleClick}>
                    Add
                </Button>
            </InputGroup>
        </div>
    )
}

export default NewTask;
