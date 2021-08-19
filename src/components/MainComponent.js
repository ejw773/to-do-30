import React, { useState, useEffect } from 'react';
import Header from './HeaderComponent';
import NewTask from './NewTaskComponent';
import TaskList from './TaskListComponent';
import Footer from './FooterComponent';

const Main = () => {
    const [taskList, setTaskList] = useState([
        {
            id: 0,
            task: 'deploy app',
            complete: false
        },
        {
            id: 1,
            task: 'clean room',
            complete: true
        },
        {
            id: 2,
            task: 'download update',
            complete:  false
        }
    ]);

    const toggleTask = (id) => {
        console.log(`toggle task: ${id}`);
    };

    const addTask = (text) => {
        console.log(`new tsak: ${text}`);
    };

    const deleteTask = (id) => {
        console.log(`delete ${id}`)
    }

    return (
        <React.Fragment>
            <Header />
            <NewTask addTask={addTask}/>
            <TaskList tasklist={taskList} toggleTask={toggleTask} deleteTask={deleteTask} />
            <Footer />
        </React.Fragment>
    )
}

export default Main;
