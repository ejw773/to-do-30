import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [
        {
            id: 0,
            name: 'Wash the cat',
            complete: false
        },
        {
            id: 1,
            name: 'Make some ramen',
            complete: true
        },
        {
            id: 2,
            name: 'Drink more coffee',
            complete: false
        }
    ]
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        toggle: (state, action) => {
            console.log(action.payload);
        },
        newTask: (state, action) => {
            console.log(action.payload);
        },
        deleteTask: (state, action) => {
            console.log(action.payload);
        },
        modifyTask: (state, action) => {
            console.log(action.payload);
        }
    }
});

export const { toggle, newTask, deleteTask, modifyTask } = taskSlice.actions;

export default taskSlice.reducer;