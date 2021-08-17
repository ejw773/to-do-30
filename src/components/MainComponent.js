import React, { useState, useEffect } from 'react';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import NewTask from './NewTaskComponent'
import TaskList from './TaskListComponent'


const Main = () => {
    const [taskList, setTaskList] = useState([
        {
            id: 0,
            task: 'replace spark plugs',
            complete: false
        },
        {
            id: 1,
            task: 'change light bulbs',
            complete: true
        },
        {
            id: 2,
            task: 'replace sunroof cover',
            complete: false
        }
    ]);
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
        console.log(`Modify task: ${id} to ${text}`);
        console.log(id);
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

    return (
        <React.Fragment>
            <Header />
            <NewTask addTask={addTask}/>
            <TaskList taskList={taskList} deleteTask={deleteTask} modifyTask={modifyTask} toggleTask={toggleTask} />
            <Footer />    
        </React.Fragment>
    )
}

export default Main;
