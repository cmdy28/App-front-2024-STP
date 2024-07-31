'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import NextLink from 'next/link';
import DashboardCard from '@/app/(DashboardLayout)//components/shared/DashboardCard';

export default function UnderlineLink() {
  return (
    <DashboardCard title="Clientes">
         <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                typography: 'body1',
                '& > :not(style) ~ :not(style)': {
                ml: 2,
                },
            }}
            >
      <NextLink href="#" passHref legacyBehavior>
        <MuiLink underline="none">
          {'underline="none"'}
        </MuiLink>
      </NextLink>
      <NextLink href="/clientes/nuevo" passHref legacyBehavior>
        <MuiLink underline="hover">
            Nuevo
          {'Nuevo Cliente'}
        </MuiLink>
      </NextLink>
      <NextLink href="#" passHref legacyBehavior>
        <MuiLink underline="always">
          {'underline="always"'}
        </MuiLink>
      </NextLink>
    </Box>
    </DashboardCard>
  );
}