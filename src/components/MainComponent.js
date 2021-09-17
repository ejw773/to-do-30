import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import NewTask from './NewTaskComponent';
import TaskList from './TaskListComponent'

const Main = () => {
    return (
        <div>
            <Header />
            <NewTask />
            <TaskList />
            <Footer />
        </div>
    )
}

export default Main;