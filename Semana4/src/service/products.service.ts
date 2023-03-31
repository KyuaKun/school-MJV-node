import { IProduct } from "../model/product.model";

class ProductService {
  products = [
    {
      id: "1",
      description: "Notebook S51",
      img: "https://images.samsung.com/is/image/samsung/br-notebook-style-s51-np730xbe-kp1br-np730xbe-kp1br-fronttitanumsilver-185313138?$720_576_PNG$",
      price: 5000,
      quantity: 5,
    },
    {
      id: "2",
      description:
        "Notebook Samsung Book E30 Intel Core i3 4GB 1TB - 15,6” Full HD Windows 10",
      img: "https://a-static.mlcdn.com.br/1500x1500/notebook-samsung-book-e30-intel-core-i3-4gb-1tb-156-full-hd-windows-10/magazineluiza/135258300/44bf629ad1472f3a86f5ae8b55ed0672.jpg",
      price: 3500,
      quantity: 3,
    },
    {
      id: "3",
      description:
        "Notebook Acer Aspire 5 A514-53-59QJ Intel Core I5 8GB 256GB SSD 14 Windows 10",
      img: "https://acerstore.vteximg.com.br/arquivos/ids/157506-760-760/A514-53-54_SSD_01.jpg?v=637396805695270000",
      price: 4000,
      quantity: 2,
    },
    {
      id: "4",
      description:
        'Notebook Samsung Book E30 15.6" Intel® Core™ i3-10110U 4GB/1TB Windows 10 Home',
      img: "https://d3bkgvrq5dqryp.cloudfront.net/Custom/Content/Products/34/17/3417_product-00079815_m39_637400210574011388",
      price: 3000,
      quantity: 0,
    },
    {
      id: "5",
      description: "Notebook ASUS VivoBook X543UA-GQ3157T Cinza Escuro",
      img: "https://www.lojaasus.com.br/media/catalog/product/cache/e62f984c1b34771579d59f0076d196f0/0/0/00asus_laptop_x543_cinza_escuro_13_1_8.png",
      price: 3350,
      quantity: 2,
    },
  ];

  index() {
    return this.products;
  }

  read(id: string) {
    const document = this.products.find((pdt) => pdt.id === id);
    return document;
  }

  store(product: IProduct) {
    const newProduct = this.products.push(product);
    return newProduct;
  }

  destroy(id: string) {
    const docIndex = this.findById(id);
    this.products.splice(docIndex, 1);
  }

  update(id: string, document: IProduct) {
    const docIndex = this.findById(id);
    this.products[docIndex] = document;
  }

  findById(id: string) {
    const indexProduct = this.products.findIndex((e) => e.id === id);
    if (indexProduct === -1) {
      throw new Error("Produto não encontrado.");
    }
    return indexProduct;
  }
}

export default new ProductService();
