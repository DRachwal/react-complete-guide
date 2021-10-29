import { FormEvent, useRef, FC, useContext } from 'react';
import TodoContext from '../store/todo-context';

import classes from './NewTodo.module.css';

const NewTodo: FC = () => {
    const todoCtx = useContext(TodoContext);

    const nameInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();

        const name = nameInputRef.current!.value;

        // Input validation
        if (name.trim().length === 0)
            return;

        todoCtx.addTodoHandler(name);
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' ref={nameInputRef} />
            <button type='submit'>Add</button>
        </form>
    );
};

export default NewTodo;