import { useFilterContext } from "../../../../contexts/FilterContextProvider";
import { Category, getCategories } from "../../../../data/products";


const categories = getCategories();

export const Sidebar = () => {
  const { filters, setFilters } = useFilterContext();

  const onClickSetFilterCategory = (category: Category) => {
    setFilters({ ...filters, category });
  };

  return (
    <aside className='pb-28 border-gray-400 border-l border'>
      {/* TODO border + max height */}
      <h2 className='bg-blue-600 text-3xl font-bold text-center p-2 mb-4'>Kategorie</h2>
      <ul className='flex flex-col gap-6 text-center text-[20px]'>
        {categories.map((category) => {
          const buttonClasses =
            filters.category === category
              ? 'bg-black text-blue-600'
              : 'hover:bg-black hover:text-blue-600';

          return (
            <li key={category}>
              <button
                className={`${buttonClasses} py-1 px-8 rounded-lg`}
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
