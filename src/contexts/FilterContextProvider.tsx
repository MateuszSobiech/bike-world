import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { Category } from '../data/products';

interface Props {
  children: ReactNode;
}

interface Filters {
  search: string;
  category: Category;
}

interface FilterContextValues {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
}

 const FilterContext = createContext<FilterContextValues | null>(null);

export const FilterContextProvider = ({ children }: Props) => {
  const [filters, setFilters] = useState<Filters>({
    search: '',
    category: 'wszystkie',
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>{children}</FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext)
  
  if(context === null) {
    throw new Error('Can not use context out of Provider')
  }

  return context;
}