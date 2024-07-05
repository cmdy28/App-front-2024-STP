'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ConductorList from '@/app/(DashboardLayout)/conductores/components/tablaConductores';
import UnderlineLink from '@/app/(DashboardLayout)/clientes/components/linkNuevo';
import Divider from '@mui/material/Divider';

const SamplePage = () => {
  return (
    <PageContainer title="Clientes" description="Index clientes">
        <UnderlineLink />
    </PageContainer>
  );
};

export default SamplePage;


