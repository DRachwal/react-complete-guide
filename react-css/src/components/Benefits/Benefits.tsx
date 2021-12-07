import { FC } from 'react';

import Benefit from './Benefit';

import classes from './Benefits.module.css';

const BENEFITS = [
    '3,857,000 Trusting Customers',
    '99.999% Uptime Guarantee',
    'Lightning Fast CDN'
];
const Benefits: FC = () => {
    return (        
        <section className={classes.benefits}>
            <h1>Many Good Reasons to Stick Around</h1>
            <ul>
                {BENEFITS.map(benefit => <Benefit key={benefit} benefit={benefit} />)}
            </ul>
        </section>);
};

export default Benefits;