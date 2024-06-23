import { useEffect, useState } from "react";
import api from "@/utils/api/api.js";

function useWarehouses(sort, asc) {
  const [warehouses, setWarehouses] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getWarehouses(sort, asc);
  }, [sort, asc]);

  async function getWarehouses(sort, asc) {
    try {
      const warehouses = await api.getWarehouses(sort, asc);
      setWarehouses(warehouses);
    } catch (e) {
      setError(e.message);
    }
  }

  return { warehouses, error };
}

export default useWarehouses;
