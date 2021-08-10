import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const ListContainer = ({tasks, toggleStatus}) => {
    const taskList = tasks.map((item) => 
        <a onClick={toggleStatus}><ListGroup.Item key={item.id}>
            {item.task}
        </ListGroup.Item></a>);
    return (
        <div className='m-3'>
            <ListGroup>
                {taskList}
            </ListGroup>
        </div>
    )
}

export default ListContainer;