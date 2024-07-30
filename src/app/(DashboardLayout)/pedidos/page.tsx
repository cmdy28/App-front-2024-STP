'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import IndexPedido from '@/app/(DashboardLayout)/pedidos/index';
import DashboardCard from '../components/shared/DashboardCard';
import { Breadcrumbs, Button, Link, Typography } from '@mui/material';
import NewButton from '../components/shared/button';


const SamplePage = () => {
  return (
    <PageContainer title="Pedidos" description="Index pedidos" >
      <div role="presentation" >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            INICIO
          </Link>
          <Typography color="text.primary">PEDIDOS</Typography>
        </Breadcrumbs>
      </div>
      <br />
      <DashboardCard title="Pedidos" 
        action={
            <NewButton href="pedidos/nuevo" text="Nuevo"/>
        }
        >
        <IndexPedido />
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;