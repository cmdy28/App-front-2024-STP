'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ConductorList from '@/app/(DashboardLayout)/conductores/components/tablaConductores';
import Divider from '@mui/material/Divider';

const SamplePage = () => {
  return (
    <PageContainer title="Conductores" description="Index conductores">
      <ConductorList />
    </PageContainer>
  );
};

export default SamplePage;