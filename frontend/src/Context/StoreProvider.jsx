// In StoreProvider.jsx
import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

// Create the context
const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            if (!prev[itemId]) return prev;
            const newCart = { ...prev };
            newCart[itemId] -= 1;
            if (newCart[itemId] <= 0) {
                delete newCart[itemId];
            }
            return newCart;
        });
    };

    useEffect(() => {
        console.log('Cart updated:', cartItems);
    }, [cartItems]);

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart
    };
    
    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

// Export the context and provider
export { StoreContext, StoreProvider };