import React, { useState } from 'react';

const NewItem = ({addToDo}) => {
    const [ userInput, setUserInput ] = useState('');
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo(userInput);
        setUserInput('');
    }
    return (
        <div>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..." />
            <button onClick={handleSubmit}> + </button>
        </div>
    )
}

export default NewItem;