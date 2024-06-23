import { useEffect, useState } from "react";
import api from "@/utils/api/api.js";

function useWarehouses(sort) {
  const [warehouses, setWarehouses] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getWarehouses(sort);
  }, [sort]);

  async function getWarehouses(sort) {
    try {
      const warehouses = await api.getWarehouses(sort);
      setWarehouses(warehouses);
    } catch (e) {
      setError(e.message);
    }
  }

  return { warehouses, error };
}

export default useWarehouses;
