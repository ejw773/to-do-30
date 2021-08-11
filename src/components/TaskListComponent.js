import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const TaskList = (props) => {
    const { taskList, toggleCompleted, handleDelete } = props;
    return (
        <ul>
            {taskList.map((item, index) => {return (
                <InputGroup key={index}>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" id={item.id} name={item.task} value={item.task} checked={item.isCompleted} onChange={toggleCompleted} />
                    <InputGroup.Text>{item.task}</InputGroup.Text>
                    {/* <input type='checkbox' id={item.id} name={item.task} value={item.task} checked={item.isCompleted} onChange={toggleCompleted} />
                    <label htmlFor={item.id}>{item.task}</label> */}
                    <Button id={item.id} onClick={handleDelete} value={item.task}>Delete</Button>
                </InputGroup>
            )})}
        </ul>
    )
}

export default TaskList
