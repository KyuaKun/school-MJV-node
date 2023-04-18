import ProductRepository from "../repository/product.repository";
import { Product } from "../model/product.model";

class ProductsService {

  getAll() {
    return ProductRepository.getlAll();
  }

  getByDocument(document: string) {
    return ProductRepository.getByDocument(document);
  }

  create(product: typeof Product) {
    return ProductRepository.create(product);
  }

  remove(id: string) {
    return ProductRepository.remove(id);
  }

  update(id: string, product: Partial<typeof Product>) {
    return ProductRepository.update(id, product);
  }
}

export default new ProductsService();
