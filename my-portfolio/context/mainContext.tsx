import { createContext, useContext, ReactNode, useState , Dispatch, SetStateAction} from "react";
import * as React from 'react';

type authContextType = {
  activeItem: string;
  setActiveItem: Dispatch<SetStateAction<string>>;
};

const authContextDefaultValues: authContextType = {
  activeItem: '',
  setActiveItem: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [activeItem, setActiveItem] = useState<string>('');
  const value = {
    activeItem,
    setActiveItem,
};

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
