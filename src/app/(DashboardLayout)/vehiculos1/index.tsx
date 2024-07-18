'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import VehiculoList from '@/app/(DashboardLayout)/vehiculos/components/tablaVehiculos';
import Divider from '@mui/material/Divider';
import DashboardCard from '../components/shared/DashboardCard';
import { Box, Button, ButtonGroup, Grid, Icon } from '@mui/material';
import SearchField from '../components/shared/SearchField';
import {IconFileX, IconFileTypePdf} from "@tabler/icons-react";
import { Vehiculo, Msg } from '@/app/utils/interface';
import { get } from '@/app/utils/api';
import { useEffect, useState } from 'react';

interface ApiResponse {
  msg : Msg;
  data: Vehiculo;
}

const IndexVehiculo = () => {
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);

  useEffect(() => {
    fetchVehiculos();
  }, []);

  const fetchVehiculos = async () => {
    try {
      const response = await get<ApiResponse>('/vehiculo');
      const vehiculosData = Object.values(response.data.data);
      setVehiculos(vehiculosData);
    } catch (error) {
      console.error('Error fetching vehiculos:', error);
    }
  };

  const handleSearch = (searchResults: Vehiculo[]) => {
    setVehiculos(searchResults);
  };
  
  return (
    <Box>
        <Divider/>
        <br />
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <SearchField onSearch={handleSearch}/>
            </Grid>
            {/* <Grid item xs={4} sx={{ alignItems: 'center' }}>
                <IconFileX stroke={1} height={30}/>
                <IconFileTypePdf stroke={1} height={30}/>
            </Grid> */}
        </Grid>
        <br />
        {/* <VehiculoList vehiculos={vehiculos}/> */}
    </Box>
    
  );
};

export default IndexVehiculo;