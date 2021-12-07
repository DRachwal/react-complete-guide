import { FC } from 'react';

import classes from './HeaderImage.module.css';

const HeaderImage: FC = () => {
    return (
        <section className={classes.image}>
            <h1>Get the freedom you deserve</h1>
        </section>
    );
};

export default HeaderImage;