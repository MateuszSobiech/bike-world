import { Link } from 'react-router-dom';
import { SearchInput } from './SearchInput/SearchInput';
import { CartIcon } from './CartIcon/CartIcon';
import { LoginIcon } from './LoginIcon/LoginIcon';

export const Header = () => {
  return (
    <header className='bg-black sticky top-0 z-30 flex justify-between text-white py-4 px-8'>
      <div className='flex gap-32'>
        <Link to='/'>
          <h1 className='text-3xl flex items-end gap-2 font-bold'>
            <span className='text-blue-600 '>Bike</span>
            <span>World</span>
            <i className='fa fa-bicycle text-5xl'></i>
          </h1>
        </Link>
        <div className='flex items-center'>
          <SearchInput />
          <div className='text-2xl h-full bg-blue-600 px-1 rounded-tr rounded-br flex items-center'>
            <i className='fa-solid fa-magnifying-glass '></i>
          </div>
        </div>
      </div>
      <div className='relative text-xl flex items-center gap-2 pr-6'>
        <Link to='zaloguj'>
          <LoginIcon />
        </Link>
        <Link to='/koszyk' className='flex items-center gap-2'>
          <CartIcon />
        </Link>
      </div>
    </header>
  );
};
