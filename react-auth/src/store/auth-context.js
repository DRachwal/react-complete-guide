import { createContext, useState, useEffect, useCallback } from 'react';

let logoutTimer = null;

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

const getStoredToken = () => {
    // Get token & expiration time from local storage
    const token = localStorage.getItem('token');
    const expirationTime = localStorage.getItem('expirationTime');

    const remainingTime = getRemainingTime(expirationTime); // Calculate remaining time

    if (remainingTime <= 60000) // If the remaining time is lower or equal then 1 min, return null
        return null;

    return {
        token,
        remainingTime
    } // In other case return stored token & expiration time
};

export const AuthContextProvider = ({ children }) => {
    const tokenData = getStoredToken();
    const initialToken = tokenData ? tokenData.token : null;

    const [token, setToken] = useState(initialToken);

    const loginHandler = (token, expirationTime) => {
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime);

        const remainingTime = getRemainingTime(expirationTime);
        logoutTimer = setTimeout(logoutHandler, remainingTime); // Logout after token expires
    };

    const logoutHandler = useCallback(() => {
        // Clear token & expiration time
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');

        if (logoutTimer) // Clear logout timer if user logs out
            clearTimeout(logoutTimer);
    }, []);

    useEffect(() => {
        if (tokenData) {
            logoutTimer = setTimeout(logoutHandler, tokenData.remainingTime);
        }
    }, [tokenData, logoutHandler]);

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