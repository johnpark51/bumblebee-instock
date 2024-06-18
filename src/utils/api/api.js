import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

class Api {

  constructor(baseURL) {
    this.baseURL = baseURL;
    this.api = axios.create({
      baseURL: this.baseURL,
      params: {}
    });
  };

  /* GET WAREHOUSES */
  async getWarehouses() {
    const route = '/warehouses';
    try {
      const res = await this.api.get(route);
      return res.data;
    } catch (e) {
      console.error(e);
    };
  };

  /* GET BY ID */
  async getWarehouse(id) {
    const route = `/warehouses/${id}`;
    try {
      const res = await this.api.get(route);
      return res.data;
    } catch (e) {
      console.error(e);
    };
  };

};

const api = new Api(BASE_URL);

export default api;
