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

  async getWarehouses(sort_by, asc) {
    const route = `/warehouses?sort_by=${sort_by}&order_by=${asc}`;
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

  async getWarehouseInventories(id) {
    const route = `/warehouses/${id}/inventories`;
    try {
      const res = await this.api.get(route);
      return res.data;
    } catch (e) {
      throw new Error(e);
    }
  }

  async getInventories(sort_by, asc) {
    const route = `/inventories?sort_by=${sort_by}&order_by=${asc}`;
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
