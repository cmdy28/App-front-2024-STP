'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ConductorList from '@/app/(DashboardLayout)/conductores/components/tablaConductores';
import IndexVehiculo from '@/app/(DashboardLayout)/vehiculos/index';
import Divider from '@mui/material/Divider';
import DashboardCard from '../components/shared/DashboardCard';
import { Breadcrumbs, Button, ButtonGroup, Link, Typography } from '@mui/material';
import NewButton from '../components/shared/button';
import AsignacionModal from './components/asignacionConductorModal';
import { useState } from 'react';


const SamplePage = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <PageContainer title="Vehículos" description="Index vehículos" >
      <div role="presentation" >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            INICIO
          </Link>
          <Typography color="text.primary">ADMINISTRATIVO</Typography>
          <Typography color="text.primary">VEHÍCULOS</Typography>
        </Breadcrumbs>
      </div>
      <br />
      <DashboardCard title="Vehículos" 
        action={
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button color='info' onClick={handleOpenModal}>Asignar Conductor</Button>
            <NewButton href="vehiculos/nuevo" text="Nuevo"/>
          </ButtonGroup>
            
        }
        >
        <IndexVehiculo />
      </DashboardCard>
      <AsignacionModal open={openModal} onClose={handleCloseModal} />
    </PageContainer>
  );
};

export default SamplePage;