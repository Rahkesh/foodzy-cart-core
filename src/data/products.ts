import { Product } from '@/store/cartStore';
import lettuceOrganic from '@/assets/products/lettuce-organic.jpg';
import corn from '@/assets/products/corn.jpg';
import cauliflower from '@/assets/products/cauliflower.jpg';
import greenApples from '@/assets/products/green-apples.jpg';
import lettuceGreen from '@/assets/products/lettuce-green.jpg';
import eggplant from '@/assets/products/eggplant.jpg';
import potatoes from '@/assets/products/potatoes.jpg';
import redCapsicum from '@/assets/products/red-capsicum.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Fresh Indian Organic Lettuce',
    price: 4.99,
    originalPrice: 6.99,
    image: lettuceOrganic,
    category: 'Vegetables',
    rating: 4,
    weight: '1 kg',
    stock: 50,
    description: 'Fresh organic lettuce from local farms',
  },
  {
    id: '2',
    name: 'Corn',
    price: 3.49,
    image: corn,
    category: 'Vegetables',
    rating: 4,
    weight: '500g',
    stock: 30,
  },
  {
    id: '3',
    name: 'Fresh Cauliflower',
    price: 3.99,
    image: cauliflower,
    category: 'Vegetables',
    rating: 5,
    weight: '1 kg',
    stock: 25,
  },
  {
    id: '4',
    name: 'Green Apple (4 pcs)',
    price: 6.99,
    originalPrice: 8.99,
    image: greenApples,
    category: 'Fruits',
    rating: 4,
    weight: '4 pcs',
    stock: 40,
  },
  {
    id: '5',
    name: 'Green Lettuce',
    price: 3.49,
    originalPrice: 4.99,
    image: lettuceGreen,
    category: 'Vegetables',
    rating: 4,
    weight: '500g',
    stock: 35,
  },
  {
    id: '6',
    name: 'Eggplant',
    price: 4.49,
    image: eggplant,
    category: 'Vegetables',
    rating: 4,
    weight: '1 kg',
    stock: 20,
  },
  {
    id: '7',
    name: 'Big Potatoes',
    price: 2.99,
    originalPrice: 3.99,
    image: potatoes,
    category: 'Vegetables',
    rating: 5,
    weight: '2 kg',
    stock: 60,
  },
  {
    id: '8',
    name: 'Red Capsicum',
    price: 5.49,
    image: redCapsicum,
    category: 'Vegetables',
    rating: 4,
    weight: '500g',
    stock: 30,
  },
];
