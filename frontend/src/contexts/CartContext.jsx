// cartcontext.jsx
import { createContext, useState } from 'react';

// Create the context
export const CartContext = createContext();

// Context Provider component
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
