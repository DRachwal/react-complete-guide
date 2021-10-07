import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

import classes from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const changeHandler = e => {
    const { name, value } = e.target;

    setInputs(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const submitHandler = e => {
    e.preventDefault();

    if(inputs.email === 'test@gmail.com' && inputs.password === '123456') {
      dispatch(authActions.login());
    }
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' onChange={changeHandler} value={inputs.name} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' onChange={changeHandler} value={inputs.password} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
