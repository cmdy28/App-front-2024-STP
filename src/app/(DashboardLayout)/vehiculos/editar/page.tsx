'use client'
import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import NewButton from '../../components/shared/button';
import VehiculoForm from '@/app/(DashboardLayout)/vehiculos/components/vehiculoForm';
import { useRouter, useSearchParams } from 'next/navigation';

const EditarVehiculoPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const handleSuccess = () => {
    router.push('/vehiculos');
  };

  if (!id) {
    return <div>ID de vehiculo no proporcionado</div>;
  }

  return (
    <PageContainer title="Editar vehiculo" description="Index vehiculos">
      <div role="presentation" >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            INICIO
          </Link>
          <Typography color="text.primary">PEDIDOS</Typography>
          <Link
            underline="hover"
            color="inherit"
            href="/vehiculos"
          >
            VEHICULOS
          </Link>
          <Typography color="text.primary">EDITAR</Typography>
        </Breadcrumbs>
      </div>
      <br />
      <DashboardCard title="Editar vehiculo" action={<NewButton href="/vehiculos" text="Regresar" />}>
        <VehiculoForm id={id} onSuccess={handleSuccess} />
      </DashboardCard>
    </PageContainer>
  );
};

export default EditarVehiculoPage;