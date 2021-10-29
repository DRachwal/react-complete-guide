import { FC, useContext } from 'react';

import TodoContext from '../store/todo-context';
import TodoItem from './TodoItem';

import classes from './Todos.module.css';

const Todos: FC = () => {
    const todoCtx = useContext(TodoContext);

    return (<ul className={classes.todos}>
        {todoCtx.todos.map(todo => <TodoItem
            key={todo.id}
            id={todo.id}
            name={todo.name} />)}
    </ul>);
};

export default Todos;