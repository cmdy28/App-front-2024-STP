import {Typography, Box, Table, TableBody, TableCell, TableHead, TableRow, IconButton, Link, Divider} from '@mui/material';
import { useState, useEffect } from 'react';
import {IconEdit, IconTrash} from "@tabler/icons-react";
import { get } from '@/app/utils/api';
import {Mantenimiento, Msg} from '@/app/utils/interface';

interface ApiResponse {
  msg: Msg;
  data: Mantenimiento[];
}

const handleClick = (modulo: string) => {
  console.log('Botón clickeado ' + modulo);
};

const MantenimientoList = () => {
  const [mantenimientos, setMantenimientos] = useState<Mantenimiento[]>([]);

  useEffect(() => {
    const fetchMantenimientos = async () => {
      try {
        const response = await get<ApiResponse>('/mantenimiento');
        const mantenimientosFiltrados = response.data.data
          .filter(mantenimiento => mantenimiento.vehiculo)
          .sort((a, b) => 
            new Date(b.fecha_mantenimiento).getTime() - new Date(a.fecha_mantenimiento).getTime()
          );
        setMantenimientos(mantenimientosFiltrados);
      } catch (error) {
        console.error('Error fetching mantenimientos:', error);
      }
    };
  
    fetchMantenimientos();
  }, []);

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
                Id
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Vehículo
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Tipo de Mantenimiento
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Fecha
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Costo
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
          {mantenimientos.map((mantenimiento) => (
            <TableRow key={mantenimiento.id}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {mantenimiento.id}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {mantenimiento.vehiculo.marca} {mantenimiento.vehiculo.modelo}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {mantenimiento.tipo_mantenimiento.nombre}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  {new Date(mantenimiento.fecha_mantenimiento).toLocaleDateString()}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  ${mantenimiento.costo_mantenimiento}
                </Typography>
              </TableCell>
              <TableCell>
                <Link href={`/mantenimientos/editar?id=${mantenimiento.id}`}>
                  <a>
                    <IconButton color="default" aria-label="edit">
                      <IconEdit stroke={1} height={30}/>
                    </IconButton>
                  </a>
                </Link>
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

export default MantenimientoList;