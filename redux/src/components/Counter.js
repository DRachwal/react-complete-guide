import { useSelector, useDispatch } from 'react-redux';
// import { Component } from 'react';

import classes from './Counter.module.css';

const Counter = () => {
  // useSelector takes a function as an argument which returns selected piece of state
  const counter = useSelector(state => state.counter)
  const showCounter = useSelector(state => state.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE' });
  };

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' });
  }

  const increaseHandler = () => {
    dispatch({ type: 'INCREASE', amount: 5});
  }

  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   toggleCounterHandler = () => { };

//   incrementHandler = () => {
//     this.props.increment();
//   }

//   decrementHandler = () => {
//     this.props.decrement();
//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler}>Increment</button>
//           <button onClick={this.decrementHandler}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'INCREMENT'}),
//     decrement: () => dispatch({ type: 'DECREMENT'})
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);