'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ClientesList from '@/app/(DashboardLayout)/clientes/components/tablaClientes';
import UnderlineLink from '@/app/(DashboardLayout)/clientes/components/linkNuevo';
import Divider from '@mui/material/Divider';
import DashboardCard from '../components/shared/DashboardCard';
import NewButton from '../components/shared/button';
import IndexCliente from '.';

const SamplePage = () => {
  return (
    <PageContainer title="Clientes" description="Index clientes" >
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


