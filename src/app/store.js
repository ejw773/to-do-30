import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/tasks/tasksSlice'

export const store = configureStore({
    reducer: {
        taskSlice: taskReducer
    },
})