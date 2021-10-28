import { FormEvent, useRef } from 'react';

const NewTodo = () => {
    const nameInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();

        const name = nameInputRef.current!.value;

        // Input validation
        if (name.trim().length === 0)
            return;

        console.log('name', name);
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' ref={nameInputRef} />
            <button type='submit'>Add</button>
        </form>
    );
};

export default NewTodo;