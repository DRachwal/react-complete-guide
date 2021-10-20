import axios from 'axios';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const history = useHistory();

  const [inputValue, setInputValue] = useState('');

  const authCtx = useContext(AuthContext);

  const changeHandler = e => {
    const value = e.target.value;
    setInputValue(value);
  };

  const submitHandler = e => {
    e.preventDefault();

    axios
      .post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBhGnKlRP5hKgQASPoFG8f0HU4winTg3bg', {
        idToken: authCtx.token,
        password: inputValue,
        returnSecureToken: true
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log('response.data', response.data);
        history.replace('/');
      })
      .catch(error => {
        alert(error.response.data.error.message);
      })
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input
          type='password'
          id='new-password'
          minLength={7}
          value={inputValue}
          onChange={changeHandler} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
