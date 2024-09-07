import { createContext, useState } from "react";
import {
  addToCart,
  deleteCartItemById,
  resetCartByUserId,
  updateCartItemById,
} from "../api/CartApi";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const addItemToCart = async (item) => {
    setLoading(true);
    try {
      const newItem = await addToCart(item);
      console.log('newItem', newItem)
      setCartItems((prevItems) => [...prevItems, newItem]);
    } catch (err) {
        console.error('Error adding item to cart:', err);
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
      await resetCartByUserId();
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
