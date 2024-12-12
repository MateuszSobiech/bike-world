import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterWithEmail, registerWithEmail } from '../../../firebase/auth';

export const Register = () => {
  const [state, setState] = useState<RegisterWithEmail>({
    name: '',
    surname: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const navigation = useNavigate();

  const onChangeFormState = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const onClickToogleShowPassword = () => setShowPassword(!showPassword);

  const onClickCreateAccount = async () => {
    if (!isTermsAccepted || Object.values(state).some((value) => !value) || state.password.length < 6) return;

    await registerWithEmail(state)
    
    navigation('/');
  };

  return (
    <div className='flex justify-center p-4'>
      <div className='w-1/3 max-sm:w-full max-sm:p-4'>
        <h2 className='mb-8 text-center text-3xl'>Rejestracja</h2>

        <div className='flex flex-col gap-8'>
          <div>
            <label>
              <span className='text-xl'>Imię: </span>
              <br />
              <input
                value={state.name}
                name='name'
                onChange={onChangeFormState}
                type='text'
                className='h-8 w-full border'
              />
            </label>
          </div>

          <div>
            <label>
              <span className='text-xl'>Nazwisko: </span>
              <br />
              <input
                value={state.surname}
                name='surname'
                onChange={onChangeFormState}
                type='text'
                className='h-8 w-full border'
              />
            </label>
          </div>

          <div>
            <label>
              <span className='text-xl'>E-mail: </span>
              <br />
              <input
                value={state.email}
                name='email'
                onChange={onChangeFormState}
                type='email'
                className='h-8 w-full border'
              />
            </label>
          </div>

          <div>
            <label>
              <span className='text-xl'>Hasło: (minimum 6 znaków)</span>
              <br />
              <div className='flex gap-4'>
                <input
                  value={state.password}
                  name='password'
                  onChange={onChangeFormState}
                  type={`${showPassword ? 'text' : 'password'}`}
                  className='h-8 w-full border'
                />
                <button className='w-8' onClick={onClickToogleShowPassword}>
                  {showPassword ? (
                    <i className='fa-regular fa-eye'></i>
                  ) : (
                    <i className='fa-regular fa-eye-slash'></i>
                  )}
                </button>
              </div>
            </label>
          </div>

          <div>
            <h2 className='text-xl font-bold'>Zgody formalne</h2>

            <label className='mt-4 flex items-center gap-4'>
              <input
                checked={isTermsAccepted}
                onChange={(event) => setIsTermsAccepted(event.target.checked)}
                type='checkbox'
                className='h-6 w-6'
              />
              <span className='text-xl max-sm:text-lg'>
                Akceptuję regulamin sklepu <span className='text-red-600'>(wymagane)</span>{' '}
              </span>
            </label>
          </div>

          <button
            onClick={onClickCreateAccount}
            className='rounded-lg border bg-blue-500 p-4 text-center text-2xl max-sm:text-xl max-sm:p-2'
          >
            Załóż konto
          </button>
        </div>
      </div>
    </div>
  );
};
