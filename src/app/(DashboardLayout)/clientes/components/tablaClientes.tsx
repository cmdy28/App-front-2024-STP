import {Typography, Box, Table, Divider, Link, TableBody, Breadcrumbs, TableCell, TableHead, TableRow, Chip, IconButton} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import DashboardCard from '@/app/(DashboardLayout)//components/shared/DashboardCard';
import { useState, useEffect } from 'react';
import { get } from '@/app/utils/api';
// import Divider from '@mui/material/Divider';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';

interface ConductorConDatosPersonales {
  id: number;
  tipo_identificacion_id: number;
  nombre: string;
  cedula: string;
  email: string;
  sexo: string;
  direccion: string;
  celular: string;
  persona_id : number;
  licencia_conducir: string;
}

interface Msg {
  summary: string;
  detail: string;
}

interface ApiResponse {
  msg : Msg;
  data: ConductorConDatosPersonales;
}

const ConductorList = () => {
  const [conductores, setConductores] = useState<ConductorConDatosPersonales[]>([]);

  useEffect(() => {
    const fetchConductoresConDatosPersonales = async () => {
      try {
        //lista de conductores
        const responseConductores = await get<ApiResponse>('/conductor');
        const conductoresData = Object.values(responseConductores.data.data);

        // Obtener los datos personales para cada conductor
        const conductoresConDatosPersonales = await Promise.all(
          conductoresData.map(async (conductor) => {
            const responsePersona = await get<ApiResponse>(`/persona/${conductor.persona_id}`);
            const datosPersonales = responsePersona.data.data;

            // unificar la info de los datos personales con cada conductor
            const conductorConDatosPersonales = {
              ...conductor,
              nombre : datosPersonales.nombre,
              email : datosPersonales.email,
              tipo_identificacion_id: datosPersonales.tipo_identificacion_id,
              cedula: datosPersonales.cedula,
              sexo: datosPersonales.sexo,
              direccion: datosPersonales.direccion,
              celular: datosPersonales.celular
            };

            // console.log('Conductor con Datos Personales:', conductorConDatosPersonales); // Para depuración

            return conductorConDatosPersonales;
          })
        );

        setConductores(conductoresConDatosPersonales);
        console.log(conductoresConDatosPersonales);
      } catch (error) {
        console.error('Error fetching conductores con datos personales:', error);
      }
    };

    fetchConductoresConDatosPersonales();
  }, []);

  return (
    <DashboardCard title="Conductores">
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
                                        {conductor.nombre}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {conductor.cedula}
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
                                                Email: {conductor.email}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                sx={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                Dirección: {conductor.direccion}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                sx={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                Teléfono: {conductor.celular}
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
                                    {/* <Chip
                                        sx={{
                                            px: "4px",
                                            backgroundColor: '',
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={conductor.sexo}
                                    ></Chip> */}
                                    <IconButton color="primary" aria-label="add an alarm">
                                      <EditIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete" color="error">
                                      <DeleteOutlineIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
  );
};

export default ConductorList;