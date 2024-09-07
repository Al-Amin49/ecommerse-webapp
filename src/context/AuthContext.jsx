
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider to wrap your app and provide auth state
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true)

  // Function to handle login
  const login = async (userData) => {
    setLoading(true);
    try {
        const response = await axios.post("https://ecommerse-webapp.vercel.app/login", userData);
        const data = response.data;

        
        if (data.success) {
            const decodedToken =jwtDecode(data.token); // Decode the JWT token
            console.log("Decoded Token:", decodedToken); 
            setUser(decodedToken); // Store the decoded user information
            localStorage.setItem('user', JSON.stringify(decodedToken)); // Store the decoded user information in localStorage
        } else {
            console.error(data.message);
        }
    } catch (error) {
        console.error("Login failed:", error);
    } finally {
        setLoading(false);
    }
};

    // Function to handle signup
    const signup = async (userData) => {
        setLoading(true);
        try {
            const response = await axios.post("https://ecommerse-webapp.vercel.app/register", userData);
            const data = response.data;

            if (data.success) {
                setUser(userData); 
                localStorage.setItem('user', JSON.stringify(userData));
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error("Signup failed:", error);
        } finally {
            setLoading(false);
        }
    };
 // Function to handle logout
 const logout = () => {
    setLoading(true);
    setUser(null);
    localStorage.removeItem('user');
    setLoading(false);
};

// Function to check authentication state
const checkAuth = () => {
    setLoading(true);
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        setUser(JSON.parse(storedUser));
    }
    setLoading(false);
};

 // Check auth status when component mounts
useEffect(() => {
    checkAuth();
}, []);


    return (
        <AuthContext.Provider value={{ user, login, signup, logout, checkAuth, loading }}>
            {children}
        </AuthContext.Provider>
    );
};


