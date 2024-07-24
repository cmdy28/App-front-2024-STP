'use client'
import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import NewButton from '../../components/shared/button';
import ClienteForm from '@/app/(DashboardLayout)/clientes/components/clienteForm';
import { useRouter, useSearchParams } from 'next/navigation';

const EditarClientePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const handleSuccess = () => {
    router.push('/clientes');
  };

  if (!id) {
    return <div>ID de cliente no proporcionado</div>;
  }

  return (
    <PageContainer title="Editar Cliente" description="Index clientes">
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
          <Typography color="text.primary">EDITAR</Typography>
        </Breadcrumbs>
      </div>
      <br />
      <DashboardCard title="Editar Cliente" action={<NewButton href="/clientes" text="Regresar" />}>
        <ClienteForm id={id} onSuccess={handleSuccess} />
      </DashboardCard>
    </PageContainer>
  );
};

export default EditarClientePage;