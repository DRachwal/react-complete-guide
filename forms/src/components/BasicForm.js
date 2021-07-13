import useInput from '../hooks/use-input';

const isNotEmpty = value => value.trim() !== '';

const isEmail = value => value.trim().includes('@');

const BasicForm = (props) => {
  const {
    enteredValue: firstNameInputValue,
    valueIsValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputChangeHandler: firstNameInputChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    reset: firstNameReset
  } = useInput(isNotEmpty);

  const {
    enteredValue: lastNameInputValue,
    valueIsValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputChangeHandler: lastNameInputChangehandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: lastNameReset
  } = useInput(isNotEmpty);

  const {
    enteredValue: emailInputValue,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailReset
  } = useInput(isEmail);

  // Form validation
  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const submitHandler = e => {
    e.preventDefault();

    if (!formIsValid)
      return;

    console.log(firstNameInputValue, lastNameInputValue, emailInputValue);
    
    firstNameReset();
    lastNameReset();
    emailReset();
  }

  const firstNameInputClassName = `form-control ${firstNameHasError && 'invalid'}`;
  const lastNameInputClassName = `form-control ${lastNameHasError && 'invalid'}`;
  const emailInputClassName = `form-control ${emailHasError && 'invalid'}`;

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameInputClassName}>
          <label htmlFor='firstname'>First Name</label>
          <input
            type='text'
            id='firstname'
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputBlurHandler}
            value={firstNameInputValue} />
            {firstNameHasError && <p className='error-text'>First name can't be empty</p>}
        </div>
        <div className={lastNameInputClassName}>
          <label htmlFor='lastname'>Last Name</label>
          <input
            type='text'
            id='lastname'
            onChange={lastNameInputChangehandler}
            onBlur={lastNameInputBlurHandler}
            value={lastNameInputValue} />
            {lastNameHasError && <p className='error-text'>Last name can't be empty</p>}
        </div>
      </div>
      <div className={emailInputClassName}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={emailInputValue} />
          {emailHasError && <p className='error-text'>Email must contain "@"</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
