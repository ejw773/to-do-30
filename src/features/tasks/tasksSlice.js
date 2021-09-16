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
            state.taskList = [...state.taskList, action.payload]
        },
        deleteTask: (state, action) => {
            state.taskList = state.taskList.filter((item) => item.id !== action.payload);
        },
        toggleTask: (state, action) => {
            let targetTask = state.taskList.find((item) => item.id === action.payload);
            targetTask.complete = !targetTask.complete;
        },
        modifyTask: (state, action) => {
            let targetTask = state.taskList.find((item) => item.id === action.payload.id);
            targetTask.name = action.payload.name;
        },
    }
});

export const { addTask, deleteTask,  toggleTask, modifyTask } = taskListSlice.actions;

export default taskListSlice.reducer;