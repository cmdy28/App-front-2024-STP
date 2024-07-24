import {Typography, Box, Table, TableBody, TableCell, TableHead, TableRow, IconButton, Link, Divider} from '@mui/material';
import { useState, useEffect } from 'react';
import {IconEdit, IconTrash} from "@tabler/icons-react";
import { get } from '@/app/utils/api';
import {Conductor, Msg} from '@/app/utils/interface';

interface ApiResponse {
  msg: Msg;
  data: Conductor[];
}

const handleClick = (modulo: string) => {
  console.log('Botón clickeado ' + modulo);
};

const ConductorList = () => {
  const [conductores, setConductores] = useState<Conductor[]>([]);

  useEffect(() => {
    const fetchConductores = async () => {
      try {
        const response = await get<ApiResponse>('/conductor');
        // Ordenar los conductores por el nombre de la persona
        const conductoresOrdenados = response.data.data.sort((a, b) => 
          a.persona.nombre.localeCompare(b.persona.nombre)
        );
        setConductores(conductoresOrdenados);
        // setConductores(response.data.data);
      } catch (error) {
        console.error('Error fetching conductores:', error);
      }
    };

    fetchConductores();
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
                Nombre
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Cédula
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Información de contacto
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                # Licencia
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
          {conductores.map((conductor) => (
            <TableRow key={conductor.id}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {conductor.id}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {conductor.persona.nombre}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {conductor.persona.cedula}
                </Typography>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Email: {conductor.persona.email}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      Dirección: {conductor.persona.direccion}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      Teléfono: {conductor.persona.celular}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  {conductor.licencia_conducir}
                </Typography>
              </TableCell>
              <TableCell>
                <Link href={`/conductores/editar?id=${conductor.id}`}>
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

export default ConductorList;