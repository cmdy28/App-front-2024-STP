'use client'
import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import NewButton from '../../components/shared/button';
import PedidoForm from '@/app/(DashboardLayout)/pedidos/components/formPedido1';
import { useRouter } from 'next/navigation';

const NuevoConductorPage = () => {
  const router = useRouter();

  const handleSuccess = () => {
    router.push('/pedidos');
  };

  return (
    <PageContainer title="Crear Pedido" description="Index pedidos">
        <div role="presentation" >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            INICIO
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/pedidos"
          >
            PEDIDOS
          </Link>
          <Typography color="text.primary">NUEVO</Typography>
        </Breadcrumbs>
      </div>
      <br />
      <DashboardCard title="Crear Pedido" action={<NewButton href="/pedidos" text="Regresar" />}>
        <PedidoForm onSuccess={handleSuccess} />
      </DashboardCard>
    </PageContainer>
  );
};

export default NuevoConductorPage;