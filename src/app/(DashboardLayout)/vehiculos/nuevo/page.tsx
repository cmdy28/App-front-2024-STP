'use client'
import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import NewButton from '../../components/shared/button';
import VehiculoForm from '@/app/(DashboardLayout)/vehiculos/components/vehiculoForm';
import { useRouter } from 'next/navigation';

const NuevoVehiculoPage = () => {
  const router = useRouter();

  const handleSuccess = () => {
    router.push('/vehiculos');
  };

  return (
    <PageContainer title="Crear vehiculo" description="Index vehiculos">
        <div role="presentation" >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            INICIO
          </Link>
          <Typography color="text.primary">ADMINISTRATIVO</Typography>
          <Link
            underline="hover"
            color="inherit"
            href="/vehiculos"
          >
            VEHICULOS
          </Link>
          <Typography color="text.primary">NUEVO</Typography>
        </Breadcrumbs>
      </div>
      <br />
      <DashboardCard title="Crear vehiculo" action={<NewButton href="/vehiculos" text="Regresar" />}>
        <VehiculoForm onSuccess={handleSuccess} />
      </DashboardCard>
    </PageContainer>
  );
};

export default NuevoVehiculoPage;