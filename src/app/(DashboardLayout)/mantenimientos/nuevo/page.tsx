'use client'
import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import NewButton from '../../components/shared/button';
import MantenimientoForm from '@/app/(DashboardLayout)/mantenimientos/components/MantenimientoForm';
import { useRouter } from 'next/navigation';

const NuevoMantenimientoPage = () => {
  const router = useRouter();

  const handleSuccess = () => {
    router.push('/mantenimientos');
  };

  return (
    <PageContainer title="Crear Mantenimientos" description="Index Mantenimientos">
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
            MANTENIMIENTOS
          </Link>
          <Typography color="text.primary">NUEVO</Typography>
        </Breadcrumbs>
      </div>
      <br />
      <DashboardCard title="Crear Mantenimientos" action={<NewButton href="/mantenimientos" text="Regresar" />}>
        <MantenimientoForm onSuccess={handleSuccess} />
      </DashboardCard>
    </PageContainer>
  );
};

export default NuevoMantenimientoPage;