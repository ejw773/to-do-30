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
    const addTask = e => {
        e.preventDefault();
        setTasks([
            ...tasks,
            {
                id: tasks.length,
                name: e.target.value
            }
        ])
    }
    return (
        <div>
            <Header />
            <NewItem addTask={addTask}/>
            <ListContainer tasks={tasks}/>
        </div>
    )
}

export default Main;
