'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ConductorList from '@/app/(DashboardLayout)/conductores/components/tablaConductores';
import IndexConductor from '@/app/(DashboardLayout)/conductores/index';
import Divider from '@mui/material/Divider';
import DashboardCard from '../components/shared/DashboardCard';
import { Button } from '@mui/material';
import NewButton from '../components/shared/button';


const SamplePage = () => {
  return (
    <PageContainer title="Conductores" description="Index conductores" >
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