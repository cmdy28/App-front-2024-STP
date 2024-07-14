import {Typography, Box, Table, Divider, Link, TableBody, Breadcrumbs, TableCell, TableHead, TableRow, Chip, IconButton} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import DashboardCard from '@/app/(DashboardLayout)//components/shared/DashboardCard';
import { useState, useEffect } from 'react';
import { get } from '@/app/utils/api';
import {Msg, ClienteConDatosPersonales} from '@/app/utils/interface';

interface ApiResponse {
  msg : Msg;
  data: ClienteConDatosPersonales;
}

const ClienteList = () => {
  const [clientes, setClientes] = useState<ClienteConDatosPersonales[]>([]);

  useEffect(() => {
    const fetchClientesConDatosPersonales = async () => {
      try {
        //lista de clientes
        const responseClientes = await get<ApiResponse>('/cliente');
        const clientesData = Object.values(responseClientes.data.data);

        // Obtener los datos personales para cada cliente
        const clientesConDatosPersonales = await Promise.all(
          clientesData.map(async (cliente) => {
            const responsePersona = await get<ApiResponse>(`/persona/${cliente.persona_id}`);
            const datosPersonales = responsePersona.data.data;

            // unificar la info de los datos personales con cada cliente
            const ClienteConDatosPersonales = {
              ...cliente,
              nombre : datosPersonales.nombre,
              email : datosPersonales.email,
              tipo_identificacion_id: datosPersonales.tipo_identificacion_id,
              cedula: datosPersonales.cedula,
              sexo: datosPersonales.sexo,
              direccion: datosPersonales.direccion,
              celular: datosPersonales.celular
            };

            // console.log('cliente con Datos Personales:', ClienteConDatosPersonales); // Para depuración

            return ClienteConDatosPersonales;
          })
        );

        setClientes(clientesConDatosPersonales);
        console.log(clientesConDatosPersonales);
      } catch (error) {
        console.error('Error fetching clientes con datos personales:', error);
      }
    };

    fetchClientesConDatosPersonales();
  }, []);

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
                            Cédula / RUC
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            Email
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            Tipo Cliente
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
                {clientes.map((cliente) => (
                    <TableRow key={cliente.id}>
                        <TableCell>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "500",
                                }}
                            >
                                {cliente.id}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "500",
                                }}
                            >
                                {cliente.nombre}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "500",
                                }}
                            >
                                {cliente.cedula}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "500",
                                }}
                            >
                                {cliente.email}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {cliente.tipo_cliente}
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
                                label={cliente.sexo}
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
  );
};

export default ClienteList;