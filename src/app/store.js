import { configureStore } from '@reduxjs/toolkit';
import taskListReducer from '../features/tasks/tasksSlice';

export default configureStore({
    reducer: {
        taskListSlice: taskListReducer,
    },
})