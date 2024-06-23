import { useEffect, useState } from "react";
import api from "@/utils/api/api.js";

const useInventories = (sort, asc) => {
  const [inventories, setInventories] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getInventories(sort, asc);
  }, [sort, asc]);

  const getInventories = async (sort, asc) => {
    try {
      const inventories = await api.getInventories(sort, asc);
      setInventories(inventories);
    } catch (e) {
      setError(e.message);
    }
  };

  return { inventories, error };
};

export default useInventories;
