import { useEffect, useState } from "react";
import api from "@/utils/api/api.js";

const useInventories = () => {
  const [inventories, setInventories] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getInventories();
  }, []);

  //Fetch all inventories
  const getInventories = async () => {
    try {
      const inventories = await api.getInventories();
      setInventories(inventories);
    } catch (e) {
      setError(e.message);
    }
  };

  return { inventories, error };
};

export default useInventories;
