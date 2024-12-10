import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { db } from '../../../firebase/firebase';
import { useAuthContext } from '../../../contexts/AuthProvider';

export const Confirmation = () => {
  const user = useAuthContext();
  const [params] = useSearchParams();

  const orderPayPalId = params.get('id');

  useEffect(() => {
    (async () => {
      if (user) {
        // add order to DB
        const docRef = doc(db, 'orders', String(orderPayPalId));
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()) return;
        
        setDoc(docRef, {
          orderPayPalId,
          order: user.order,
          userId: user.uid,
          email: user.email,
        });
      }
    })();
  }, [user]);

  return (
    <div className='flex justify-center p-4'>
      <div className='mt-36 w-max max-sm:mt-20 max-sm:w-full'>
        <div className='text-3xl max-sm:text-2xl'>
          <p className='mb-4 text-center'>Id zamówienia: {orderPayPalId}</p>
          <p className='mb-4 text-center'>
            Zapłacono: {params.get('amountValue')} {params.get('amountCode')}
          </p>
          <p className='mb-4 text-center'>
            Adres dostawy: {params.get('street')}, {params.get('city')}
          </p>
        </div>

        <div className='mt-16 text-center'>
          <i className='fa-regular fa-circle-check text-[100px] text-[#008000] max-sm:text-7xl'></i>
        </div>
      </div>
    </div>
  );
};
