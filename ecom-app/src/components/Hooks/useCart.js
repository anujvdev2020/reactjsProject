import { useState, useEffect } from 'react';

const useCart = () => {
  const [cartItems, setCartItems] = useState(() => {
    // Retrieve the initial cart items from localStorage if available
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Save cart items to localStorage whenever they change
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = (item) => {
    alert("")
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const addedToCart=(item)=>{
    const found = cartItems.find((element) => element.id == item.id);
    return found
  }

  return {
    cartItems,
    addItem,
    removeItem,
    clearCart,
    addedToCart
  };
};

export default useCart;
