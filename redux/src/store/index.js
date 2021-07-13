import { createStore } from 'redux';
import { createSlice } from '@redux/toolkit';

const initialState = { 
    counter: 0,
    showCounter: true 
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.counter++;
        },
        decrement: state => {
            state.counter--;
        },
        increase: (state, action) => {
            state.counter = state.counter + action.amount;
        },
        toggle: state => {
            state.showCounter = !state.showCounter;
        }
    }
});

const counterReducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if (action.type === 'INCREASE') {
        return {
            ...state,
            counter: state.counter + action.amount
        }
    }

    if (action.type === 'DECREMENT') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }

    if(action.type === 'TOGGLE') {
        return {
            ...state,
            showCounter: !state.showCounter
        }
    }

    return state;
}

const store = createStore(counterReducer);

export default store;