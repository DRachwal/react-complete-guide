import { FC } from 'react';

import classes from './Benefit.module.css';

const Benefit: FC<{name: string}> = ({ name, children }) => {
    return (
        <li className={classes.benefit}>
            <div>
                {children}
            </div>
            <p>{name}</p>
        </li>
    );
};

export default Benefit;