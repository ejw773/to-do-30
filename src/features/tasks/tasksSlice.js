import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    taskList: [
        {
            id: 0,
            name: 'Wash the car',
            complete: false
        },
        {
            id: 1,
            name: 'Contact trash company',
            complete: true
        },
        {
            id: 2,
            name: 'Reply to email',
            complete: false
        }
    ]
};

export const taskListSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            console.log('add task')
        },
        deleteTask: (state, action) => {
            console.log('delete task')
        },
        toggleTask: (state, action) => {
            console.log('toggle task')
        },
        modifyTask: (state, action) => {
            console.log('modify task')
        },
    }
});

export const { addTask, deleteTask,  toggleTask, modifyTask } = taskListSlice.actions;

export default taskListSlice.reducer;