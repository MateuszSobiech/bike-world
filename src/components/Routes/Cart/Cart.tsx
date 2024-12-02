import { Link } from 'react-router-dom';
import { useCartContext } from '../../../contexts/CartProvider';
import { ProductsChcekoutList } from './ProductsChcekoutList/ProductsChcekoutList';

export const Cart = () => {
  const { cartEntities } = useCartContext();
  const hasEntities = cartEntities.length > 0;

  return (
    <div className='flex justify-center p-4'>
      <div className='w-2/3'>
        <h2 className='mb-8 text-center text-3xl'>Podsumowanie koszyka</h2>

        {hasEntities ? (
          <ProductsChcekoutList />
        ) : (
          <div className='text-center'>
            <h3>Brak produktów</h3>
            <Link className='text-blue-600' to='/'>
              Przejdź do strony sklepu
            </Link>
          </div>
        )}

        <div className={`flex justify-center ${!hasEntities ? 'pointer-events-none' : ''}`}>
          {/* TODO zablokować LINK if  */}
          <Link to='dane-wysylki' className='mt-16 rounded-lg border bg-blue-500 p-4 text-3xl text-center'>
            Dane do wysyłki
          </Link>
        </div>
      </div>
    </div>
  );
};
