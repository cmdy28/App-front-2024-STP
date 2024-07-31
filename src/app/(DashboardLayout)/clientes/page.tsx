'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '../components/shared/DashboardCard';
import NewButton from '../components/shared/button';
import IndexCliente from '.';
import { Breadcrumbs, Link, Typography } from '@mui/material';

const SamplePage = () => {
  return (
    <PageContainer title="Clientes" description="Index clientes" >
      <div role="presentation" >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            INICIO
          </Link>
          <Typography color="text.primary">PEDIDOS</Typography>
          <Typography color="text.primary">CLIENTES</Typography>
        </Breadcrumbs>
      </div>
      <br />
      <DashboardCard title="Clientes" 
        action={
            <NewButton href="clientes/nuevo" text="Nuevo"/>
        }
        >
        <IndexCliente />
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;


