import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TaskList = ({toggleStatus, deleteTask, taskList}) => {
    return (
        <Row>
            {taskList.map((item, index) => { return (
                <InputGroup key={index}>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" id={item.id} name={item.task} value={item.task} checked={item.isComplete} onChange={() => toggleStatus(item.id)} />
                    <Col>
                        <InputGroup.Text>{item.task}</InputGroup.Text>
                    </Col>
                    <Button variant='danger' id={item.id} onClick={() => deleteTask(item.id)} value={item.task}>Delete</Button>
                </InputGroup>
            )})}
        </Row>
    )
}

export default TaskList;
