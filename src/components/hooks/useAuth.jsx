import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
