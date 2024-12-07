import { useSearchParams } from 'react-router-dom';

export const Confirmation = () => {
  const [params] = useSearchParams();

  return (
    <div className='flex justify-center p-4'>
      <div className='mt-36 w-max'>
        <p className='mb-4 text-center text-3xl'>Id zamówienia: {params.get('id')}</p>
        <p className='mb-4 text-center text-3xl'>
          Zapłacono: {params.get('amountValue')} {params.get('amountCode')}
        </p>
        <p className='mb-4 text-center text-3xl'>
          Adres dostawy: {params.get('street')}, {params.get('city')}
        </p>

        <div className='mt-16 text-center'>
          <i className='fa-regular fa-circle-check text-[100px] text-[#008000]'></i>
        </div>
      </div>
    </div>
  );
};
