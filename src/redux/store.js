import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../redux/slice/AuthSlice';
import { userReducer } from '../redux/slice/UserSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        users: userReducer
    }
});

export default store;