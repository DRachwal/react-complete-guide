import { useReducer } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

import classes from './Login.module.css';


const INITIAL_INPUT_STATE = {
  value: '',
  // isValid: false
}

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT')
    return {
      value: action.value,
      isValid: action.value.includes('@')
    }

  return INITIAL_INPUT_STATE;
}

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT')
    return {
      value: action.value,
      isValid: action.value.trim().length > 6
    }

  return INITIAL_INPUT_STATE;
}

const Login = ({ onLogin }) => {
  const [email, dispatchEmail] = useReducer(emailReducer, INITIAL_INPUT_STATE);
  const [password, dispatchPassword] = useReducer(passwordReducer, INITIAL_INPUT_STATE)

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', value: event.target.value })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onLogin(email.value, password.value);
  };

  const formIsValid = email.isValid && password.isValid

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          type="email"
          id="email"
          value={email.value}
          onChange={emailChangeHandler}
          label="E-mail"
          isValid={email.isValid}
        />
        <Input
          type="password"
          id="password"
          value={password.value}
          onChange={passwordChangeHandler}
          label="Password"
          isValid={password.isValid}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
