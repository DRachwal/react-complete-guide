import { useState, useEffect, createContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => { },
  onLogin: (email, password) => { }
});

console.log('AuthContext', AuthContext)

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedInStorage = localStorage.getItem('isLoggedIn');
    if (isLoggedInStorage) setIsLoggedIn(true);
  }, [])

  const loginHandler = () => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', 1);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };


  return <AuthContext.Provider value={{
    isLoggedIn,
    onLogout: logoutHandler,
    onLogin: loginHandler
  }}>
    {children}
  </AuthContext.Provider>
}

export default AuthContext;