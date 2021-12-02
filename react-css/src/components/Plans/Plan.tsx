import { FC } from 'react';

import classes from './Plan.module.css';

const Plan: FC<{title: string, price: number, description: string, options: Array<string>, recommended: boolean}> = ({ title, price, description, options, recommended}) => {
    console.log(recommended && classes.planRecommended);

    return (
        <article className={`${classes.plan} ${recommended && classes.highlited}`}>
            <h1 className={recommended ? classes.recommended : ''}>{title}</h1>
            {recommended && 'PLUS'}
            <h2>${price}/month</h2>
            <h3>{description}</h3>
            <ul>
                {options.map(option => <li>{option}</li>)}
            </ul>
            <div>
                <button>CHOOSE PLAN</button>
            </div>
        </article>
    );
};

export default Plan;