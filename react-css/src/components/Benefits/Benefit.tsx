import { FC } from 'react';

import classes from './Benefit.module.css';

const Benefit: FC<{benefit: string}> = ({ benefit }) => {
    return (
        <li className={classes.benefit}>
            <div>

            </div>
            <p>{benefit}</p>
        </li>
    );
};

export default Benefit;