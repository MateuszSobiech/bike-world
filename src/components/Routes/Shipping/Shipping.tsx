import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';

// const navigation = useNavigate()

// useEffect(() => {
//   navigation('/')
// }, [])

export const Shipping = () => {
  const [state, setState] = useState({
    name: 'Krzysztof Plusa',
    phoneNumber: '123456789',
    city: 'Warszawa',
    street: 'Diamentowa 10',
    postcode: '02-210',
  });

  const onChangeFormState = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className='flex justify-center p-4'>
      <div className='w-max'>
        <h2 className='mb-8 text-center text-3xl'>Dane do wysyłki</h2>

        <div className='flex flex-col gap-8'>
          <div>
            <label>
              <span className='text-xl'>Imię i nazwisko: </span>
              <br />
              <input
                value={state.name}
                name='name'
                onChange={onChangeFormState}
                type='text'
                className='h-8 border'
                placeholder='Adam Kowalski'
              />
            </label>
          </div>

          <div>
            <label>
              <span className='text-xl'>Numer telefonu: </span>
              <br />
              <input
                value={state.phoneNumber}
                name='phoneNumber'
                onChange={onChangeFormState}
                type='text'
                className='h-8 border'
                placeholder='111222333'
              />
            </label>
          </div>

          <div>
            <label>
              <span className='text-xl'>Adres: </span>
              <br />

              <input
                value={state.city}
                name='city'
                onChange={onChangeFormState}
                type='text'
                className='h-8 border'
                placeholder='Miasto'
              />
              <input
                value={state.street}
                name='street'
                onChange={onChangeFormState}
                type='text'
                className='ml-4 h-8 border'
                placeholder='Ulica'
              />
              <br />
              <input
                value={state.postcode}
                name='postcode'
                onChange={onChangeFormState}
                type='text'
                className='mt-4 h-8 border'
                placeholder='Kod pocztowy'
              />
            </label>
          </div>

          <button className='rounded-lg border bg-blue-500 p-4 text-center text-3xl'>
            Płatność
          </button>
        </div>
      </div>
    </div>
  );
};
