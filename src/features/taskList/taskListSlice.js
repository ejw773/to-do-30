import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        name: 'Wash the cat',
        complete: false,
        id: 0
    },
    {
        name: 'Read a book',
        complete: true,
        id: 1
    },
    {
        name: 'Make a video',
        complete: false,
        id: 2
    }
]

export const taskListSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
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
            state.taskList = {...state.taskList, newTask};
        },
    }
})

export const { toggleTask, deleteTask, addTask } = taskListSlice.actions

export default taskListSlice.reducer
