'use client';
import VehiculoList from '@/app/(DashboardLayout)/vehiculos/components/tablaVehiculos';
import Divider from '@mui/material/Divider';
import { Box, Grid } from '@mui/material';
import SearchField from '@/app/(DashboardLayout)/components/shared/SearchField';


const IndexVehiculo = () => {
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
        <VehiculoList/>
    </Box>
    
  );
};

export default IndexVehiculo;