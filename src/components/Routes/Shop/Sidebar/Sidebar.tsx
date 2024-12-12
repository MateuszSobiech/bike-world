import { useFilterContext } from '../../../../contexts/FilterContextProvider';
import { useProductsContext } from '../../../../contexts/ProductsProvider';

export const Sidebar = () => {
  const { categories } = useProductsContext();
  const { filters, setFilters } = useFilterContext();

  const onClickSetFilterCategory = (category: string) => {
    setFilters({ ...filters, category });
  };

  return (
    <aside className='border-r border-gray-400 pb-28 max-sm:border-b max-sm:border-r-0 max-sm:pb-4'>
      <h2 className='mb-4 bg-blue-600 p-2 text-center text-3xl font-bold'>Kategorie</h2>
      <ul className='flex flex-col gap-6 text-center text-[20px] max-sm:flex-row max-sm:flex-wrap max-sm:justify-center'>
        {categories.map((category) => {
          const buttonClasses =
            filters.category === category
              ? 'bg-black text-blue-600'
              : 'hover:bg-black hover:text-blue-600';

          return (
            <li key={category}>
              <button
                className={`${buttonClasses} rounded-lg px-8 py-1`}
                onClick={() => onClickSetFilterCategory(category)}
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
