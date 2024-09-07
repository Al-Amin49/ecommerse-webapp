import axios from 'axios';

const BASE_URL = "https://ecommerse-webapp.vercel.app"; 

export const fetchCartByUserId = async (userId) => {
    const response = await axios.get(`${BASE_URL}/cart/${userId}`);
    return response.data;
};

export const addToCart = async (item) => {
    const response = await axios.post(`${BASE_URL}/cart`, item, {
        headers: {
            "Content-Type": "application/json",
        },
    });
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
