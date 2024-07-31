import {Typography, Box, Table, TableBody, TableCell, TableHead, TableRow, IconButton, Link, Divider, Chip} from '@mui/material';
import { useState, useEffect } from 'react';
import {IconEdit, IconFlagFilled, IconTrash} from "@tabler/icons-react";
import { get, del } from '@/app/utils/api';
import {Pedido, Msg} from '@/app/utils/interface';
import ConfirmDeleteModal from '@/app/(DashboardLayout)/components/shared/confirmModal';

interface ApiResponse {
  msg: Msg;
  data: Pedido[];
}

const PedidoList = () => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPedidoId, setSelectedPedidoId] = useState<number | null>(null);

  useEffect(() => {
    fetchPedidos();
  }, []);

  const fetchPedidos = async () => {
    try {
      const response = await get<ApiResponse>('/envio');

      const pedidosOrdenados = response.data.data.sort((a, b) => {
        const prioridadToNumber = (prioridad: string): number => {
          switch (prioridad.toUpperCase()) {
            case 'ALTA': return 1;
            case 'MEDIA': return 2;
            case 'BAJA': return 3;
            default: return 4; 
          }
        };
  
        const prioridadA = prioridadToNumber(a.prioridad);
        const prioridadB = prioridadToNumber(b.prioridad);
  
        // Primero, ordenamos por prioridad
        if (prioridadA !== prioridadB) {
          return prioridadA - prioridadB;
        }
  
        // Si las prioridades son iguales, ordenamos por fecha de recogida (más reciente primero)
        return new Date(b.fecha_recogida).getTime() - new Date(a.fecha_recogida).getTime();
      });
      console.log(pedidosOrdenados);
      setPedidos(pedidosOrdenados);
    } catch (error) {
      console.error('Error fetching pedidos:', error);
    }
  };

  const handleDeleteClick = (id: number) => {
    setSelectedPedidoId(id);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedPedidoId(null);
  };

  const handleConfirmDelete = async () => {
    if (selectedPedidoId) {
      try {
        await del(`/envio/${selectedPedidoId}`);
        fetchPedidos();
        handleCloseModal();
      } catch (error) {
        console.error('Error deleting pedido:', error);
      }
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'ALTA':
        return '#FF5D44';
      case 'MEDIA':
        return '#FFB41D';
      case 'BAJA':
        return '#6DB346';
      default:
        return '#6C737F';
    }
  };

  const getStatusStyle = (statusId: number) => {
    switch (statusId) {
      case 6: // Pendiente
        return { bgcolor: '#FFF9C4', color: '#F57F17' };
      case 7: // Retrasado
        return { bgcolor: '#FFCDD2', color: '#C62828' };
      case 8: // En entrega
        return { bgcolor: '#E1F5FE', color: '#0277BD' };
      case 9: // Entregado
        return { bgcolor: '#C8E6C9', color: '#2E7D32' };
      case 10: // Cancelado
        return { bgcolor: '#EFEBE9', color: '#4E342E' };
      case 11: // Devuelto
        return { bgcolor: '#FFE0B2', color: '#EF6C00' };
      default:
        return { bgcolor: '#E0E0E0', color: '#424242' };
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
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Cliente
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Servicio
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Prioridad de Recogida
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Fecha de Entrega
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
          {pedidos.map((pedido) => (
            <TableRow key={pedido.asignacion_id}>
              <TableCell>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconFlagFilled 
                  style={{ color: getPriorityColor(pedido.prioridad) }}
                  size={24}
                />
              </Box>
            </TableCell>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {pedido.cliente.persona.nombre}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {pedido.servicio.nombre}
                </Typography>
              </TableCell>
              <TableCell>
                <Box>
                  <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                    }}
                  >
                    {new Date(pedido.fecha_recogida).toLocaleDateString()}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box>
                  <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                    }}
                  >{new Date(pedido.fecha_entrega).toLocaleDateString()}
                  </Typography>
                </Box>
              </TableCell>
            <TableCell>
              <Chip
                label={pedido.estado.nombre}
                sx={{
                  ...getStatusStyle(pedido.estado.id),
                  fontWeight: 'medium',
                }}
                size="small"
              />
            </TableCell>
              <TableCell>
                <Link href={`/pedidos/editar?id=${pedido.id}`}>
                  <a>
                    <IconButton color="default" aria-label="edit">
                      <IconEdit stroke={1} height={30}/>
                    </IconButton>
                  </a>
                </Link>
                <IconButton aria-label="delete" color="error" onClick={() => handleDeleteClick(pedido.id)}>
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

export default PedidoList;