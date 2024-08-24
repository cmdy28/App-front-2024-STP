import {Typography, Box, Table, Divider, TableBody, TableCell, TableHead, TableRow, IconButton, Link} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from 'react';
import { get, del } from '@/app/utils/api';
import {Msg, Cliente} from '@/app/utils/interface';
import { IconEdit, IconTrash } from '@tabler/icons-react';

interface ApiResponse {
  msg: Msg;
  data: Cliente[];
}

const ClienteList = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await get<ApiResponse>('/cliente');
        // Ordenar los clientes por el nombre de la persona
        const clientesOrdenados = response.data.data.sort((a, b) => 
          a.persona.nombre.localeCompare(b.persona.nombre)
        );
        setClientes(clientesOrdenados);
        // setClientes(response.data.data);
      } catch (error) {
        console.error('Error fetching clientes:', error);
      }
    };

    fetchClientes();
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
                  {cliente.persona.nombre}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {cliente.persona.cedula}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {cliente.persona.email}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  {cliente.tipo_cliente}
                </Typography>
              </TableCell>
              <TableCell>
                <Link href={`/clientes/editar?id=${cliente.id}`}>
                  <a>
                    <IconButton color="default" aria-label="edit">
                      <IconEdit stroke={1} height={30}/>
                    </IconButton>
                  </a>
                </Link>
                <IconButton aria-label="delete" color="error" 
                // onClick={() => handleClick('delete')}
                >
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

export default ClienteList;