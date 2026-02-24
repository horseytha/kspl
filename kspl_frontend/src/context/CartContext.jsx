import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext(null);

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existing = state.find(
                item => item.id === action.payload.id && item.size === action.payload.size
            );
            if (existing) {
                return state.map(item =>
                    item.id === action.payload.id && item.size === action.payload.size
                        ? { ...item, quantity: item.quantity + action.payload.quantity }
                        : item
                );
            }
            return [...state, { ...action.payload }];
        }
        case 'REMOVE_FROM_CART':
            return state.filter(
                item => !(item.id === action.payload.id && item.size === action.payload.size)
            );
        case 'UPDATE_QUANTITY':
            return state.map(item =>
                item.id === action.payload.id && item.size === action.payload.size
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
};

const loadCart = () => {
    try {
        const stored = localStorage.getItem('kspl_cart');
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, [], loadCart);

    useEffect(() => {
        localStorage.setItem('kspl_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, quantity, size) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                id: product.id,
                name: product.name,
                category: product.category?.name || 'Product',
                image: product.imageUrl,
                quantity: parseInt(quantity) || 1,
                size,
            },
        });
    };

    const removeFromCart = (id, size) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { id, size } });
    };

    const updateQuantity = (id, size, quantity) => {
        if (quantity < 1) return;
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, size, quantity } });
    };

    const clearCart = () => dispatch({ type: 'CLEAR_CART' });

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within CartProvider');
    return ctx;
};
