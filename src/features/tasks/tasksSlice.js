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
            console.log(state.taskList[action.payload]);
            state.taskList[action.payload].complete = !state.taskList[action.payload].complete
        },
        addTask: (state, action) => {
            let newTask = {
                name: action.payload.name,
                id: action.payload.id,
                complete: false
            };
            state.taskList = [...state.taskList, newTask];
        },
        deleteTask: (state, action) => {
            state.taskList = state.taskList.filter((item) => item.id !== action.payload);
        },
        modifyTask: (state, action) => {
            console.log(`dispatched: ${action.payload}`);
        }
    }
});

export const { toggle, addTask, deleteTask, modifyTask } = taskSlice.actions;

export default taskSlice.reducer;