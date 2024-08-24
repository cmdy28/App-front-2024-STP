'use client';

import { createContext, useContext } from 'react';
import { DataUser } from '@/app/utils/interface';

type AuthContextType = {
  user: DataUser | null;
  rol: number | null;
  login: (data: { user: DataUser; rol: number }) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  rol: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);