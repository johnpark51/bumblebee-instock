import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "@/utils/api/api.js";

function useInventory() {
  const { id } = useParams();
  const [ inventory, setInventory ] = useState(null);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    getInventory(id)
  }, [id]);

  async function getInventory(id) {
    try {
      const inventory = await api.getInventoriesDetails(id);
      setInventory(inventory);
    } catch (e) {
      setError(e.message);
    };
  };

  return { inventory, error };

};

export default useInventory;
