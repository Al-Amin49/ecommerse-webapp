

import { createContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider to wrap your app and provide auth state
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const signup = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };
    const checkAuth = () => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, checkAuth }}>
            {children}
        </AuthContext.Provider>
    );
};


