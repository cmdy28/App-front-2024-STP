// import React from "react";
// import {
//   Box,
//   Typography,
//   FormGroup,
//   FormControlLabel,
//   Button,
//   Stack,
//   Checkbox,
// } from "@mui/material";
// import Link from "next/link";

// import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";

// interface loginType {
//   title?: string;
//   subtitle?: JSX.Element | JSX.Element[];
//   subtext?: JSX.Element | JSX.Element[];
// }

// const AuthLogin = ({ title, subtitle, subtext }: loginType) => (
//   <>
//     {title ? (
//       <Typography fontWeight="700" variant="h2" mb={1}>
//         {title}
//       </Typography>
//     ) : null}

//     {subtext}

//     <Stack>
//       <Box>
//         <Typography
//           variant="subtitle1"
//           fontWeight={600}
//           component="label"
//           htmlFor="username"
//           mb="5px"
//         >
//           Usuario
//         </Typography>
//         <CustomTextField variant="outlined" fullWidth />
//       </Box>
//       <Box mt="25px">
//         <Typography
//           variant="subtitle1"
//           fontWeight={600}
//           component="label"
//           htmlFor="password"
//           mb="5px"
//         >
//           Contraseña
//         </Typography>
//         <CustomTextField type="password" variant="outlined" fullWidth />
//       </Box>
//       <Stack
//         justifyContent="space-between"
//         direction="row"
//         alignItems="center"
//         my={2}
//       >
//       </Stack>
//     </Stack>
//     <Box>
//       <Button
//         color="primary"
//         variant="contained"
//         size="large"
//         fullWidth
//         component={Link}
//         href="/"
//         type="submit"
//       >
//         Iniciar Sesión
//       </Button>
//     </Box>
//     {subtitle}
//   </>
// );

// export default AuthLogin;
'use client';

import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { useRouter } from 'next/navigation';
import { useAuth } from '../auth/AuthContext';
import { post } from '@/app/utils/api';
import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import { Msg, DataUser } from "@/app/utils/interface";

interface ApiResponse {
  msg : Msg;
  data : DataUser;
}

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await post<ApiResponse>('/login', {
        nombre_usuario: username, contrasena: password
      });

      if (response.data) {
        const authData = {
          user: response.data.data.usuario,
          rol: response.data.data.rol
        };
        localStorage.setItem('auth', JSON.stringify(authData));
        console.log('Auth data saved directly:', JSON.stringify(authData));

        login({
          user: response.data.data,
          rol: response.data.data.rol
        });
        router.push('/');
      } else {
        console.error('Error en el inicio de sesión');
      }
    } catch (error) {
      console.error('Error de login:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <Stack>
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="username"
            mb="5px"
          >
            Usuario
          </Typography>
          <CustomTextField 
            variant="outlined" 
            fullWidth 
            value={username}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUsername(e.target.value)}
          />
        </Box>
        <Box mt="25px">
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="password"
            mb="5px"
          >
            Contraseña
          </Typography>
          <CustomTextField 
            type="password" 
            variant="outlined" 
            fullWidth 
            value={password}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
          />
        </Box>
      </Stack>
      <Box mt={2}>
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          type="submit"
        >
          Iniciar Sesión
        </Button>
      </Box>
      {subtitle}
    </form>
  );
};

export default AuthLogin;