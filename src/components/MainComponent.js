import React, { useState } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import NewTask from './NewTaskComponent';
import TaskList from './TaskListComponent';

const Main = () => {
    const [taskList, setTaskList] = useState([
        {
            id: 0,
            task: 'walk the dog',
            complete: false
        },
        {
            id: 1,
            task: 'wash the cat',
            complete: true
        },
        {
            id: 2,
            task: 'cook dinner',
            complete:false
        }
    ]);
    const newTask = (text) => {
        console.log(newTask);
    };
    return (
        <React.Fragment>
            <Header />
            <NewTask />
            <TaskList newTask={newTask}/>
            <Footer />
        </React.Fragment>
    )
}

export default Main;
