import { doc, updateDoc } from 'firebase/firestore';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAuthContext } from '../../../contexts/AuthProvider';
import { db } from '../../../firebase/firebase';
// import debounce from 'lodash.debounce';

export const Shipping = () => {
  const user = useAuthContext();
  // const updateDebounceRef = useRef<() => void | null>(null);
  const [state, setState] = useState({
    // name: 'Krzysztof',
    // surname: 'Plusa',
    // phoneNumber: '123456789',
    // city: 'Warszawa',
    // street: 'Diamentowa 10',
    // postcode: '02-210',
    name: '',
    surname: '',
    phoneNumber: '',
    city: '',
    street: '',
    postcode: '',
  });

  const onChangeFormState = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (user) {
      setState({
        name: user.name || '',
        surname: user.surname || '',
        phoneNumber: user.phoneNumber || '',
        city: user.city || '',
        street: user.street || '',
        postcode: user.postcode || '',
      });
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      // if (updateDebounceRef.current !== null) {
      //   updateDebounceRef.current();
      // }

      const docRef = doc(db, 'users', user.uid);

      // const updateDebounce = debounce(() => {
      updateDoc(docRef, state);
      // }, 1000);

      // if (updateDebounceRef.current) {
      //   updateDebounceRef.current();
      // } else {
      //   updateDebounceRef.current = updateDebounce;
      //   // TODO
      //   updateDebounce();
      // }
    }
  }, [state]);

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
                className='mr-4 h-8 border'
                placeholder='Adam'
              />
              <input
                value={state.surname}
                name='surname'
                onChange={onChangeFormState}
                type='text'
                className='h-8 border'
                placeholder='Kowalski'
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
