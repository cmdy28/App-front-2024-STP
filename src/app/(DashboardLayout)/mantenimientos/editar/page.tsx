'use client'
import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import NewButton from '../../components/shared/button';
import MantenimientoForm from '@/app/(DashboardLayout)/mantenimientos/components/MantenimientoForm';
import { useRouter, useSearchParams } from 'next/navigation';

const EditarMantenimientoPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const handleSuccess = () => {
    router.push('/mantenimientos');
  };

  if (!id) {
    return <div>ID de mantenimiento no proporcionado</div>;
  }

  return (
    <PageContainer title="Editar Mantenimiento" description="Index mantenimientos">
      <div role="presentation" >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            INICIO
          </Link>
          <Typography color="text.primary">OPERATIVO</Typography>
          <Link
            underline="hover"
            color="inherit"
            href="/mantenimientos"
          >
            MANTENIMIENTO
          </Link>
          <Typography color="text.primary">EDITAR</Typography>
        </Breadcrumbs>
      </div>
      <br />
      <DashboardCard title="Editar Mantenimiento" action={<NewButton href="/mantenimientos" text="Regresar" />}>
        <MantenimientoForm id={id} onSuccess={handleSuccess} />
      </DashboardCard>
    </PageContainer>
  );
};

export default EditarMantenimientoPage;