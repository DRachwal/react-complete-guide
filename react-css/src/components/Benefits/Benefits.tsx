import { FC } from 'react';

import Benefit from './Benefit';

import classes from './Benefits.module.css';

import { ReactComponent as Benefit1 } from '../../assets/images/benefit-1.svg';
import { ReactComponent as Benefit2 } from '../../assets/images/benefit-2.svg';
import { ReactComponent as Benefit3 } from '../../assets/images/benefit-3.svg';

const BENEFITS = [
    {
        name: '3,857,000 Trusting Customers',
        image: <Benefit1 />
    }, {
        name: '99.999% Uptime Guarantee',
        image: <Benefit2 />
    }, {
        name: 'Lightning Fast CDN',
        image: <Benefit3 />
    }
];
const Benefits: FC = () => {
    return (        
        <section className={classes.benefits}>
            <h1>Many Good Reasons to Stick Around</h1>
            <ul>
                {BENEFITS.map(benefit => <Benefit 
                    key={benefit.name} 
                    name={benefit.name}
                >
                    {benefit.image}
                </Benefit>)}
            </ul>
        </section>);
};

export default Benefits;