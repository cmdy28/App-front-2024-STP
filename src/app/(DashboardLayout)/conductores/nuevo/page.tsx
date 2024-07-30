'use client'
import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import NewButton from '../../components/shared/button';
import ConductorForm from '@/app/(DashboardLayout)/conductores/components/conductorForm';
import { useRouter } from 'next/navigation';

const NuevoConductorPage = () => {
  const router = useRouter();

  const handleSuccess = () => {
    router.push('/conductores');
  };

  return (
    <PageContainer title="Crear Conductor" description="Index conductores">
        <div role="presentation" >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            INICIO
          </Link>
          <Typography color="text.primary">ADMINISTRATIVO</Typography>
          <Link
            underline="hover"
            color="inherit"
            href="/conductores"
          >
            CONDUCTORES
          </Link>
          <Typography color="text.primary">NUEVO</Typography>
        </Breadcrumbs>
      </div>
      <br />
      <DashboardCard title="Crear Conductor" action={<NewButton href="/conductores" text="Regresar" />}>
        <ConductorForm onSuccess={handleSuccess} />
      </DashboardCard>
    </PageContainer>
  );
};

export default NuevoConductorPage;