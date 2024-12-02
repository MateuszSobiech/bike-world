export const Confirmation = () => {
  const id = '1410';
  const price = '11000';
  const address = 'Diamentowa 10, Warszawa';

  return (
    <div className='flex justify-center p-4'>
      <div className='mt-36 w-max'>
        <p className='mb-4 text-center text-3xl'>ID: {id}</p>
        <p className='mb-4 text-center text-3xl'>Zapłacono: {price}</p>
        <p className='mb-4 text-center text-3xl'>Adres dostawy: {address}</p>
      </div>
    </div>
  );
};
