import { useState, Fragment } from 'react';

import Card from '../Card/Card';
import Button from '../Button/Button';
import ErrorModal from '../Modal/ErrorModal';

import styles from './AddUser.module.css';

const INITIAL_INPUTS = {
    username: '',
    age: ''
}

const AddUser = props => {
    const [userData, setUserData] = useState(INITIAL_INPUTS);
    const [error, setError] = useState();

    const addUserHandler = e => {
        e.preventDefault();

        if (userData.username.trim().length === 0 || userData.age.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age'
            });

            return;
        }

        if (+userData.age < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)'
            });

            return;
        }

        props.onAddUser(userData.username, userData.age);

        setUserData(INITIAL_INPUTS);
    }

    const inputChangeHander = e => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const hideModal = () => {
        setError(null);
    }

    return (
        <Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onHideModal={hideModal} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        value={userData.username}
                        onChange={inputChangeHander} />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        name="age"
                        type="number"
                        value={userData.age}
                        onChange={inputChangeHander} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Fragment>
    )
}

export default AddUser;