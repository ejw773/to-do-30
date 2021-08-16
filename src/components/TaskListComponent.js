import React from 'react';
import RenderTask from './RenderTaskComponent';
import Row from 'react-bootstrap/Row';

const TaskList = ({taskList, toggleTask, modifyTask}) => {
    console.log(taskList);
    return (
        <Row>
            {taskList.map((task) => {return (
                <RenderTask key={task.id} task={task} toggleTask={toggleTask} modifyTask={modifyTask} />
            )})}
        </Row>
    )
}

export default TaskList;
