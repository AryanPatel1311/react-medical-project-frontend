// useFetchData.js
import { useEffect, useState } from "react";
import requestWithCorsProxy from "./corsProxy";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Use the requestWithCorsProxy utility instead of fetch
        const result = await requestWithCorsProxy(url, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });

        setData(result);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
