import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { newTask } from '../features/tasks/tasksSlice'
import generateId from './idGenerator';

const NewTask = () => {
    const taskList = useSelector(state => state.tasks)
    const [userInput, setUserInput] = useState('')
    const handleChange = ({target}) => {
        setUserInput(target.value)
    };

    const handleKeyPress = () => {
        console.log('key press')
    };

    const createNewTask = () => {
        let newId = generateId(taskList);
        let newTask = {
            id: newId,
            name: {userInput},
            complete: false
        }
        console.log(newTask)
    };

    return (
        <Row className="justify-content-md-center">
            <Col md={4}>
            <InputGroup>
                <FormControl
                placeholder="Enter New Task"
                aria-label="Add New Task"
                aria-describedby="new-task"
                value={userInput}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                />
                <Button onClick={() => createNewTask()}>
                    +
                </Button>
            </InputGroup>
            </Col>
        </Row>
    )
}

export default NewTask;