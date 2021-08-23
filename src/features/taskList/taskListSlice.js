import { createSlice } from '@reduxjs/toolkit';

export const taskListSlice = createSlice({
    name: 'taskList',
    initialState: [
        {
            id: 0,
            name: 'wash the cat',
            complete: false
        },
        {
            id: 1,
            name: 'make some tea',
            complete: true
        },
        {
            id: 9,
            name: 'write an app',
            complete: false
        }
    ],
    reducers: {
        toggleTask: (state, action) => {
            console.log(`toggle: ${action.payload}`)
        },
        deleteTask: (state, action) => {
            console.log(state.filter(item => item.id !== action.payload));
            
        },
        addTask: (state, action) => {
            console.log(`add task: ${action.payload}`)
        }
    }
})

export const { toggleTask, deleteTask, addTask } = taskListSlice.actions

export default taskListSlice.reducer
