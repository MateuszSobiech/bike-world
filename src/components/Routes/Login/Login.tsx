import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [state, setState] = useState({ login: '', password: '' });

  const onChangeFormState = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className='flex justify-center p-4'>
      <div className='w-max'>
        <h2 className='mb-8 text-center text-3xl'>Logowanie</h2>

        <div className='flex flex-col gap-8'>
          <div>
            <label>
              <span className='text-xl'>Login: </span>
              <br />
              <input
                value={state.login}
                name='login'
                onChange={onChangeFormState}
                type='text'
                className='h-8 border'
              />
            </label>
          </div>

          <div>
            <label>
              <span className='text-xl'>Hasło: </span>
              <br />
              <input
                value={state.password}
                name='password'
                onChange={onChangeFormState}
                type='text'
                className='h-8 border'
              />
            </label>
          </div>

          <button className='bg-gray-400'>Zaloguj</button>
          <Link to='/rejestracja' className='bg-gray-400'>
            Załóż konto
          </Link>
        </div>
      </div>
    </div>
  );
};
