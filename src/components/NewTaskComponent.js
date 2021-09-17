import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import generateId from './idGenerator';

const NewTask = () => {
    const [userInput, setUserInput] = useState('')
    const allTasks = useSelector(state => state.taskSlice.tasks);
    const allIds = allTasks.map((item) => item.id);

    const handleChange = ({target}) => {
        setUserInput(target.value)
    };

    const addThisTask = () => {
        let newId = generateId(allIds);
        console.log(`from new task comp: ${newId}`)      
    }

    const handleClick = () => {
        addThisTask();
    }

    return (
        <div>
            <input 
                value={userInput}
                onChange={handleChange}
            />
            <button onClick={handleClick}>+</button>
        </div>
    )
}

export default NewTask;