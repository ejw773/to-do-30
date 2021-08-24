import { createSlice } from '@reduxjs/toolkit';

export const taskListSlice = createSlice({
    name: 'tasks',
    initialState: {
        taskList: [
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
        ]
    },
    reducers: {
        toggleTask: (state, action) => {
            state.taskList[action.payload].complete = !state.taskList[action.payload].complete;
        },
        deleteTask: (state, action) => {
            state.taskList = state.taskList.filter(item => item.id !== action.payload);
        },
        addTask: (state, action) => {
            let newTask = {
                id: action.payload.newId,
                name: action.payload.userInput,
                complete: false
            };
            state.taskList = [...state.taskList, newTask];
        }
    }
})

export const { toggleTask, deleteTask, addTask } = taskListSlice.actions

export default taskListSlice.reducer
