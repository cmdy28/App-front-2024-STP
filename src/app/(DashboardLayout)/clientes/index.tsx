'use client';
import ClientesList from '@/app/(DashboardLayout)/clientes/components/tablaClientes';
import Divider from '@mui/material/Divider';
import { Box, Grid } from '@mui/material';
import SearchField from '@/app/(DashboardLayout)/components/shared/SearchField';


const IndexCliente = () => {
  return (
    <Box>
        <Divider/>
        <br />
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <SearchField/>
            
            </Grid>
        </Grid>
        <br />
        <ClientesList/>
    </Box>
    
  );
};

export default IndexCliente;