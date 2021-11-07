import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../api/api';

export const useFetching = url => {
  const [data, setDate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${API_URL}${url}`)
      .then(response => {
        setDate(response.data);
      })
      .catch(e => setError(e.message))
      .finally(() => setIsLoading(false));
  }, [url]);

  return { data, isLoading, error };
};
