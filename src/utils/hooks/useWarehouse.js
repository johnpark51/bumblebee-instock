import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "@/utils/api/api.js";

function useWarehouse() {
  const { id } = useParams();
  const [ warehouse, setWarehouse ] = useState(null);
  const [ inventories, setInventories ] = useState(null);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    getWarehouse(id);
    getWarehouseInventory(id);
  }, [id]);

  async function getWarehouse(id) {
    try {
      const warehouse = await api.getWarehouse(id);
      setWarehouse(warehouse);
    } catch (e) {
      setError(e.message);
    };
  };

  async function getWarehouseInventory(id) {
    try {
      const inventory = await api.getWarehouseInventories(id);
      setInventories(inventory)
    } catch (e) {
      setError(e.message);
    };
  };

  return { warehouse, inventories, error };

};

export default useWarehouse;
