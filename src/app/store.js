import { configureStore } from '@reduxjs/toolkit';
import taskListReducer from '../features/taskList/taskListSlice';

export default configureStore({
    reducer: {
        tasks: taskListReducer
    },
});

