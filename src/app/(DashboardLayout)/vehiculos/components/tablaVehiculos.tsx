import {Typography, Box, Table, TableBody, TableCell, TableHead, TableRow, IconButton, Divider, Link, Chip} from '@mui/material';
import { useState, useEffect } from 'react';
import {IconEdit, IconTrash} from "@tabler/icons-react";
import { get, del } from '@/app/utils/api';
import {Msg, Vehiculo} from '@/app/utils/interface';
import ConfirmDeleteModal from '@/app/(DashboardLayout)/components/shared/confirmModal';

interface ApiResponse {
  msg : Msg;
  data: Vehiculo;
}

const handleClick = (modulo: string) => {
  console.log('Botón clickeado ' + modulo);
};

const getEstadoColor = (estadoId: number) => {
    switch(estadoId) {
        case 1: return 'success'; // activo
        case 3: return 'warning'; // en mantenimiento
        case 4: return 'info'; // en ruta
        case 5: return 'error'; // fuera de servicio
        default: return 'default';
    }
};

const VehiculoList = () => {
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedVehiculoId, setSelectedVehiculoId] = useState<number | null>(null);

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

  const handleDeleteClick = (id: number) => {
    setSelectedVehiculoId(id);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedVehiculoId(null);
  };

  const handleConfirmDelete = async () => {
    if (selectedVehiculoId) {
      try {
        await del(`/vehiculo/${selectedVehiculoId}`);
        fetchVehiculos();
        handleCloseModal();
      } catch (error) {
        console.error('Error deleting vehiculo:', error);
      }
    }
  };

  return (
    <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' }}}>
        <Divider />
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
                            Capacidad (Kg)
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            Estado
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
                                {vehiculo.capacidad}Kg
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Chip 
                                label={vehiculo.estado.nombre}
                                color={getEstadoColor(vehiculo.estado_id)}
                                size="small"
                            />
                        </TableCell>
                        <TableCell>
                            <Link href={`/vehiculos/editar?id=${vehiculo.id}`}>
                            <a>
                                <IconButton color="default" aria-label="edit">
                                <IconEdit stroke={1} height={30}/>
                                </IconButton>
                            </a>
                            </Link>
                            <IconButton aria-label="delete" color="error" onClick={() => handleDeleteClick(vehiculo.id)}>
                                <IconTrash stroke={1} height={30}/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        <ConfirmDeleteModal
            open={openModal}
            onClose={handleCloseModal}
            onConfirm={handleConfirmDelete}
        />
    </Box>
  );
};

export default VehiculoList;