import { useFilterContext } from '../../../contexts/FilterContextProvider';

export const SearchInput = () => {
  const { filters, setFilters } = useFilterContext();

  return (
    <input
      className='h-full w-96 rounded-tl rounded-bl pl-4 text-black max-sm:w-full max-sm:h-full'
      placeholder='Wyszukaj w sklepie...'
      autoComplete='off'
      value={filters.search}
      onChange={(event) => setFilters({ ...filters, search: event.target.value })}
    />
  );
};
