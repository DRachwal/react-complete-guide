import { FC } from 'react';

import Package from './Package';

import classes from './Packages.module.css';

const PACKAGES = [
    {
        id: 1,
        title: 'Our PLUS Plan',
        subtitle: 'The most popular choice of our customers',
        description: 'Benefit from increased storage and faster support to ensure that your mission-critical data and applications are always available!',
        recommended: true
    }, {
        id: 2,
        title: 'Our FREE Plan',
        subtitle: 'An extremely solid start into our hosting world.',
        description: 'Get started immediately at zero cost!',
        recommended: false
    }, {
        id: 3,
        title: 'Our PREMIUM Plan',
        subtitle: 'All your enterprise needs. Instant support, guaranteed uptime.',
        description: 'The best solution for small to large enterprises. Because hosting shouldn\'t be in the way!',
        recommended: false
    }
];

const PackagesList: FC = () => {
    return (
        <>
            <div className={classes.background}/>
            <div className={classes.packages}>
                {PACKAGES.map(item => (
                    <Package
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        subtitle={item.subtitle}
                        description={item.description}
                        recommended={item.recommended}
                    />
                ))}
            </div>
        </>
      );
};

export default PackagesList;