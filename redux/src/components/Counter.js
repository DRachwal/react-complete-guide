import { useSelector, useDispatch } from 'react-redux';

import { counterActons } from '../store/index';

import classes from './Counter.module.css';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter);
    const show = useSelector((state) => state.counter.showCounter);

    const incrementHandler = () => {
        dispatch(counterActons.increment());
    };

    const increaseHandler = () => {
        dispatch(counterActons.increase(10));
    };

    const decrementHandler = () => {
        dispatch(counterActons.decrement());
    };

    const toggleCounterHandler = () => {
        dispatch(counterActons.toggleCounter());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 10</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;