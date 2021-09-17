import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask, modifyTask } from '../features/tasks/tasksSlice'

const RenderTask = ({task}) => {
    const dispatch = useDispatch();

    const handleChange = ({target}) => {
        let modifiedTask = {
            id: task.id,
            name: target.value
        }
        dispatch(modifyTask(modifiedTask))
    }

    let statusClass = 'unfinished'
    if (task.complete) {
        statusClass = 'finished'
    }

    return (
        <div className='task'>
            <button className={statusClass} onClick={() => dispatch(toggleTask(task.id))}>&#10004;</button>
            <label for='task'></label>
            <input 
                value={task.name}
                onChange={handleChange}
                className='input-box'
                id='task'
            />
           <button className='delete-task' onClick={() => dispatch(deleteTask(task.id))}>🗑️</button>
        </div>
    )
}

export default RenderTask;