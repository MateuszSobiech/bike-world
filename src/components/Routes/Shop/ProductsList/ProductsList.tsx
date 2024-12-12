import { useFilterContext } from '../../../../contexts/FilterContextProvider';
import { useProductsContext } from '../../../../contexts/ProductsProvider';
import { BikesList } from '../BikesList/BikesList';

export const ProductsList = () => {
  const {products} = useProductsContext();
  const { filters } = useFilterContext();

  const filtredProducts = products.filter((product) => {
    const hasSearch =
      filters.search === '' || product.name.toLowerCase().includes(filters.search.toLowerCase());
    const hasCategory = filters.category === 'wszystkie' || product.category === filters.category;

    return hasSearch && hasCategory;
  });

  return (
    <div className='flex flex-wrap justify-center gap-12 p-8'>
      {filtredProducts.length > 0 ? (
        <BikesList filtredProducts={filtredProducts} />
      ) : (
        <h1 className='text-4xl font-bold'>Nie znaleziono żadnego produktu...</h1>
      )}
    </div>
  );
};
