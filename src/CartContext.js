import React, { createContext, useState } from 'react';

// Create the CartContext
export const CartContext = createContext();

// Create a provider for the CartContext
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        if (!product || !product.id || typeof product.quantity !== 'number') {
            console.error('Invalid product object passed to addToCart:', product);
            return;
        }
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
            if (existingProductIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += product.quantity;
                return updatedCart;
            } else {
                return [...prevCart, product];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, calculateTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
