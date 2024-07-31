'use client';
import MantenimientoList from '@/app/(DashboardLayout)/mantenimientos/components/tablaMantenimientos';
import Divider from '@mui/material/Divider';
import { Box, Grid } from '@mui/material';
import SearchField from '@/app/(DashboardLayout)/components/shared/SearchField';


const IndexMantenimiento = () => {
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
        <MantenimientoList/>
    </Box>
    
  );
};


export default IndexMantenimiento;