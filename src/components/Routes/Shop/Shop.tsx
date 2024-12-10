import { ProductsList } from './ProductsList/ProductsList';
import { Sidebar } from './Sidebar/Sidebar';

export const Shop = () => {
  return (
    <main className='grid grid-cols-[300px_1fr] max-sm:flex max-sm:flex-col'>
      <Sidebar />
      <ProductsList />
    </main>
  );
};
