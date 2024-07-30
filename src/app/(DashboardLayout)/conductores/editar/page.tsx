'use client'
import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import NewButton from '../../components/shared/button';
import ConductorForm from '@/app/(DashboardLayout)/conductores/components/conductorForm';
import { useRouter, useSearchParams } from 'next/navigation';

const EditarConductorPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const handleSuccess = () => {
    router.push('/conductores');
  };

  if (!id) {
    return <div>ID de cliente no proporcionado</div>;
  }

  return (
    <PageContainer title="Editar Conductor" description="Index conductores">
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
          <Typography color="text.primary">EDITAR</Typography>
        </Breadcrumbs>
      </div>
      <br />
      <DashboardCard title="Editar Conductor" action={<NewButton href="/conductores" text="Regresar" />}>
        <ConductorForm id={id} onSuccess={handleSuccess} />
      </DashboardCard>
    </PageContainer>
  );
};

export default EditarConductorPage;