import { createContext, useState } from 'react';

const AuthContext = createContext({
    token: null,
    login: () => { },
    logout: () => { }
});

export const AuthContextProvider = ({ children }) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);

    const loginHandler = token => {
        setToken(token);
        localStorage.setItem('token', token);
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