import {Typography, Box, Table, Divider, TableBody, TableCell, TableHead, TableRow, IconButton, Link} from '@mui/material';
import { useState, useEffect } from 'react';
import { get, del } from '@/app/utils/api';
import {Msg, Ruta} from '@/app/utils/interface';
import { IconEdit, IconEye, IconTrash } from '@tabler/icons-react';
import ConfirmDeleteModal from '@/app/(DashboardLayout)/components/shared/confirmModal';
import RutaMapModal from './RutaMapModal';

interface ApiResponse {
  msg: Msg;
  data: Ruta[];
}

const RutaList = () => {
  const [rutas, setRutas] = useState<Ruta[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [openMapModal, setOpenMapModal] = useState(false);
  const [selectedRutaId, setSelectedRutaId] = useState<number | null>(null);
  const [selectedRutaOrigen, setSelectedRutaOrigen] = useState<string>('');
  const [selectedRutaDestino, setSelectedRutaDestino] = useState<string>('');

  useEffect(() => {
    fetchRutas();
  }, []);

  const fetchRutas = async () => {
    try {
      const response = await get<ApiResponse>('/ruta');
      console.log(response);
      const rutasOrdenadas = response.data.data.sort((a, b) => 
        a.ubicacion_origen.nombre.localeCompare(b.ubicacion_origen.nombre)
      );
      setRutas(rutasOrdenadas);
    } catch (error) {
      console.error('Error fetching rutas:', error);
    }
  };

  const handleDeleteClick = (id: number) => {
    setSelectedRutaId(id);
    setOpenModal(true);
  };

  const handleViewMapClick = (origen: string, destino: string) => {
    setSelectedRutaOrigen(origen);
    setSelectedRutaDestino(destino);
    setOpenMapModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedRutaId(null);
  };

  const handleCloseMapModal = () => {
    setOpenMapModal(false);
  };

  const handleConfirmDelete = async () => {
    if (selectedRutaId) {
      try {
        await del(`/ruta/${selectedRutaId}`);
        fetchRutas();
        handleCloseModal();
      } catch (error) {
        console.error('Error al eliminar la ruta:', error);
      }
    }
  };

  return (
    <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' }}}>
      <Divider />
      <Table
        aria-label="simple table"
        sx={{
          whiteSpace: "nowrap",
          mt: 2
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Ubicación de Origen
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Ubicación de Destino
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Distancia
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Duración
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
          {rutas.map((ruta) => (
            <TableRow key={ruta.id}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {ruta.ubicacion_origen.nombre}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {ruta.ubicacion_destino.nombre}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  {ruta.distancia}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  {ruta.duracion}
                </Typography>
              </TableCell>
              <TableCell>
                <IconButton aria-label="delete" color="default" 
                onClick={() => handleViewMapClick(ruta.ubicacion_origen.nombre, ruta.ubicacion_destino.nombre)}
                >
                  <IconEye stroke={1} height={30}/>
                </IconButton>
                <IconButton aria-label="delete" color="error" 
                onClick={() => handleDeleteClick(ruta.id)}
                >
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

      <RutaMapModal
        open={openMapModal}
        onClose={handleCloseMapModal}
        origen={selectedRutaOrigen}
        destino={selectedRutaDestino}
      />

    </Box>
  );
};

export default RutaList;