import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';
import generateId from './idGenerator';

const NewTask = () => {
    const dispatch = useDispatch();
    const [userInput, setUserInput] = useState('')
    const allTasks = useSelector(state => state.taskSlice.tasks);
    const allIds = allTasks.map((item) => item.id);

    const handleChange = ({target}) => {
        setUserInput(target.value)
    };

    const addThisTask = () => {
        let newId = generateId(allIds);
        let newTask = {
            id: newId,
            name: userInput,
            complete: false
        };
        dispatch(addTask(newTask))
    }

    const handleKeyPress = ({key}) => {
        if (key === 'Enter') {
            addThisTask();
            setUserInput('')
        }
    }

    const handleClick = () => {
        addThisTask();
        setUserInput('')
    }

    return (
        <div>
            <input 
                value={userInput}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder='Enter New Task'
            />
            <button onClick={handleClick}>+</button>
        </div>
    )
}

export default NewTask;