import React from 'react';
import RenderTask from './RenderTaskComponent';
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap';

const TaskList = () => {
    const tasks = useSelector(state => state.taskSlice)
    const taskList = tasks.taskList;
    console.log(taskList);
    return (
        <Container>
        {taskList.length > 0 &&
        taskList.map((item, index) => 
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