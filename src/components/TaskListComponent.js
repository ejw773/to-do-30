import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TaskList = (props) => {
    const { taskList, toggleCompleted, handleDelete } = props;
    return (
        <Row>
            {taskList.map((item, index) => {return (
                    <InputGroup key={index}>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" id={item.id} name={item.task} value={item.task} checked={item.isCompleted} onChange={() => toggleCompleted(item.id)} />
                        <Col>
                           <InputGroup.Text>{item.task}</InputGroup.Text>
                        </Col>
                        <Button variant='danger' id={item.id} onClick={handleDelete} value={item.task}>Delete</Button>
                    </InputGroup>
            )})}
        </Row> 

    )
}

export default TaskList
