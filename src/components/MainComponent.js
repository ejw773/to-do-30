import React, { useState, useEffect } from 'react';
import Header from './HeaderComponent';
import NewTask from './NewTaskComponent';
import TaskList from './TaskListComponent';
import Footer from './FooterComponent';
import { Paper } from '@material-ui/core';

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
        <Paper
            elevation={0}
            style={{
                padding: 0,
                margin: 0,
                backgroundColor: '#fafafa'
            }}
        >
            <Header />
            <NewTask addTask={addTask}/>
            <TaskList taskList={taskList} toggleTask={toggleTask} deleteTask={deleteTask} />
            <Footer />
        </Paper>
    )
}

export default Main;
