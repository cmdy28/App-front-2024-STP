'use client';
import ConductorList from '@/app/(DashboardLayout)/conductores/components/tablaConductores';
import Divider from '@mui/material/Divider';
import { Box, Grid } from '@mui/material';
import SearchField from '@/app/(DashboardLayout)/components/shared/SearchField';


const IndexConductor = () => {
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
        <ConductorList/>
    </Box>
    
  );
};

export default IndexConductor;