import axios from 'axios';

const BASE_URL = "https://ecommerse-webapp.vercel.app"; 

export const fetchCartByEmail = async (email) => {
    const response = await axios.get(`${BASE_URL}/carts?email=${email}`);
    return response.data;
};

export const addToCart = async (item) => {
    const response = await axios.post(`${BASE_URL}/cart`, item, {
      
        headers: {
            "Content-Type": "application/json",
        },
    });
    console.log('response', response)
    return response.data;
};

export const updateCartItemById = async (id, updatedItem) => {
    const response = await axios.put(`${BASE_URL}/cart/${id}`, updatedItem, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.data;
};

export const deleteCartItemById = async (id) => {
    const response = await axios.delete(`${BASE_URL}/cart/${id}`);
    return response.data;
};

export const resetCartByUserId = async (userId) => {
    const response = await axios.delete(`${BASE_URL}/cart/reset/${userId}`);
    return response.data;
};
