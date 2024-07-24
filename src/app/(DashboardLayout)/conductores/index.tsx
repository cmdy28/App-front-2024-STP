'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ConductorList from '@/app/(DashboardLayout)/conductores/components/tablaConductores';
import Divider from '@mui/material/Divider';
import DashboardCard from '../components/shared/DashboardCard';
import { Box, Button, ButtonGroup, Grid, Icon } from '@mui/material';
import SearchField from '@/app/(DashboardLayout)/components/shared/SearchField';
import {IconFileX, IconFileTypePdf} from "@tabler/icons-react";


const IndexConductor = () => {
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
        <ConductorList/>
    </Box>
    
  );
};

export default IndexConductor;