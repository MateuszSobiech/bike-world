import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.tsx';
import { products } from './data/products.ts';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase/firebase.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);


// products.forEach(product => {
//   addDoc(collection(db, 'products'), product)
//   console.log('added', product.id)
// })