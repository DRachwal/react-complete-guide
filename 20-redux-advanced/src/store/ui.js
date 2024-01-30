import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'ui',
  initialState: {
    isCartVisible: false,
    notification: null
  },
  reducers: {
    toggleCart(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    showNotification(state, { payload }) {
      const { status, title, message } = payload;
      state.notification = { status, title, message };
    }
  }
});

export const uiActions = slice.actions;
export default slice.reducer;
