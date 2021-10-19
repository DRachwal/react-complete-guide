import { createContext, useState } from 'react';

const AuthContext = createContext({
    token: null,
    login: () => { },
    logout: () => { }
});

export const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    const loginHandler = token => {
        setToken(token);
    };

    const logoutHandler = () => {
        setToken(null);
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