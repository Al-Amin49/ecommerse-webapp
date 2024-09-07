import { createContext, useState, useEffect } from "react";
import {
  addToCart,
  deleteCartItemById,
  fetchCartByUserId,
  resetCartByUserId,
  updateCartItemById,
} from "../api/CartApi";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const userId = "user-id"; // Replace with actual user ID

  useEffect(() => {
    setLoading(true);
    fetchCartByUserId(userId)
      .then((items) => setCartItems(items))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [userId]);

  const addItemToCart = async (item) => {
    setLoading(true);
    try {
      const newItem = await addToCart(item);
      setCartItems((prevItems) => [...prevItems, newItem]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const updateItemInCart = async (id, updatedItem) => {
    setLoading(true);
    try {
      const updated = await updateCartItemById(id, updatedItem);
      setCartItems((prevItems) =>
        prevItems.map((item) => (item._id === id ? updated : item))
      );
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const removeItemFromCart = async (id) => {
    setLoading(true);
    try {
      await deleteCartItemById(id);
      setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const resetCart = async () => {
    setLoading(true);
    try {
      await resetCartByUserId(userId);
      setCartItems([]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        updateItemInCart,
        removeItemFromCart,
        resetCart,
        loading,
        error,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
