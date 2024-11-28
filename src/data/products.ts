export type Category = 'wszystkie' | 'kross' | 'vintage' | 'mountain' | 'e-bike' | 'child';

export interface Product {
  id: number;
  name: string;
  description: string;
  category: Category;
  price: number;
  image: string;
  onSale: boolean;
  saleAmount: number;
}

export const products: Product[] = [
  {
    id: 0,
    name: 'Kross',
    description: 'lorem',
    category: 'kross',
    price: 2999.99,
    image: '/images/kross.png',
    onSale: true,
    saleAmount: 200,
  },
  {
    id: 1,
    name: 'Vintage',
    description: 'lorem',
    category: 'vintage',
    price: 3999.99,
    image: '/images/vintage.png',
    onSale: false,
    saleAmount: 0,
  },
  {
    id: 2,
    name: 'Mountain',
    description: 'lorem',
    category: 'mountain',
    price: 2589.99,
    image: '/images/mountain.png',
    onSale: true,
    saleAmount: 150,
  },
  {
    id: 3,
    name: 'E-bike',
    description: 'lorem',
    category: 'e-bike',
    price: 4599.99,
    image: '/images/e-bike.png',
    onSale: false,
    saleAmount: 0,
  },
  {
    id: 4,
    name: 'Child',
    description: 'lorem',
    category: 'child',
    price: 859.99,
    image: '/images/child.png',
    onSale: true,
    saleAmount: 300,
  },
];

export const getCategories = (): Category[] => {
  return ['wszystkie', ...new Set(products.map((product) => product.category))];
};
