import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [
        {
            id: 0,
            name: 'Send quotes',
            complete: false
        },
        {
            id: 1,
            name: 'print labels',
            complete: false
        },
        {
            id: 2,
            name: 'buy la croix',
            complete: true
        }
    ]
};

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            console.log(action.payload);
        },
        deleteTask: (state, action) => {
            console.log(action.payload);
        },
        modifyTask: (state, action) => {
            console.log(action.payload);
        },
        toggleTask: (state, action) => {
            console.log(action.payload);
        }
    }
})

export const { addTask, deleteTask, modifyTask, toggleTask } = taskSlice.actions

export default taskSlice.reducer