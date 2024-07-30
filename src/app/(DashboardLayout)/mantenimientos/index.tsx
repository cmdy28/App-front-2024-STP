'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import MantenimientoList from '@/app/(DashboardLayout)/mantenimientos/components/tablaMantenimientos';
import Divider from '@mui/material/Divider';
import DashboardCard from '../components/shared/DashboardCard';
import { Box, Button, ButtonGroup, Grid, Icon } from '@mui/material';
import SearchField from '@/app/(DashboardLayout)/components/shared/SearchField';
import {IconFileX, IconFileTypePdf} from "@tabler/icons-react";


const IndexMantenimiento = () => {
  return (
    <Box>
        <Divider/>
        <br />
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <SearchField/>
            </Grid>
            {/* <Grid item xs={4} sx={{ alignItems: 'center' }}>
                <IconFileX stroke={1} height={30}/>
                <IconFileTypePdf stroke={1} height={30}/>
            </Grid> */}
        </Grid>
        <br />
        <MantenimientoList/>
    </Box>
    
  );
};


export default IndexMantenimiento;