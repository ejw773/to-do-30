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
            state.tasks.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((item) => item.id !== action.payload)
        },
        modifyTask: (state, action) => {
            let targetTask = state.tasks.find(item => item.id === action.payload.id);
            targetTask.name = action.payload.name;
        },
        toggleTask: (state, action) => {
            let targetTask = state.tasks.find(item => item.id === action.payload);
            targetTask.complete = !targetTask.complete;
        }
    }
})

export const { addTask, deleteTask, modifyTask, toggleTask } = taskSlice.actions

export default taskSlice.reducer