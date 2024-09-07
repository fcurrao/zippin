
import { useState, useEffect } from 'react';
import { fetchData } from '../services/apiService.ts';

export const useFetchData = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);
  
    // Utilizacion de este Custom Hook para la carga de datos traido por peticiones fetch.
    useEffect(() => {
      const loadData = async () => {
        try { 
          const result = await fetchData(url);
          console.log("Fetched data:", result);  
          setData(result);
        } catch (err: any) {
          console.error("Error fetching data:", err);
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      loadData();
    }, [url]);
  
    return { data, loading, error };
  };
  