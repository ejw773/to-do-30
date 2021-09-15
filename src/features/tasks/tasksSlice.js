import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    taskList: [
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
    ]};


export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        toggle: (state, action) => {
            let targetTask = state.taskList.find((item) => item.id === action.payload);
            targetTask.complete = !targetTask.complete;
        },
        addTask: (state, action) => {
            let newTask = {
                id: action.payload.id,
                name: action.payload.name,
                complete: false
            };
            state.taskList = [...state.taskList, newTask];
        },
        deleteTask: (state, action) => {
            state.taskList = state.taskList.filter((item) => item.id !== action.payload);
        },
        modifyTask: (state, action) => {
            let targetTask = state.taskList.find((item) => item.id === action.payload.id)
            targetTask.name = action.payload.name;
        }
    }
});

export const { toggle, addTask, deleteTask, modifyTask } = taskSlice.actions;

export default taskSlice.reducer;