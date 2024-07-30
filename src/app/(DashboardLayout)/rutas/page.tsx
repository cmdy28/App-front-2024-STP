'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '../components/shared/DashboardCard';
import NewButton from '../components/shared/button';
import IndexRuta from '.';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { LoadScript } from '@react-google-maps/api';

const SamplePage = () => {
  return (
    <PageContainer title="Rutas" description="Index rutas" >
      <div role="presentation" >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            INICIO
          </Link>
          <Typography color="text.primary">OPERATIVO</Typography>
          <Typography color="text.primary">RUTAS</Typography>
        </Breadcrumbs>
      </div>
      <br />
      <DashboardCard title="Rutas" 
        action={
            <NewButton href="rutas/nuevo" text="Nuevo"/>
        }
        >

      <IndexRuta />
        
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;


