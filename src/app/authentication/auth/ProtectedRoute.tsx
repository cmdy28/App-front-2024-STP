
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: number[]; // Roles permitidos para acceder a la ruta
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { user, rol } = useAuth();
  const router = useRouter();
  // const [isLoading, setIsLoading] = useState(true);
  console.log(user);
  console.log(router);

  useEffect(() => {
    if (!user) {
      const storedAuth = localStorage.getItem('auth');
      if (!storedAuth) {
        router.push('/authentication/login');
      } else {
        // setIsLoading(false);
      }
    } else if (allowedRoles && !allowedRoles.includes(rol as number)) {
      // Si hay roles especificados y el rol del usuario no está incluido, redirigir a una página de acceso denegado
      router.push('/access-denied'); // Asegúrate de crear esta página
    }
  }, [user, rol, router, allowedRoles]);

  // Si no hay usuario o el rol no está permitido, no renderizar nada
  if (!user || (allowedRoles && !allowedRoles.includes(rol as number))) {
    router.push('/authentication/login');
    return null;
  }

  // Si todo está bien, renderizar los children
  return <>{children}</>;
};

export default ProtectedRoute;