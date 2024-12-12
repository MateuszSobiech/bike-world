import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthProvider';
import { logout } from '../../firebase/auth';
import { CartIcon } from './CartIcon/CartIcon';
import { LoginIcon } from './LoginIcon/LoginIcon';
import { SearchInput } from './SearchInput/SearchInput';

export const Header = () => {
  const user = useAuthContext();
  const navigate = useNavigate();

  const onClickLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <header className='sticky top-[-1px] z-30 flex justify-between bg-black px-8 py-4 text-white max-sm:w-full max-sm:flex-col'>
      <div className='flex gap-32 max-sm: max-sm:gap-6 max-sm:items-center max-sm:justify-between'>
        <Link to='/'>
          <h1 className='flex items-end gap-2 text-3xl font-bold max-sm:flex-col max-sm:items-start'>
            <span className='text-blue-600'>Bike</span>
            <span>World</span>
            <i className='fa fa-bicycle text-5xl'></i>
          </h1>
        </Link>
        <div className='flex items-center max-sm:h-10'>
          <SearchInput />
          <div className='flex h-full items-center rounded-br rounded-tr bg-blue-600 px-1 text-2xl'>
            <i className='fa-solid fa-magnifying-glass'></i>
          </div>
        </div>
      </div>
      <div className='relative flex items-center gap-2 pr-6 text-xl max-sm:justify-end max-sm:p-0'>
        {user ? (
          <button onClick={onClickLogout} className='pr-6'>
            Wyloguj
          </button>
        ) : (
          <Link to='zaloguj'>
            <LoginIcon />
          </Link>
        )}
        <Link to='/koszyk' className='flex items-center gap-2'>
          <CartIcon />
        </Link>
      </div>
    </header>
  );
};
