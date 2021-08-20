import React, { useState, useEffect } from 'react';
import { Paper } from '@material-ui/core';
import Header from './HeaderComponent';
import AddTask from './AddTaskComponent';
import TaskList from './TaskListComponent'
import Footer from './FooterComponent';

const Main = () => {
    const [categoryList, setCategoryList] = useState(['Office', 'Home', 'Inbox', 'Shopping']);
    const [taskList, setTaskList] = useState([
        {
            id: 0,
            name: 'Clean up desk',
            category: 'Office',
            complete: false
        },
        {
            id: 2,
            name: 'Change spark plugs',
            category: 'Home',
            complete: false
        },
        {
            id: 10,
            name: 'Buy LaCroix',
            category: 'Shopping',
            complete: false
        }
    ]);

    const newId = () => {
        let allIds = taskList.map((item) => item.id);
        console.log(allIds);
    }

    const deleteItem = (id) => {
        console.log(`delete: ${id}`)
    };

    const addItem = (text) => {
        let id = newId();
        console.log(`new task: ${text} with id: ${id}`)
    }

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('data'));
        console.log(data);
        setTaskList(data);
    }, []);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(taskList))
    }, []);

    return (
        <React.Fragment>
            <Header />
            <AddTask />
            <TaskList taskList={taskList}/>
            <Footer />
        </React.Fragment>
    )
}

export default Main;
