import React, { useState, useEffect } from 'react';
import Header from './HeaderComponent';
import NewTask from './NewTaskComponent';
import TaskList from './TaskListComponent';
import Footer from './FooterComponent';
import { Paper } from '@material-ui/core';

const Main = () => {
    const [taskList, setTaskList] = useState([
        {
            id: 5,
            task: 'deploy app',
            complete: false
        },
        {
            id: 6,
            task: 'clean room',
            complete: true
        },
        {
            id: 7,
            task: 'download update',
            complete:  false
        }
    ]);

    const toggleTask = (id) => {
        let targetIndex = taskList.findIndex((item) => item.id === id);
        let updatedState = [...taskList];
        updatedState[targetIndex].complete = !taskList[targetIndex].complete;
        setTaskList(updatedState);
    };

    const addTask = (text) => {
        console.log(`new tsak: ${text}`);
    };

    const deleteTask = (id) => {
        let copiedState = [...taskList];
        let filteredState = copiedState.filter((item) => item.id !== id);
        setTaskList(filteredState);
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
