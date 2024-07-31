'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import IndexConductor from '@/app/(DashboardLayout)/conductores/index';
import DashboardCard from '../components/shared/DashboardCard';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import NewButton from '../components/shared/button';


const SamplePage = () => {
  return (
    <PageContainer title="Conductores" description="Index conductores" >
      <div role="presentation" >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            INICIO
          </Link>
          <Typography color="text.primary">ADMINISTRATIVO</Typography>
          <Typography color="text.primary">CONDUCTORES</Typography>
        </Breadcrumbs>
      </div>
      <br />
      <DashboardCard title="Conductores" 
        action={
            <NewButton href="conductores/nuevo" text="Nuevo"/>
        }
        >
        <IndexConductor />
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;