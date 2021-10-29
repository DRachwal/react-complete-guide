import { FC, useContext } from 'react';
import TodoContext from '../store/todo-context';

import classes from './TodoItem.module.css';

const TodoItem: FC<{ id: number; name: string }> = ({ id, name }) => {
    const todoCtx = useContext(TodoContext);

    return <li onClick={() => todoCtx.removeTodoHandler(id)} className={classes.item}>{name}</li>;
};

export default TodoItem;