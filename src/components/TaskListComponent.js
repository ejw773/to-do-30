import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const TaskList = ({taskList, toggleTask, deleteTask}) => {
    const toggleStatus = (id) => {
        toggleTask(id);
    };
    const handleClick = (id) => {
        deleteTask(id);
    }
    
    const renderItems = (item, index) => {
        return (
            <InputGroup key={index} className="p-1">
                <InputGroup.Checkbox variant='light' bg='light' id={item.id} placeholder={item.task} id={item.id} name={item.task} value={item.task} checked={item.complete} onChange={() => toggleStatus(item.id)} />
                <Col>
                <InputGroup.Text className={item.complete ? 'completed' : ''}>{item.task}</InputGroup.Text>
                </Col>
                <Button variant='light' bg='light' onClick={() => handleClick(item.id)}><FontAwesomeIcon icon={faTrash} /></Button>
            </InputGroup>
        )
    }

    return (
        <Col className='col-xl-10'>
            {taskList.map((item, index) => renderItems(item, index))}
        </Col>
    )
}


export default TaskList;    