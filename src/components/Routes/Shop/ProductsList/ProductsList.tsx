import { useFilterContext } from "../../../../contexts/FilterContextProvider";
import { products } from "../../../../data/products";
import { BikesList } from "../BikesList/BikesList";


export const ProductsList = () => {
  const { filters } = useFilterContext();

  const filtredProducts = products.filter((product) => {
    const hasSearch =
      filters.search === '' || product.name.toLowerCase().includes(filters.search.toLowerCase());
    const hasCategory = filters.category === 'wszystkie' || product.category === filters.category;

    return hasSearch && hasCategory;
  });

  return (
    <div className='flex flex-wrap gap-12 justify-center p-8'>
      {filtredProducts.length > 0 ? (
        <BikesList filtredProducts={filtredProducts} />
      ) : (
        <h1 className='font-bold text-4xl'>Nie znaleziono żadnego produktu...</h1>
      )}
    </div>
  );
};
