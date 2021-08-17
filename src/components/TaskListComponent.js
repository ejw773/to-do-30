import React from 'react';
import RenderTask from './RenderTaskComponent';

const TaskList = ({taskList, deleteTask, modifyTask, toggleTask}) => {
    return (
        <div>
            {taskList.map((task) => <RenderTask key={task.id} task={task} deleteTask={deleteTask} modifyTask={modifyTask} toggleTask={toggleTask} />)}
        </div>
    )
}

export default TaskList;
