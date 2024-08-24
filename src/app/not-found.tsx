// src/app/not-found.tsx

import { Box, Typography } from "@mui/material";
import Link from 'next/link';

export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" component="h1">
        404
      </Typography>
      <Typography variant="h6" component="p">
        La página que estás buscando no existe.
      </Typography>
      <Link href="/" passHref>
        <Typography variant="body1" color="primary" sx={{ marginTop: '20px' }}>
          Volver al inicio
        </Typography>
      </Link>
    </Box>
  );
}
