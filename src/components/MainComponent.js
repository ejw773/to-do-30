import React, { useState, useEffect } from 'react';
import Header from './HeaderComponent';
import NewTask from './NewTaskComponent';
import TaskList from './TaskListComponent';

const Main = () => {
    const [taskList, setTaskList] = useState([
        {
            id: 0,
            name: 'wash the cat',
            complete: false
        },
        {
            id: 1,
            name: 'go to work',
            complete: true
        },
        {
            id: 2,
            name: 'arrange graduation',
            complete: false
        }
    ])
    return (
        <React.Fragment>
            <Header />
            <NewTask />
            <TaskList />
        </React.Fragment>
    )
}

export default Main;