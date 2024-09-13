import { useState, useEffect } from 'react';  

// Define a generic type for response data  
interface UseFetch<T> {  
  data: T | null;  
  loading: boolean;  
  error: string | null;  
}  

const useFetch = <T>(url: string): UseFetch<T> => {  
  const [data, setData] = useState<T | null>(null);  
  const [loading, setLoading] = useState<boolean>(true);  
  const [error, setError] = useState<string | null>(null);  

  useEffect(() => {  
    const fetchData = async () => {  
      try {  
        setLoading(true);  
        const response = await fetch(url);  

        if (!response.ok) {  
          throw new Error('Network response was not ok');  
        }  

        const jsonData: T = await response.json();  
        setData(jsonData);  
      } catch (err: any) {  
        setError(err.message);  
      } finally {  
        setLoading(false);  
      }  
    };  

    fetchData();  
  }, [url]);  

  return { data, loading, error };  
};  

export default useFetch;