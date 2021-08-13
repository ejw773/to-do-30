import React from 'react';
import Container from 'react-bootstrap/Container';

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
        <Container>
            {taskList.map((item) => renderItems(item))}
        </Container>
    )
}


export default TaskList;    