import { FC } from 'react';

import classes from './Button.module.css';

const Button: FC = ({ children }) => {
    return <button className={classes.button}>{children}</button>
};

export default Button;