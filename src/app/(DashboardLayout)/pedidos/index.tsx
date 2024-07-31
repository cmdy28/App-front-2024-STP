'use client';
import PedidoList from '@/app/(DashboardLayout)/pedidos/components/tablaPedidos';
import Divider from '@mui/material/Divider';
import { Avatar, Box, Grid, IconButton } from '@mui/material';
import SearchField from '@/app/(DashboardLayout)/components/shared/SearchField';
import { IconFileTypePdf } from '@tabler/icons-react';
import GeneralReportPDF from '../template/pdfReports/pedidosReportPDF';
import { useEffect, useState } from 'react';
import { Msg, Pedido } from '@/app/utils/interface';
import { get } from '@/app/utils/api';

interface ApiResponse {
  msg: Msg;
  data: Pedido[];
}

const IndexPedido = () => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  useEffect(() => {
    fetchPedidos();
  }, []);
  
  const empresaInfo = {
    nombre: "Mi Empresa",
    direccion: "Calle Principal 123",
    telefono: "123-456-7890",
    logo: "/images/logos/logo_new_final.png"
  };

  const fetchPedidos = async () => {
    try {
      const response = await get<ApiResponse>('/envio');
      const pedidosOrdenados = response.data.data.sort((a, b) => 
        new Date(b.fecha_recogida).getTime() - new Date(a.fecha_recogida).getTime()
      );
      console.log(pedidosOrdenados);
      setPedidos(pedidosOrdenados);
    } catch (error) {
      console.error('Error fetching pedidos:', error);
    }
  };
  const handleGenerateGeneralReport = () => {
    const generatePDF = GeneralReportPDF(pedidos, empresaInfo);
    generatePDF();
  };

  return (
    
    <Box>
        <Divider/>
        <br />
        <Grid container spacing={2}>
            <Grid item xs={4}>
            <SearchField/>
            </Grid>
             <Grid item xs={4} sx={{ alignItems: 'center' }}>
              <Avatar sx={{ bgcolor: "#20CAEE" }} variant="rounded">
                <IconButton aria-label="delete" onClick={handleGenerateGeneralReport}>
                  <IconFileTypePdf color='#fff' height={30}/>
                </IconButton>
                
              </Avatar>
            </Grid>
        </Grid>
        <br />
        <PedidoList/>
    </Box>
    
  );
};

export default IndexPedido;