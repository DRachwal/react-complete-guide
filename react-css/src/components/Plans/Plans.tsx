import { FC } from 'react';

import Plan from './Plan';

import classes from './Plans.module.css';

const PLANS = [
    {
        title: 'FREE',
        price: 0,
        description: 'For hobby projects or small teams.',
        options: [
            '1 Workspace',
            'Unlimited Traffic',
            '10GB Storage',
            'Basic Support'
        ],
        recommended: false
    }, {
        title: 'RECOMMENDED',
        price: 29,
        description: 'For ambitious projects.',
        options: [
            '5 Workspaces',
            'Unlimited Traffic',
            '100GB Storage',
            'Plus Support'
        ],
        recommended: true
    }, {
        title: 'PREMIUM',
        price: 99,
        description: 'Your enterprise solution.',
        options: [
            '10 Workspaces',
            'Unlimited Traffic',
            'Unlimited Storage',
            'Priority Support',
        ],
        recommended: false
    }
]
const Plans: FC = () => {
    return (
    <section className={classes.plans}>
        <h1>Choose your plan</h1>
        <div>
            {PLANS.map(plan => <Plan 
                title={plan.title}
                price={plan.price}
                description={plan.description}
                options={plan.options}
                recommended={plan.recommended} />)}
        </div>
    </section>);
};

export default Plans;