'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import IndexMantenimiento from '@/app/(DashboardLayout)/mantenimientos/index';
import DashboardCard from '../components/shared/DashboardCard';
import { Breadcrumbs, Button, Link, Typography } from '@mui/material';
import NewButton from '../components/shared/button';


const SamplePage = () => {
  return (
    <PageContainer title="Mantenimientos" description="Index Mantenimientos" >
      <div role="presentation" >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            INICIO
          </Link>
          <Typography color="text.primary">OPERATIVO</Typography>
          <Typography color="text.primary">MANTENIMIENTOS</Typography>
        </Breadcrumbs>
      </div>
      <br />
      <DashboardCard title="Mantenimientos" 
        action={
            <NewButton href="mantenimientos/nuevo" text="Nuevo"/>
        }
        >
        <IndexMantenimiento />
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;