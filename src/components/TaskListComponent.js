import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import RenderTask from './RenderTaskComponent';

const TaskList = () => {
    const taskList = useSelector(state => state.taskListSlice.taskList);
    return (
        <Container>
            {taskList.length > 0 && 
            taskList.map((item) => <RenderTask key={item.id} id={item.id} task={item} />)
            }
        </Container>
    )
}

export default TaskList;