import { prodAxios } from '../http-common';

class ProductDataService {
  getAll() {
    return prodAxios.get("/products");
  }

  get(id) {
    return prodAxios.get(`/products/${id}`);
  }

  create(data) {
    return prodAxios.post("/products", data);
  }

  update(id, data) {
    return prodAxios.put(`/products/${id}`, data);
  }

  delete(id) {
    return prodAxios.delete(`/products/${id}`);
  }

  deleteAll() {
    return prodAxios.delete(`/products`);
  }

  findByTitle(title) {
    return prodAxios.get(`/products?title=${title}`);
  }
}

export default new ProductDataService();