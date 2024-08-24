'use client'
import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, MenuItem, Divider, Snackbar, Alert, Autocomplete } from '@mui/material';
import { get, post, put } from '@/app/utils/api';
import { GoogleMap, LoadScript, DirectionsRenderer } from '@react-google-maps/api';
import { Msg, Pedido, Cliente, Asignacion, Servicio, ConductorVehiculo, Conductor, Vehiculo, Ruta } from '@/app/utils/interface';

interface PedidoFormProps {
  id?: string;
  onSuccess: () => void;
}

interface ApiResponse<T> {
    msg: Msg;
    data: T;
}

interface FormData {
  cliente_id: number;
  ruta_id: number;
  conductor_id: number;
  vehiculo_id: number;
  servicio_id: number;
  estado_id: number;
  descripcion: string;
  peso_mercancia: string;
  fecha_recogida: string;
  fecha_entrega: string;
  prioridad: string;
}

const PedidoForm: React.FC<PedidoFormProps> = ({ id, onSuccess }) => {
  const [formData, setFormData] = useState<FormData>({
    cliente_id: 0,
    conductor_id: 0,
    ruta_id: 0,
    vehiculo_id: 0,
    servicio_id: 0,
    estado_id: 0,
    descripcion: '',
    peso_mercancia: '',
    fecha_recogida: '',
    fecha_entrega: '',
    prioridad: '',
  });

  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [conductores, setConductores] = useState<Conductor[]>([]);
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
  const [servicios, setServicios] = useState<Servicio[]>([]);
  const [rutas, setRutas] = useState<Ruta[]>([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const [selectedCliente, setSelectedCliente] = useState<Cliente | null>(null);
  const [clienteSearch, setClienteSearch] = useState('');
  const [isCreatingNewRoute, setIsCreatingNewRoute] = useState(false);
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    fetchClientes();
    fetchConductores();
    fetchVehiculos();
    fetchServicios();
    fetchRutas();
    if (id) {
      fetchPedidoData();
    }
  }, [id]);

  const fetchClientes = async () => {
    try {
      const response = await get<ApiResponse<Cliente[]>>('/cliente');
      setClientes(response.data.data);
    } catch (error) {
      console.error('Error al obtener clientes:', error);
    }
  };

  const fetchConductores = async () => {
    try {
      const response = await get<ApiResponse<Conductor[]>>('/conductor');
      setConductores(response.data.data);
    } catch (error) {
      console.error('Error al obtener conductores:', error);
    }
  };

  const fetchVehiculos = async () => {
    try {
      const response = await get<ApiResponse<Vehiculo[]>>('/vehiculo');
      setVehiculos(response.data.data);
    } catch (error) {
      console.error('Error al obtener vehículos:', error);
    }
  };

  const fetchServicios = async () => {
    try {
      const response = await get<ApiResponse<Servicio[]>>('/servicio');
      setServicios(response.data.data);
    } catch (error) {
      console.error('Error al obtener servicios:', error);
    }
  };

  const fetchRutas = async () => {
    try {
      const response = await get<ApiResponse<Ruta[]>>('/ruta');
      setRutas(response.data.data);
    } catch (error) {
      console.error('Error al obtener rutas:', error);
    }
  };

  const fetchPedidoData = async () => {
    try {
      const response = await get<ApiResponse<Pedido>>(`/envio/${id}`);
      const pedidoData = response.data.data;
      console.log(pedidoData);
      setFormData({
        cliente_id: pedidoData.cliente_id,
        conductor_id: pedidoData.asignacion.conductor_vehiculo.conductor_id,
        vehiculo_id: pedidoData.asignacion.conductor_vehiculo.vehiculo_id,
        ruta_id: pedidoData.asignacion.ruta_id,
        servicio_id: pedidoData.servicio_id,
        estado_id: pedidoData.estado_id,
        descripcion: pedidoData.descripcion,
        peso_mercancia: pedidoData.peso_mercancia,
        fecha_recogida: new Date(pedidoData.fecha_recogida).toISOString().split('T')[0],
        fecha_entrega: new Date(pedidoData.fecha_entrega).toISOString().split('T')[0],
        prioridad: pedidoData.prioridad,
      });
    } catch (error) {
      console.error('Error al obtener datos del pedido:', error);
      setSnackbarMessage('Error al obtener datos del pedido');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let conductorVehiculoId;
      let asignacionId;
      if (id) {
        // Actualizar pedido existente
        const pedidoData = {
          cliente_id: formData.cliente_id,
          servicio_id: formData.servicio_id,
          estado_id: formData.estado_id,
          descripcion: formData.descripcion,
          peso_mercancia: formData.peso_mercancia,
          fecha_recogida: formData.fecha_recogida,
          fecha_entrega: formData.fecha_entrega,
          prioridad: formData.prioridad
        };

        // Actualizar el pedido
        await put(`/envio/${id}`, pedidoData);

        // Obtener la asignación actual
        const pedidoResponse = await get<ApiResponse<Pedido>>(`/envio/${id}`);
        const asignacionId = pedidoResponse.data.data.asignacion.id;

        // Actualizar la asignación
        await put(`/asignacion/${asignacionId}`, {
          ruta_id: formData.ruta_id,
          fecha: new Date().toISOString()
        });
 
        // Actualizar conductor_vehiculo
        console.log({
          conductor_id: formData.conductor_id,
          vehiculo_id: formData.vehiculo_id,
        });
        const conductorVehiculoId = pedidoResponse.data.data.asignacion.conductor_vehiculo_id;
        await put(`/conductor_vehiculo/${conductorVehiculoId}`, {
          conductor_id: formData.conductor_id,
          vehiculo_id: formData.vehiculo_id,
        });

        setSnackbarMessage('Pedido actualizado exitosamente');
      } else {
         // Crear nuevo pedido
         const conductorVehiculo = await post<ApiResponse<ConductorVehiculo>>('/conductor_vehiculo', {
          conductor_id: formData.conductor_id,
          vehiculo_id: formData.vehiculo_id,
        });
        const conductorVehiculoId = conductorVehiculo.data.data.id;

        const asignacion = await post<ApiResponse<Asignacion>>('/asignacion', {
          ruta_id: formData.ruta_id,
          conductor_vehiculo_id: conductorVehiculoId,
          fecha: new Date().toISOString()
        });
        const asignacionId = asignacion.data.data.id;

        const pedidoData = {
          cliente_id: formData.cliente_id,
          asignacion_id: asignacionId,
          servicio_id: formData.servicio_id,
          estado_id: formData.estado_id,
          descripcion: formData.descripcion,
          peso_mercancia: formData.peso_mercancia,
          fecha_recogida: formData.fecha_recogida,
          fecha_entrega: formData.fecha_entrega,
          prioridad: formData.prioridad
        };

        await post('/envio', pedidoData);
        setSnackbarMessage('Pedido creado exitosamente');
      }
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      onSuccess();
    } catch (error) {
      console.error('Error al guardar el pedido:', error);
      setSnackbarMessage('Error al guardar el pedido');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const handleClienteChange = (event: any, newValue: Cliente | null) => {
    setSelectedCliente(newValue);
    if (newValue) {
      setFormData({ ...formData, cliente_id: newValue.id });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <Divider textAlign="center">DATOS DEL CLIENTE</Divider>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Autocomplete
            options={clientes}
            getOptionLabel={(option) => `${option.persona.cedula} - ${option.persona.nombre}`}
            renderInput={(params) => <TextField {...params} label="Cliente" />}
            onChange={handleClienteChange}
            value={selectedCliente}
            inputValue={clienteSearch}
            size="small"
            onInputChange={(event, newInputValue) => {
              setClienteSearch(newInputValue);
            }}
          />
        </Grid>
        {selectedCliente && (
          <Grid item xs={4}>
          <TextField
            fullWidth
            name="email"
            label="Email"
            value={selectedCliente.persona.email}
            onChange={handleChange}
            size="small"
            disabled
          />
        </Grid>
        )}
        {selectedCliente && (
          <Grid item xs={4}>
          <TextField
            fullWidth
            name="telefono"
            label="telefono"
            value={selectedCliente.persona.celular}
            onChange={handleChange}
            size="small"
            disabled
          />
        </Grid>
        )}
        {selectedCliente && (
          <Grid item xs={12}>
          <TextField
            fullWidth
            name="direccion"
            label="direccion"
            value={selectedCliente.persona.direccion}
            onChange={handleChange}
            size="small"
            disabled
          />
        </Grid>
        )}
      </Grid>
      <br />
      <Divider textAlign="center">DATOS DEL PEDIDO</Divider>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={3}>
          <TextField
            select
            fullWidth
            name="servicio_id"
            label="Servicio"
            value={formData.servicio_id}
            onChange={handleChange}
            size="small"
            required
          >
            {servicios.map((servicio) => (
              <MenuItem key={servicio.id} value={servicio.id}>
                {servicio.nombre}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            name="peso_mercancia"
            label="Peso de la mercancía"
            value={formData.peso_mercancia}
            onChange={handleChange}
            size="small"
            required
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            type="date"
            name="fecha_recogida"
            label="Fecha de recogida"
            InputLabelProps={{ shrink: true }}
            value={formData.fecha_recogida}
            onChange={handleChange}
            size="small"
            required
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            type="date"
            name="fecha_entrega"
            label="Fecha de entrega"
            InputLabelProps={{ shrink: true }}
            value={formData.fecha_entrega}
            onChange={handleChange}
            size="small"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={3}
            name="descripcion"
            label="Descripción"
            value={formData.descripcion}
            onChange={handleChange}
            size="small"
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            select
            fullWidth
            name="estado_id"
            label="Estado"
            value={formData.estado_id}
            onChange={handleChange}
            size="small"
            required
          >
            <MenuItem value={6}>Pendiente</MenuItem>
            <MenuItem value={7}>Retrasado</MenuItem>
            <MenuItem value={8}>En entrega</MenuItem>
            <MenuItem value={9}>Entregado</MenuItem>
            <MenuItem value={10}>Cancelado</MenuItem>
            <MenuItem value={11}>Devuelto</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={4}>
        <TextField
            select
            fullWidth
            name="prioridad"
            label="Prioridad"
            value={formData.prioridad}
            onChange={handleChange}
            size="small"
            required
          >
            <MenuItem value="ALTA">ALTA</MenuItem>
            <MenuItem value="MEDIA">MEDIA</MenuItem>
            <MenuItem value="BAJA">BAJA</MenuItem>
          </TextField>
        </Grid>
        {/* <Grid item xs={4}>
          <TextField
            select
            fullWidth
            name="ruta_id"
            label="Ruta"
            value={formData.ruta_id}
            onChange={handleChange}
            size="small"
            required
          >
            {rutas.map((ruta) => (
              <MenuItem key={ruta.id} value={ruta.id}>
                {ruta.ubicacion_origen.nombre} - {ruta.ubicacion_destino.nombre}
              </MenuItem>
            ))}
          </TextField>
        </Grid> */}
      </Grid>
      <br />
      <Divider textAlign="center">ASIGNAR CONDUCTOR</Divider>
      <br />
      <Grid container spacing={3}>
      <Grid item xs={4}>
          <TextField
            select
            fullWidth
            name="conductor_id"
            label="Conductor"
            value={formData.conductor_id}
            onChange={handleChange}
            size="small"
            required
          >
            {conductores.map((conductor) => (
              <MenuItem key={conductor.id} value={conductor.id}>
                {conductor.persona.nombre}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            select
            fullWidth
            name="vehiculo_id"
            label="Vehículo"
            value={formData.vehiculo_id}
            onChange={handleChange}
            size="small"
            required
          >
            {vehiculos.map((vehiculo) => (
              <MenuItem key={vehiculo.id} value={vehiculo.id}>
                {vehiculo.placa} - {vehiculo.marca}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <br />
      <Divider textAlign="center">GENERAR RUTA</Divider>
      <br />
      <Grid container spacing={3}>
        
      </Grid>
      <br />
      <Grid item xs={12}>
        <Button type="submit" variant="contained" color="primary">
          {id ? "Actualizar Pedido" : "Crear Pedido"}
        </Button>
      </Grid>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </form>
  );
};

export default PedidoForm;
