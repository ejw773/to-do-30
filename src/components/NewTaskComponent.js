import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { Row, Col, FormControl, InputGroup, Button } from 'react-bootstrap'
import generateId from './idGenerator';
import { useState } from 'react';
import { addTask } from '../features/tasks/tasksSlice';

const NewTask = () => {
    const dispatch = useDispatch();
    const [userInput, setUserInput] = useState('');
    const allTasks = useSelector(state => state.taskListSlice.taskList)
    const handleChange = ({target}) => {
        setUserInput(target.value)
    };

    const addToTasks = () => {
        let newId = generateId(allTasks);
        if (userInput !== '') {
            let dispatchData = {
                id: newId,
                name: userInput,
                complete: false
            }
            dispatch(addTask(dispatchData));
            setUserInput('')
         }
    }

    const handleKeyPress = ({key}) => {
        if (key === 'Enter') {
            addToTasks();
        }
    }

    return (
        <Row className='p-3'>
            <Col>
                <InputGroup>
                    <FormControl
                        value={userInput}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                    />
                    <Button onClick={addToTasks}>+</Button>
                </InputGroup>
            </Col>
        </Row>
    )
}

export default NewTask;