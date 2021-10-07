import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notification: null
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice.reducer;