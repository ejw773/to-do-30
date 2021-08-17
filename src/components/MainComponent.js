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
    const addTask = (text) => {
        console.log(`Add task: ${text}`);
    };
    const deleteTask = (id) => {
        let updatedTasks = [...taskList];
        updatedTasks = taskList.filter((item) => item.id !== id);
        console.log(updatedTasks);
        setTaskList(updatedTasks);
    };
    const modifyTask = (text, id) => {
        console.log(`Modify task: ${id} to ${text}`);
        console.log(id);
    };
    const toggleTask = (id) => {
        let updatedTasks = [...taskList];
        let targetIndex = updatedTasks.findIndex(i => i.id === id);
        updatedTasks[targetIndex].complete = !taskList[targetIndex].complete;
        setTaskList(updatedTasks);
    }
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
