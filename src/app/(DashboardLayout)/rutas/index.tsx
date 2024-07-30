'use client';
import RutaList from '@/app/(DashboardLayout)/rutas/components/tablaRutas';
import Divider from '@mui/material/Divider';
import { Box, Button, ButtonGroup, FormControl, Grid, Icon, InputLabel, MenuItem, Select } from '@mui/material';
import SearchField from '@/app/(DashboardLayout)/components/shared/SearchField';


const IndexRuta = () => {
  return (
    
    <Box>
        <Divider/>
        <br />
        <Grid container spacing={2}>
            <Grid item xs={4}>
            <SearchField/>
            </Grid>
        </Grid>
        <br />
        <RutaList/>
    </Box>
    
  );
};

export default IndexRuta;