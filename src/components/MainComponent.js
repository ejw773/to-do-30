import React, { useState, useEffect } from 'react';
import Header from './HeaderComponent'
import NewTask from './NewTaskComponent'
import TaskList from './TaskListComponent'
import Box from '@material-ui/core/Box'

const Main = () => {
    const [taskList, setTaskList] = useState([]);
    const newId = () => {
        let newId = 0;
        if (taskList.length > 0) {
            let idList = taskList.map((item) => item.id);
            newId = Math.max(...idList) + 1;
        };
        return newId;
    };

    const addTask = (text) => {
        let id = newId();
        let newTask = {
            id: id,
            task: text,
            complete: false
        }
        let updatedTasks = [...taskList, newTask];
        setTaskList(updatedTasks);
    };

    const deleteTask = (id) => {
        let updatedTasks = [...taskList];
        updatedTasks = taskList.filter((item) => item.id !== id);
        setTaskList(updatedTasks);
    };

    const modifyTask = (text, id) => {
        const updatedTasks = [...taskList];
        const targetIndex = taskList.findIndex((item) => item.id === id);
        updatedTasks[targetIndex].task = text;
        setTaskList(updatedTasks);
    };

    const toggleTask = (id) => {
        let updatedTasks = [...taskList];
        let targetIndex = updatedTasks.findIndex(i => i.id === id);
        updatedTasks[targetIndex].complete = !taskList[targetIndex].complete;
        setTaskList(updatedTasks);
    };

    useEffect(() => {
        let storedData = localStorage.getItem('data');
        if (storedData) {
            setTaskList(JSON.parse(storedData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(taskList))
    });

    return (
        <React.Fragment>
            <Header />
            <Box className="App-Body">
            <NewTask addTask={addTask}/>
            <TaskList taskList={taskList} deleteTask={deleteTask} modifyTask={modifyTask} toggleTask={toggleTask} />
            </Box>
        </React.Fragment>
    )
}

export default Main;
