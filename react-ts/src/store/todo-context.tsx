import { createContext, FC, useState } from 'react';

import Todo from '../models/todo';

type TodosContext = {
    todos: Todo[],
    addTodoHandler: (name: string) => void,
    removeTodoHandler: (id: number) => void
};

const TodoContext = createContext<TodosContext>({
    todos: [],
    addTodoHandler: (name: string) => { },
    removeTodoHandler: (id: number) => { }
});

export const TodoContextProvider: FC = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (name: string) => {
        const id = new Date().getTime();
        const newTodo = new Todo(id, name);

        setTodos(prevState => ([
            newTodo,
            ...prevState
        ]));
    };

    const removeTodoHandler = (id: number) => {
        setTodos(prevState => prevState.filter(todo => todo.id !== id));
    };

    const contextValue: TodosContext = {
        todos,
        addTodoHandler,
        removeTodoHandler
    }

    return (<TodoContext.Provider value={contextValue}>
        {children}
    </TodoContext.Provider>);
};

export default TodoContext;