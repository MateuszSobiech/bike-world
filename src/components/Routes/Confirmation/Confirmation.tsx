import { useSearchParams } from 'react-router-dom';

export const Confirmation = () => {
  const [params] = useSearchParams();

  return (
    <div className='flex justify-center p-4'>
      <div className='mt-36 w-max max-sm:mt-20 max-sm:w-full'>
        <div className='text-3xl max-sm:text-2xl'>
          <p className='mb-4 text-center'>Id zamówienia: {params.get('id')}</p>
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
