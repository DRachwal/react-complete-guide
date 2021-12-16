import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

import logo from '../../assets/images/uhost-icon.png';

const Header: FC = () => {
    return (<>
        <header className={classes.header}>
            <div>
                <NavLink to='/'>
                    <img src={logo} alt='logo'/>
                </NavLink>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/packages'>Packages</NavLink>
                    </li>
                    <li>
                        <NavLink to='/customers'>Customers</NavLink>
                    </li>
                    <li className={classes.cta}>
                        <NavLink to='/'>Start Hosting</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>
    );
};

export default Header;