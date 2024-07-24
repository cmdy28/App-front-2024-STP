'use client'
import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import NewButton from '../../components/shared/button';
import ClienteForm from '@/app/(DashboardLayout)/clientes/components/clienteForm';
import { useRouter } from 'next/navigation';

const NuevoClientePage = () => {
  const router = useRouter();

  const handleSuccess = () => {
    router.push('/clientes');
  };

  return (
    <PageContainer title="Crear Cliente" description="Index clientes">
        <div role="presentation" >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            INICIO
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/clientes"
          >
            CLIENTES
          </Link>
          <Typography color="text.primary">NUEVO</Typography>
        </Breadcrumbs>
      </div>
      <br />
      <DashboardCard title="Crear Cliente" action={<NewButton href="/clientes" text="Regresar" />}>
        <ClienteForm onSuccess={handleSuccess} />
      </DashboardCard>
    </PageContainer>
  );
};

export default NuevoClientePage;