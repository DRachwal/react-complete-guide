import { createContext, useState } from 'react';

const AuthContext = createContext({
    token: null,
    login: () => { },
    logout: () => { }
});

const getRemainingTime = expirationTime => {
    const currentTime = new Date().getTime(); // Get current time [ms]
    const remainingTime = expirationTime - currentTime;

    return remainingTime;
};

export const AuthContextProvider = ({ children }) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);

    const loginHandler = (token, expirationTime) => {
        setToken(token);
        localStorage.setItem('token', token);

        const remainingTime = getRemainingTime(expirationTime);
        setTimeout(logoutHandler, remainingTime); // Logout after token expires
    };

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    };

    const contextValue = {
        token,
        login: loginHandler,
        logout: logoutHandler
    };

    return (<AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>);
};

export default AuthContext;