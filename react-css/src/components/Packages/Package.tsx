import { FC } from 'react';
import { Link } from 'react-router-dom';

import classes from './Package.module.css';

const Package: FC<{id: number, title: string, subtitle: string, description: string, recommended: boolean}> = ({id, title, subtitle, description, recommended}) => {
    const packageClass = `${classes.package} ${id === 2 ? classes.float : ''}`;

    return (
        <>
            <section className={packageClass}>
                <Link to ='/'>
                    <h1>{title}</h1>
                    {recommended && <h2 className={classes.badge}>RECOMMENDED</h2>}
                    <h2>{subtitle}</h2>
                    <p>{description}</p>
                </Link>
            </section>
            <div className={classes.clear}></div>
        </>
    );
};

export default Package;