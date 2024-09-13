import { useState } from 'react';  

// Define a type for Product  
interface Product {  
  id: string;  
  name: string;  
  price: number;  
}  

// Define a type for the CartItem  
interface CartItem extends Product {  
  quantity: number;  
}  

// Custom hook for cart  
const useAddToCart = () => {  
  const [cart, setCart] = useState<CartItem[]>([]);  

  const addToCart = (product: Product) => {  
    setCart(prevCart => {  
      // Check if the product already exists in the cart  
      const existingItem = prevCart.find(item => item.id === product.id);  
      
      if (existingItem) {  
        // Update the quantity if it exists  
        return prevCart.map(item =>  
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item  
        );  
      } else {  
        // Add new product to the cart with quantity 1  
        return [...prevCart, { ...product, quantity: 1 }];  
      }  
    });  
  };  

  const removeFromCart = (productId: string) => {  
    setCart(prevCart => prevCart.filter(item => item.id !== productId));  
  };  

  const clearCart = () => {  
    setCart([]);  
  };  

  return { cart, addToCart, removeFromCart, clearCart };  
};  

export default useAddToCart;