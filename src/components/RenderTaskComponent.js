import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const RenderTask = ({task, toggleTask, modifyTask, deleteTask}) => {
    const [taskText, setTaskText] = useState(task.task)

    const handleClick = (e) => {
        deleteTask(e);
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
                    <Button variant='dark' onClick={() => handleClick(task.id)}><FontAwesomeIcon icon={faTrash} /></Button>
                </InputGroup>
            </label>
    )
}

export default RenderTask;