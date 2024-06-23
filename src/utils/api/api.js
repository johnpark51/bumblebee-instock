import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

class Api {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.api = axios.create({
      baseURL: this.baseURL,
      params: {},
    });
  }

  async getWarehouses(sort_by) {
    const route = `/warehouses?sort_by=${sort_by}`;
    try {
      const res = await this.api.get(route);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  }

  async getWarehouse(id) {
    const route = `/warehouses/${id}`;
    try {
      const res = await this.api.get(route);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  }

  async getWarehouseDetails(id) {
    const route = `/warehouses/details/${id}`;
    try {
      const res = await this.api.get(route);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  }

  async getInventories() {
    const route = "/inventories";
    try {
      const res = await this.api.get(route);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  }

  async getInventoriesDetails(id) {
    const route = `/inventories/${id}`;
    try {
      const res = await this.api.get(route);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  }
}

const api = new Api(BASE_URL);

export default api;
