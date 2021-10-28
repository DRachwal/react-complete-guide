import { FC } from 'react';

const TodoItem: FC<{ name: string }> = ({ name }) => {
    return (<li>{name}</li>);
};

export default TodoItem;