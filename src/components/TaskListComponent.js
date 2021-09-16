import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import RenderTask from './RenderTaskComponent';
import organizeTasks from './organizeTasks'

const TaskList = () => {
    const taskList = useSelector(state => state.taskListSlice.taskList);
    let organizedTasks = organizeTasks(taskList);
    return (
        <Container className='task-list'>
            {taskList.length > 0 && 
            organizedTasks.map((item) => <RenderTask key={item.id} id={item.id} task={item} />)
            }
        </Container>
    )
}

export default TaskList;