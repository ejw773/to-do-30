import React from 'react';
import RenderTask from './RenderTaskComponent';
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap';
import sortTasks from './sortTasks';

const TaskList = () => {
    const tasks = useSelector(state => state.taskSlice)
    const taskList = tasks.taskList;
    let sortedTasks = sortTasks(taskList);
    return (
        <Container className='p-3 task-list'>
        {sortedTasks.length > 0 &&
        sortedTasks.map((item, index) => 
        <RenderTask 
            key={index}
            index={index}
            task={item}
        />
        )
        }
        </Container>
    )
}

export default TaskList;