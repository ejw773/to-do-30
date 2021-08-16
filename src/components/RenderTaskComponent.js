import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/FormControl';


const RenderTask = ({task, toggleTask, modifyTask}) => {
    const [taskText, setTaskText] = useState(task.task)

    const handleClick = (e) => {
        console.log(e)
    }

    const handleToggle = (id) => {
        toggleTask(parseInt(id));
    };

    const handleChange = ({target}) => {
        setTaskText(target.value);
    };

    const handleOnBlur = ({target}) => {
        let id = parseInt(target.dataset.id);
        modifyTask(id, taskText);
    };

    const handleKeyPress = (e) => {
        let id = parseInt(e.target.dataset.id);
        if (e.key === 'Enter') {
            modifyTask(id, taskText);
            e.target.blur();
        };
    }

    return (
            <label>
                <InputGroup className="mb-3">
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" onChange={() => handleToggle(task.id)} checked={task.complete} id={task.id} />
                    <FormControl aria-label="Text input with checkbox" id={task.id} data-id={task.id} value={taskText} onChange={handleChange} onBlur={handleOnBlur} onKeyPress={handleKeyPress} />
                    <InputGroup.Button />
                </InputGroup>
            </label>
    )
}

export default RenderTask;