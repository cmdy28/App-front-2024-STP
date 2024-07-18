'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ConductorList from '@/app/(DashboardLayout)/conductores/components/tablaConductores';
import IndexVehiculo from '@/app/(DashboardLayout)/vehiculos/index';
import Divider from '@mui/material/Divider';
import DashboardCard from '../components/shared/DashboardCard';
import { Breadcrumbs, Button, Link, Typography } from '@mui/material';
import NewButton from '../components/shared/button';


const SamplePage = () => {
  return (
    <PageContainer title="Vehículos" description="Index vehículos" >
      <div role="presentation" >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            INICIO
          </Link>
          <Typography color="text.primary">VEHÍCULOS</Typography>
        </Breadcrumbs>
      </div>
      <br />
      <DashboardCard title="Vehículos" 
        action={
            <NewButton href="vehiculos/nuevo" text="Nuevo"/>
        }
        >
        <IndexVehiculo />
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;