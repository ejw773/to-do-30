import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TaskList = ({taskList}) => {
    const toggleStatus = () => {
        console.log('toggled')
    };
    const deleteTask = () => {
        console.log('deleteME')
    }
    
    const renderItems = (item) => {
        return (
            <p key={item.id} style={{color: 'white'}}>{item.task}</p>
        )
    }

    return (
        <Col className='col-sm-9' style={{backgroundColor: 'blue'}}>
            {taskList.map((item) => renderItems(item))}
        </Col>
    )
}


export default TaskList;    