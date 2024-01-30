// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth';
import counterReducer from './counter';

// const counterReducer = (state = initialState, action) => {
//   console.log('counterReducer state', state);

//   if (action.type === 'INCREMENT')
//     return {
//       ...state,
//       counter: state.counter + 1
//     }

//   if (action.type === 'DECREMENT')
//     return {
//       ...state,
//       counter: state.counter - 1
//     }

//   if (action.type === 'INCREASE')
//     return {
//       ...state,
//       counter: state.counter + action.payload
//     }

//   if (action.type === 'TOGGLE_COUNTER')
//     return {
//       ...state,
//       showCounter: !state.showCounter
//     }

//   return state;
// };

// const store = createStore(counterReducer);

// export default store;

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
});

export default store;