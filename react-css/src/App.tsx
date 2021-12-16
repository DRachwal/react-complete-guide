import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Customers from './pages/Customers';

const App = () => {
  return (
    <Layout>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/packages' element={<Packages />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='*' element={<Navigate to='/' />}/>
        </Routes>
    </Layout>
  );
}

export default App;