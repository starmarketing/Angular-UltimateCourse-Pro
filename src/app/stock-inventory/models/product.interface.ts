export interface Product {
  id: number;
  name: string;
  quantity: number;
}

export interface Item {
  product_id: number;
  quantity: number;
}
