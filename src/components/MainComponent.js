import React, { useState, useEffect } from 'react';
import Header from './HeaderComponent';
import AddTask from './AddTaskComponent';
import TaskList from './TaskListComponent'

const Main = () => {
    const [taskList, setTaskList] = useState([]);

    const newId = () => {
        let newId = 0;
        if (taskList.length > 0) {
            let allIds = taskList.map((item) => item.id);
            newId = Math.max(...allIds) + 1;
        }
        return newId;
    };

    const deleteItem = (id) => {
         let s = taskList.filter(item => item.id !== id);
        setTaskList(s);
    };

    const toggleItem = (id) => {
        const s = [...taskList];
        const targetIndex = taskList.findIndex((item) => item.id === id);
        s[targetIndex].complete = !s[targetIndex].complete;
        setTaskList(s);
    };

    const addItem = (text) => {
        let id = newId();
        let newObject = {
            id: id,
            name: text,
            category: 'Inbox',
            complete: false
        };
        let updatedTasks = [...taskList, newObject];
        setTaskList(updatedTasks);
    };

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('data'));
        setTaskList(data);
    }, []);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(taskList))
    });

    return (
        <React.Fragment>
            <Header />
            <AddTask addItem={addItem}/>
            <TaskList taskList={taskList} toggleItem={toggleItem} deleteItem={deleteItem} />
        </React.Fragment>
    )
}

export default Main;
