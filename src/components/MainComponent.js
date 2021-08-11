import React from 'react';
import Header from './HeaderComponent';
import NewTask from './NewTaskComponent';
import TaskList from './TaskListComponent';

const Main = () => {
    return (
        <div>
            <Header />
            <NewTask />
            <TaskList />
        </div>
    )
}

export default Main;
