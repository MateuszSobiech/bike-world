import {
  CreateOrderActions,
  CreateOrderData,
  OnApproveActions,
  OnApproveData,
} from '@paypal/paypal-js';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { doc, updateDoc } from 'firebase/firestore';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthProvider';
import { db } from '../../../firebase/firebase';
import { useCart } from '../../../hooks/useCart';
// import debounce from 'lodash.debounce';

export const Shipping = () => {
  const user = useAuthContext();
  const navigate = useNavigate();
  const { sumPrice } = useCart();
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
    email: '',
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
        email: user.email || '',
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
      //   // TODO optymalizacja
      //   updateDebounce();
      // }
    }
  }, [state]);

  const onCreateOrder = (data: CreateOrderData, actions: CreateOrderActions) => {
    return actions.order.create({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            value: sumPrice.toFixed(2),
            currency_code: 'PLN',
          },
          payee: {
            email_address: state.email,
          },
          shipping: {
            name: {
              full_name: `${state.name} ${state.surname}`,
            },
            address: {
              address_line_1: state.street,
              admin_area_2: state.city,
              postal_code: state.postcode,
              country_code: 'PL',
            },
          },
        },
      ],
    });
  };

  const onApproveOrder = (data: OnApproveData, actions: OnApproveActions) => {
    return actions.order!.capture().then((details) => {
      console.log('DETAILS', details);

      const {
        id,
        purchase_units: [
          {
            amount,
            shipping: { address },
          },
        ],
      } = details;

      navigate(
        `/koszyk/potwierdzenie?id=${id}&amountValue=${amount.value}&amountCode=${amount.currency_code}&street=${address.address_line_1}&city=${address.admin_area_2}`
      );
    });
  };

  return (
    <div className='flex justify-center p-4 '>
      <div className='w-max max-sm:w-full'>
        <h2 className='mb-8 text-center text-3xl'>Dane do wysyłki</h2>

        <div className='flex flex-col gap-8 max-sm:items-center'>
          <div>
            <label>
              <span className='text-xl'>Imię i nazwisko: </span>
              <br />
              <input
                value={state.name}
                name='name'
                onChange={onChangeFormState}
                type='text'
                className='mr-4 h-8 border max-sm:mr-0'
                placeholder='Adam'
              />
              <br className='max-sm:block hidden' />
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
              <span className='text-xl'>Email: </span>
              <br />
              <input
                value={state.email}
                name='email'
                onChange={onChangeFormState}
                type='text'
                className='h-8 border'
                placeholder='example@gmail.com'
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
              <br className='max-sm:block hidden' />

              <input
                value={state.street}
                name='street'
                onChange={onChangeFormState}
                type='text'
                className='ml-4 mt-4 h-8 border max-sm:ml-0'
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

          <div className='mt-16 max-sm:mt-4'>
            <PayPalButtons
              fundingSource='paypal'
              style={{ layout: 'vertical' }}
              forceReRender={[state, sumPrice]}
              createOrder={(data, actions) => onCreateOrder(data, actions)}
              onApprove={(data, actions) => onApproveOrder(data, actions)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
