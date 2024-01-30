import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/authContext';
import { useContext } from 'react';

function App() {
  const { isLoggedIn, onLogout, onLogin } = useContext(AuthContext);

  return (
    <>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={onLogin} />}
        {isLoggedIn && <Home onLogout={onLogout} />}
      </main>
    </>
  );
}

export default App;
