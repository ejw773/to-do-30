import React, { Component } from 'react';
import Header from './HeaderComponent';
import NewTask from './NewTaskComponent';
import TaskList from './TaskListComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: 'input',
            taskList: [
                {
                    task: 'wash the dog',
                    id: '0'
                },
                {
                    task: 'watch a movie',
                    id: '1'
                }
            ]
        };
    };
    render() {
        const handleChange = (newInput) => {
            console.log('changed');
        }
        const handleClick = () => {
            console.log('clicked')
        }

        return (
            <div>
                <Header />
                <NewTask userInput={this.state.userInput} handleClick={handleClick} handleChange={handleChange}/>
                <TaskList taskList={this.state.taskList}/>
            </div>
        );
    }
}

export default Main;
