import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    quantity: 0
  },
  reducers: {
    setCart(state, { payload }) {
      const { items, quantity } = payload;
      console.log('setCart payload', payload)
      state.items = items;
      state.quantity = quantity;
      console.log('setCart state', state)
    },
    addToCart(state, { payload }) {
      const existingCartItem = state.items.find(item => item.id === payload.id);

      if (existingCartItem) {
        existingCartItem.quantity++;
        existingCartItem.total += existingCartItem.price;
      } else {
        state.items.push({
          ...payload,
          total: payload.price,
          quantity: 1
        })
      }

      state.quantity++;
    },
    removeFromCart(state, { payload }) {
      const existingCartItem = state.items.find(item => item.id === payload);

      if (existingCartItem.quantity > 1) {
        existingCartItem.quantity--;
        existingCartItem.total -= existingCartItem.price;
      } else
        state.items = state.items.filter(item => item.id !== payload) || [];

      state.quantity--;

    }
  }
})

export const cartActions = slice.actions;
export default slice.reducer;