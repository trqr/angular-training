export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};


export type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  stock: number;
  availabilityStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
};

export type ProductCreationRequest = Omit<Product, 'id' | 'availabilityStatus'>;

export const emptyProduct: ProductCreationRequest = {
  title: '',
  price: 0,
  thumbnail: '',
  stock: 0,
};
