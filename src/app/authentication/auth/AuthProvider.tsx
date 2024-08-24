'use client';

import React, { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { DataUser } from '@/app/utils/interface';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<DataUser | null>(null);
  const [rol, setRol] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const storedAuth = localStorage.getItem('auth');
  //   console.log('Stored auth:', storedAuth);
  //   if (storedAuth) {
  //     const { user, rol } = JSON.parse(storedAuth);
  //     console.log('Parsed user:', user);
  //     console.log('Parsed rol:', rol);
  //     setUser(user);
  //     setRol(rol);
  //   }
  // }, []);

  useEffect(() => {
    const loadUserFromStorage = () => {
      const storedAuth = localStorage.getItem('auth');
      if (storedAuth) {
        const { user, rol } = JSON.parse(storedAuth);
        setUser(user);
        setRol(rol);
      }
      setLoading(false);
    };

    loadUserFromStorage();
  }, []);


  const login = (data: { user: DataUser; rol: number }) => {
    console.log('Login called with data:', data); // Añade este log
    setUser(data.user);
    setRol(data.rol);
  };

  const logout = () => {
    setUser(null);
    setRol(null);
    localStorage.removeItem('auth');
  };

  if (loading) {
    return <div>Loading...</div>; // O cualquier componente de carga que prefieras
  }

  return (
    <AuthContext.Provider value={{ user, rol, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};