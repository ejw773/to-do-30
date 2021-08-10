import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';

const ListContainer = ({tasks}) => {
    const taskList = tasks.map((item) => 
        <ListGroup.Item key={item.id} >
            <InputGroup>
                <InputGroup.Checkbox aria-label='Checkbox for This Task' />
            </InputGroup>
            {item.task}
        </ListGroup.Item>);
    return (
        <div className='m-3'>
            <ListGroup>
                {taskList}
            </ListGroup>
        </div>
    )
}

export default ListContainer;