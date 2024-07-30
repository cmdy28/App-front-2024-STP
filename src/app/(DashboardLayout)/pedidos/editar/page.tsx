'use client'
import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import NewButton from '../../components/shared/button';
import PedidoForm from '@/app/(DashboardLayout)/pedidos/components/formPedido1';
import { useRouter, useSearchParams } from 'next/navigation';

const EditarPedidoPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const handleSuccess = () => {
    router.push('/pedidos');
  };

  if (!id) {
    return <div>ID de pedido no proporcionado</div>;
  }

  return (
    <PageContainer title="Editar Pedido" description="Index pedidos">
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
          <Typography color="text.primary">EDITAR</Typography>
        </Breadcrumbs>
      </div>
      <br />
      <DashboardCard title="Editar Pedido" action={<NewButton href="/pedidos" text="Regresar" />}>
        <PedidoForm id={id} onSuccess={handleSuccess} />
      </DashboardCard>
    </PageContainer>
  );
};

export default EditarPedidoPage;