import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Create the Context
const CartContext = createContext();

// 2. Create the custom hook (this is what your components will use)
export const useCart = () => useContext(CartContext);

// 3. Create the Provider (this is the component that does all the work)
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Function to add an item
    const addItemToCart = (product) => {
        setCartItems((prevItems) => {
            // Check if the item is already in the cart
            const existingItem = prevItems.find((item) => item.id === product.id);

            if (existingItem) {
                // If it exists, map over and increase its quantity
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // If it's a new item, add it to the array with quantity 1
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
        
        // Open the cart automatically when a new item is added
        setIsCartOpen(true); 
    };

    // Function to remove an item (you'll need this for the cart)
    const removeItemFromCart = (productId) => {
        setCartItems((prevItems) => {
            return prevItems.filter((item) => item.id !== productId);
        });
    };

    // Function to toggle the cart's visibility
    const toggle = () => {
        setIsCartOpen((prev) => !prev);
    };

    // Calculate the total count of items (not just unique items)
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);

    // The "value" is what all child components will get from the context
    const value = {
    cartItems,
    isCartOpen,
    addItemToCart, // <-- Make sure this is here
    removeItemFromCart,
    toggle,
    count,
};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};