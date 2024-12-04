import { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginWithEmail, loginWithGoogle } from '../../../firebase/auth';

export const Login = () => {
  const [state, setState] = useState({ email: 'test@gmail.com', password: 'test100' });
  const navigate = useNavigate();

  const onChangeFormState = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const onClickLoginWithEmail = async () => {
    await loginWithEmail(state.email, state.password);
    navigate('/');
  };

  const onClickLoginWithGoogle = async () => {
    await loginWithGoogle()
    navigate('/')
  };

  return (
    <div className='flex justify-center p-4'>
      <div className='w-max'>
        <h2 className='mb-8 text-center text-3xl'>Logowanie</h2>

        <div className='flex flex-col gap-8'>
          <div>
            <label>
              <span className='text-xl'>Email: </span>
              <br />
              <input
                value={state.email}
                name='email'
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
                type='password'
                className='h-8 border'
              />
            </label>
          </div>

          <button className='rounded-lg border p-2' onClick={onClickLoginWithEmail}>
            Zaloguj
          </button>
          <button className='rounded-lg border p-2 flex justify-center gap-4' onClick={onClickLoginWithGoogle}>
            <img src="/images/google-icon.svg" alt="google icon" className='size-6' />
            Zaloguj
          </button>
          <Link to='/rejestracja' className='rounded-lg border p-2 text-center'>
            Załóż konto
          </Link>
        </div>
      </div>
    </div>
  );
};
