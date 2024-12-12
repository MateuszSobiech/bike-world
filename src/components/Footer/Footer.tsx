const footerItems = ['Wołoska 12, Warszawa', '|', '222-333-444', '|', <span> {new Date().getFullYear()} &#174;</span>];

export const Footer = () => {
  return (
    <footer className='flex justify-center gap-x-4 items-center bg-black px-8 py-4 text-lg text-white flex-wrap'>
      {footerItems.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </footer>
  );
};