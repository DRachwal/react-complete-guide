// import { useState, useEffect } from 'react';
import useInput from '../hooks/use-input';

// const INITIAL_INPUTS = {
//     name: '',
//     email: ''
// };

// const INITIAL_IS_TOUCHED = {
//     name: false,
//     email: false
// };

const SimpleInput = props => {
    const { 
        enteredValue: nameInputValue,
        valueIsValid: nameInputIsValid,
        hasError: nameInputHasError, 
        inputChangeHandler: nameInputChangeHandler, 
        inputBlurHandler: nameInputBlurHandler,
        reset: nameInputReset
    } = useInput(value => value.trim() !== '');

    const { 
        enteredValue: emailInputValue,
        valueIsValid: emailInputIsValid,
        hasError: emailInputHasError, 
        inputChangeHandler: emailInputChangeHandler, 
        inputBlurHandler: emailInputBlurHandler,
        reset: emailInputReset
    } = useInput(value => value.trim().includes('@'));

    // const [inputValue, setInputValue] = useState(INITIAL_INPUTS);
    // const [inputIsTouched, setInputIsTouched] = useState(INITIAL_IS_TOUCHED);

    // Input validation
    // const nameInputIsValid = inputValue.name.trim() !== '';
    // const emailInputIsValid = inputValue.email.trim().includes('@');

    // Form validation
    const formIsValid = nameInputIsValid && emailInputIsValid;

    // const inputChangeHandler = e => {
    //     const name = e.target.name;
    //     const value = e.target.value;

    //     setInputValue(prevState => {
    //         return {
    //             ...prevState,
    //             [name]: value
    //         }
    //     })
    // }

    // const inputBlurHandler = e => {
    //     const name = e.target.name;

    //     setInputIsTouched(prevState => {
    //         return {
    //             ...prevState,
    //             [name]: true
    //         }
    //     })
    // }

    const submitHandler = e => {
        e.preventDefault();

        // setInputIsTouched({
        //     name: true,
        //     email: true
        // })

        if (!formIsValid)
            return;

        // setInputValue(INITIAL_INPUTS);
        // setInputIsTouched(INITIAL_IS_TOUCHED);

        nameInputReset();
        emailInputReset();
    }

    const nameInputClassName = `form-control ${nameInputHasError && 'invalid'}`;
    const emailInputClassName = `form-control ${emailInputHasError && 'invalid'}`;

    return (
        <form onSubmit={submitHandler}>
            <div className={nameInputClassName}>
                <label htmlFor='name'>Your Name</label>
                <input
                    name='name'
                    type='text'
                    id='name'
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={nameInputValue}
                />
                {nameInputHasError && <p className='error-text'>Name must not be empty</p>}
            </div>
            <div className={emailInputClassName}>
                <label htmlFor='email'>Your Email</label>
                <input
                    name='email'
                    type='email'
                    id='email'
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={emailInputValue}
                />
                {emailInputHasError && <p className='error-text'>Email must contain "@"</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;