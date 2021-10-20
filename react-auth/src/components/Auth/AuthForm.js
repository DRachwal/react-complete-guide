import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import AuthContext from '../../store/auth-context';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const history = useHistory();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = e => {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    setIsLoading(true);

    let url;

    if (isLogin)
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBhGnKlRP5hKgQASPoFG8f0HU4winTg3bg';
    else
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBhGnKlRP5hKgQASPoFG8f0HU4winTg3bg';

    axios
      .post(url, {
        email,
        password,
        returnSecureToken: true
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log('response', response);
        setIsLoading(false);
        authCtx.login(response.data.idToken);
        history.replace('/');
      })
      .catch(error => {
        setIsLoading(false);
        alert(error.response.data.error.message);
      })
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input
            type='email'
            id='email'
            ref={emailInputRef}
            required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            ref={passwordInputRef}
            required />
        </div>
        <div className={classes.actions}>
          <button disabled={isLoading}>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
