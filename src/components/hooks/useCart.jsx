import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

// Custom hook to use the AuthContext
export const useCart = () => useContext(CartContext);
