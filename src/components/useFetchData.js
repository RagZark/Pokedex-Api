import { useState, useEffect } from 'react';

const useFetchData = (fetchFunction, dependency) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await fetchFunction(dependency);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (dependency) {
      fetchData();
    }
  }, [fetchFunction, dependency]);

  return { data, loading, error };
};

export default useFetchData;