import { useState } from 'react';

import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

const App = () => {
    const [users, setUsers] = useState([]);

    const addUser = (username, age) => {
        setUsers(prevState => {
            return [
                ...prevState, {
                    id: Math.random().toString(),
                    username,
                    age
                }
            ];
        })
    }

    return (
        <div>
            <AddUser
                onAddUser={addUser}/>
            <UsersList users={users}/>
        </div>
    );
}

export default App;
