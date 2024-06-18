import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "@/utils/api/api.js";

function useWarehouse() {
  const { id } = useParams();
  const [ warehouse, setWarehouse ] = useState(null);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    getWarehouse(id)
  }, [id]);

  /* FETCH WAREHOUSE BY ID */
  async function getWarehouse(id) {
    try {
      const warehouse = await api.getWarehouse(id);
      setWarehouse(warehouse);
    } catch (e) {
      setError(e.message);
    };
  };

  return { warehouse, error };

};

export default useWarehouse;
