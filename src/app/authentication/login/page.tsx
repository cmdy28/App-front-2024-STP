// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useAuth } from '../auth/AuthContext';
// import { DataUser, Msg } from '@/app/utils/interface';
// import { post } from '@/app/utils/api';

// interface ApiResponse {
//   msg : Msg;
//   data : DataUser;
// }
// export default function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();
//   const { login } = useAuth();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await post<ApiResponse>('/login', {
//         nombre_usuario: username, contrasena:password
//       });

//       // si data es null es porque usuario o contraseña incorrectos AGREGAR VALIDACION!!
//       if (response.data) {
//         const authData = {
//           user: response.data.data.usuario,
//           rol: response.data.data.rol
//         };
//         localStorage.setItem('auth', JSON.stringify(authData));
//         console.log('Auth data saved directly:', JSON.stringify(authData));
//          login({
//           user: response.data.data,
//           rol: response.data.data.rol
//         });
//         // router.push('/dashboard');
//         router.push('/');
//       } else {
//         // Manejar error de login
//         console.error('Error en el inicio de sesión');
//       }
//     } catch (error) {
//       console.error('Error de login:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Username"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// }
"use client";

import { Grid, Box, Card, Stack, Typography } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import AuthLogin from "../auth/AuthLogin";

const Login2 = () => {
  return (
    <PageContainer title="Login" description="this is Login page">
      <Box
        sx={{
          position: "relative",
          "&:before": {
            content: '""',
            background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
            position: "absolute",
            height: "100%",
            width: "100%",
            opacity: "0.3",
          },
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{ height: "100vh" }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            xl={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              elevation={9}
              sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <Logo />
              </Box>
              <AuthLogin
                subtext={
                  <Typography
                    variant="subtitle1"
                    textAlign="center"
                    color="textSecondary"
                    mb={1}
                  >
                    Gestiona tus procesos de Transporte Pesado
                  </Typography>
                }
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Login2;