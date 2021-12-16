import { FC } from 'react';

import classes from './Customer.module.css';

const Customer: FC<{name: string, subtitle: string, url: string | null, description: string, image: string}> = ({name, subtitle, url, description, image}) => {
    return (
        <div className={classes.customer}>
            <div className={classes.imageContainer}>
                <img src={image} alt={name} />
            </div>
            <div className={classes.info}>
                <h1>{name}</h1>
                <h2>{subtitle}
                    {url && <a href={url}>{url}</a>}
                </h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Customer;