import React, { useState } from 'react';
import Header from './HeaderComponent';
import NewItem from './NewItemComponent';
import ListContainer from './ListContainerComponent';

const Main = () => {
    const [tasks, setTasks] = useState([
        {
            id: 0,
            task: 'task 1',
            complete: false
        },
        {
            index: 1,
            task: 'task 2',
            complete: false
        }
    ]);
    const addTask = (task) => {
        setTasks([
            ...tasks,
            {
                id: tasks.length,
                task: task,
                complete: false
            }
        ]);
    };
    const toggleStatus = (task) => {
        console.log(task)
    }
    return (
        <div>
            <Header />
            <NewItem addTask={addTask}/>
            <ListContainer tasks={tasks} toggleStatus={toggleStatus}/>
        </div>
    )
}

export default Main;
