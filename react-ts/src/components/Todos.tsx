import { FC } from 'react';

import Todo from '../models/todo';

import TodoItem from './TodoItem';

const Todos: FC<{ todos: Todo[] }> = ({ todos }) => {
    return (<ul>
        {todos.map(todo => <TodoItem key={todo.id} name={todo.name} />)}
    </ul>);
};

export default Todos;