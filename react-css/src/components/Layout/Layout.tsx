import { FC } from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout: FC = ({ children }) => {
    return (<>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>)
};

export default Layout;