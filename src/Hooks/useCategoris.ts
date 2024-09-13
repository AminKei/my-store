import { useState, useEffect } from 'react';  

// Define a type for Category  
interface Category {  
  id: string;  
  name: string;  
}  

// Custom hook for categories  
const useCategories = () => {  
  const [categories, setCategories] = useState<Category[]>([]);  
  const [loading, setLoading] = useState<boolean>(true);  
  const [error, setError] = useState<string | null>(null);  

  // Example of fetching categories (replace with your actual API call)  
  const fetchCategories = async () => {  
    try {  
      setLoading(true);  
      const response = await fetch('/api/categories'); // Adjust the API endpoint  
      if (!response.ok) {  
        throw new Error('Failed to fetch categories');  
      }  
      const data = await response.json();  
      setCategories(data);  
    } catch (err:any) {  
      setError(err.message);  
    } finally {  
      setLoading(false);  
    }  
  };  

  useEffect(() => {  
    fetchCategories();  
  }, []);  

  return { categories, loading, error };  
};  

export default useCategories;