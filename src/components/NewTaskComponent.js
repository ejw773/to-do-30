import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { addTask } from '../features/tasks/tasksSlice'
import generateId from './idGenerator';

const NewTask = () => {
    const tasks = useSelector(state => state.taskSlice)
    const taskList = tasks.taskList;
    const [userInput, setUserInput] = useState('')
    const dispatch = useDispatch();

    const handleChange = ({target}) => {
        setUserInput(target.value)
    };

    const handleKeyPress = ({key}) => {
        if (key === 'Enter') {
            createNewTask();
        }
    };

    const createNewTask = () => {
        if (userInput !== '') {
            let newId = generateId(taskList);
            let newTask = {
                id: newId,
                name: userInput,
                complete: false
            }
            dispatch(addTask(newTask));
            setUserInput('');
        }
    };

    return (
        <Row className="justify-content-md-center">
            <Col md={4}>
            <InputGroup className="p-3">
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