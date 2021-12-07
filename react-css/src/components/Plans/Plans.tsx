import { FC } from 'react';

import Plan from './Plan';

import classes from './Plans.module.css';

const PLANS = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
                key={plan.id}
                title={plan.title}
                price={plan.price}
                description={plan.description}
                options={plan.options}
                recommended={plan.recommended} />)}
        </div>
    </section>);
};

export default Plans;