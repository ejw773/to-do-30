import React from 'react';
import RenderTask from './RenderTaskComponent';
import Row from 'react-bootstrap/Row';

const TaskList = ({taskList, toggleTask, modifyTask, deleteTask}) => {
    return (
        <Row>
            {taskList.map((task) => {return (
                <RenderTask key={task.id} task={task} toggleTask={toggleTask} modifyTask={modifyTask} deleteTask={deleteTask} />
            )})}
        </Row>
    )
}

export default TaskList;
