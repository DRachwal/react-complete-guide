import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

const Header: FC = () => {
    return (
        <header className={classes.header}>
            <div>
                <NavLink to='/'>uHost</NavLink>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Packages</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Customers</NavLink>
                    </li>
                    <li className={classes.cta}>
                        <NavLink to='/'>Start Hosting</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;