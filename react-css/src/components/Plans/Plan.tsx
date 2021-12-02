import { FC } from 'react';

import Button from '../UI/Button/Button';

import classes from './Plan.module.css';

const Plan: FC<{title: string, price: number, description: string, options: Array<string>, recommended: boolean}> = ({ title, price, description, options, recommended}) => {
    const articleClass = `${classes.plan} ${recommended ? classes.highlited : ''}`;
    const titleClass = recommended ? classes.recommended : classes.title;

    return (
        <article className={articleClass}>
            <h1 className={titleClass}>{title}</h1>
            {recommended && <h1 className={classes.title}>PLUS</h1>}
            <h2 className={classes.price}>${price}/month</h2>
            <h3>{description}</h3>
            <ul>
                {options.map(option => <li>{option}</li>)}
            </ul>
            <div>
                <Button>CHOOSE PLAN</Button>
            </div>
        </article>
    );
};

export default Plan;