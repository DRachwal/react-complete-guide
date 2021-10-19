import { useState } from 'react';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const [inputValue, setInputValue] = useState('');

  const changeHandler = e => {
    const value = e.target.value;
    setInputValue(value);
  };

  const submitHandler = e => {
    e.preventDefault();

    console.log('inputValue', inputValue);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input
          type='password'
          id='new-password'
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
