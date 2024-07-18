import {Typography, Box, Table, TableBody, TableCell, TableHead, TableRow, IconButton} from '@mui/material';
import { useState, useEffect } from 'react';
import {IconEdit, IconTrash} from "@tabler/icons-react";
import { get } from '@/app/utils/api';
import {Msg, Vehiculo} from '@/app/utils/interface';

interface ApiResponse {
  msg : Msg;
  data: Vehiculo;
}

const handleClick = (modulo: string) => {
  console.log('Botón clickeado ' + modulo);
};

const VehiculoList = () => {
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);

  useEffect(() => {
    const fetchVehiculos = async () => {
      try {
        const response = await get<ApiResponse>('/vehiculo');
        const vehiculosData = Object.values(response.data.data);
        setVehiculos(vehiculosData);
        console.log(vehiculosData);
      } catch (error) {
        console.error('Error fetching vehiculos:', error);
      }
    };

    fetchVehiculos();
  }, []);

  return (
    <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' }}}>
        <Table size='small'
            aria-label="simple table"
            sx={{
                whiteSpace: "nowrap",
                mt: 1
            }}
        >
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            Placa
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            Marca
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            Modelo
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            Año
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            Tipo de Contrato
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            Capacidad
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            Opciones
                        </Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {vehiculos.map((vehiculo) => (
                    <TableRow key={vehiculo.placa}>
                        <TableCell>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "500",
                                }}
                            >
                                {vehiculo.placa}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "500",
                                }}
                            >
                                {vehiculo.marca}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "500",
                                }}
                            >
                                {vehiculo.modelo}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {vehiculo.anio}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {vehiculo.tipo_contrato}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {vehiculo.capacidad}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <IconButton color="default" aria-label="edit" onClick={() => handleClick('edit')}>
                                <IconEdit stroke={1} height={30}/>
                            </IconButton>
                            <IconButton aria-label="delete" color="error" onClick={() => handleClick('delete')}>
                                <IconTrash stroke={1} height={30}/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Box>
  );
};

export default VehiculoList;