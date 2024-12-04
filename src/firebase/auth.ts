import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
  UserCredential,
} from 'firebase/auth';
import { auth, db, googleProvider } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export interface Order {
  amount: number;
  productId: number;
}

export interface UserDetails {
  uid: User['uid'];
  name: string;
  surname: string;
  phoneNumber: string;
  city: string;
  street: string;
  postcode: string;
  order: Order[];
}

export interface RegisterWithEmail {
  email: string;
  password: string;
  name: string;
  surname: string;
}

const addUserToFirebase = async (
  userCredential: UserCredential,
  options: Partial<UserDetails> = {}
) => {
  const docRef = doc(db, 'users', userCredential.user.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) return;

  const user: UserDetails = {
    uid: userCredential.user.uid,
    name: options.name || '',
    surname: options.surname || '',
    phoneNumber: '',
    city: '',
    street: '',
    postcode: '',
    order: [],
  };

  setDoc(docRef, user);
};

export const registerWithEmail = async ({ email, password, name, surname }: RegisterWithEmail) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);

  addUserToFirebase(userCredential, { name, surname });
};

export const loginWithGoogle = async () => {
  const userCredential = await signInWithPopup(auth, googleProvider);

  addUserToFirebase(userCredential);
};

export const loginWithEmail = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);

  addUserToFirebase(userCredential);
};

export const logout = async () => {
  await signOut(auth);
};
