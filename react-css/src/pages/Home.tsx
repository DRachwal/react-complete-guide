import { FC } from 'react';

import HeaderImage from '../components/Layout/HeaderImage';
import Plans from '../components/Plans/Plans';
import Benefits from '../components/Benefits/Benefits';

const Home: FC = () => {
    return (
        <>
            <HeaderImage />
            <Plans/>
            <Benefits />
        </>
    );
};

export default Home;