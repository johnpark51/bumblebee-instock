import { useEffect, useState } from "react";
import api from "@/utils/api/api.js";

function useWarehouses() {
  const [ warehouses, setWarehouses ] = useState(null);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    getWarehouses();
  }, []);

  /* FETCH ALL */
  async function getWarehouses() {
    try {
      const warehouses = await api.getWarehouses();
      setWarehouses(warehouses);
    } catch (e) {
      setError(e.message);
    };
  };

  return { warehouses, error };
};

export default useWarehouses;
