import {
  createContext,
  PropsWithChildren,
  useContext,
  useDebugValue,
  useEffect,
  useState,
} from 'react';
import { UserDetails } from '../firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

const AuthContext = createContext<UserDetails | null | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserDetails | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, async () => {
      if (auth.currentUser === null) {
        setUser(null);
        return;
      }

      const docRef = doc(db, 'users', auth.currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUser(docSnap.data() as UserDetails);
        // TODO sprawdzenie typowania
      } else {
        throw new Error('User already should have details, created during register');
      }
    });
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('Can not use context out of Provider');
  }

  return context;
};
