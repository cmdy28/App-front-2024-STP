'use client'
import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, MenuItem, Divider, Snackbar, Alert } from '@mui/material';
import { get, post, put } from '@/app/utils/api';
import { Msg, Mantenimiento, Vehiculo, TipoMantenimiento, TipoIntervalo } from '@/app/utils/interface';

interface MantenimientoFormProps {
  id?: string;
  onSuccess: () => void;
}

interface ApiResponse {
    msg: Msg;
    data: Mantenimiento;
}

interface FormData {
    vehiculo_id: string;
    mantenimiento_detalle_id: string;
    tipo_mantenimiento_id: string;
    tipo_intervalo_id: string;
    fecha_mantenimiento: string;
    costo_mantenimiento: string;
    intervalo_numero: string;
    descripcion: string;
    observacion: string;
}

const MantenimientoForm: React.FC<MantenimientoFormProps> = ({ id, onSuccess }) => {
  const [formData, setFormData] = useState<FormData>({
    vehiculo_id: '',
    mantenimiento_detalle_id: '',
    tipo_mantenimiento_id: '',
    tipo_intervalo_id: '',
    fecha_mantenimiento: '',
    costo_mantenimiento: '',
    intervalo_numero: '',
    descripcion: '',
    observacion: '',
  });

  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
  const [tiposMantenimiento, setTiposMantenimiento] = useState<TipoMantenimiento[]>([]);
  const [tiposIntervalo, setTiposIntervalo] = useState<TipoIntervalo[]>([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  useEffect(() => {
    fetchVehiculos();
    fetchTiposMantenimiento();
    fetchTiposIntervalo();
    if (id) {
      fetchMantenimientoData();
    }
  }, [id]);

  const fetchVehiculos = async () => {
    try {
      const response = await get<{ msg: Msg; data: Vehiculo[] }>('/vehiculo');
      setVehiculos(response.data.data);
    } catch (error) {
      console.error('Error al obtener vehículos:', error);
      showSnackbar('Error al obtener vehículos', 'error');
    }
  };

  const fetchTiposMantenimiento = async () => {
    try {
      const response = await get<{ msg: Msg; data: TipoMantenimiento[] }>('/tipo_mantenimiento');
      setTiposMantenimiento(response.data.data);
    } catch (error) {
      console.error('Error al obtener tipos de mantenimiento:', error);
      showSnackbar('Error al obtener tipos de mantenimiento', 'error');
    }
  };

  const fetchTiposIntervalo = async () => {
    try {
      const response = await get<{ msg: Msg; data: TipoIntervalo[] }>('/tipo_intervalo');
      setTiposIntervalo(response.data.data);
    } catch (error) {
      console.error('Error al obtener tipos de intervalo:', error);
      showSnackbar('Error al obtener tipos de intervalo', 'error');
    }
  };

  const fetchMantenimientoData = async () => {
    try {
      const response = await get<ApiResponse>(`/mantenimiento/${id}`);
      const mantenimientoData = response.data.data;
      setFormData({
        vehiculo_id: mantenimientoData.vehiculo_id.toString(),
        mantenimiento_detalle_id: mantenimientoData.mantenimiento_detalle_id.toString(),
        tipo_mantenimiento_id: mantenimientoData.tipo_mantenimiento_id.toString(),
        tipo_intervalo_id: mantenimientoData.tipo_intervalo_id.toString(),
        fecha_mantenimiento: new Date(mantenimientoData.fecha_mantenimiento).toISOString().split('T')[0],
        costo_mantenimiento: mantenimientoData.costo_mantenimiento.toString(),
        intervalo_numero: mantenimientoData.intervalo_numero.toString(),
        descripcion: mantenimientoData.mantenimiento_detalle.descripcion,
        observacion: mantenimientoData.mantenimiento_detalle.observacion,
      });
    } catch (error) {
      console.error('Error al obtener datos del mantenimiento:', error);
      showSnackbar('Error al obtener datos del mantenimiento', 'error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showSnackbar = (message: string, severity: 'success' | 'error') => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpenSnackbar(true);
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
      if (id) {
        // Actualizar mantenimiento existente
        const mantenimientoResponse = await get<ApiResponse>(`/mantenimiento/${id}`);
        const mantenimientoExistente = mantenimientoResponse.data.data;

        // Actualizar mantenimiento_detalle
        await put(`/mantenimiento_detalle/${mantenimientoExistente.mantenimiento_detalle_id}`, {
          descripcion: formData.descripcion,
          observacion: formData.observacion,
        });

        console.log({
            vehiculo_id: parseInt(formData.vehiculo_id, 10),
            tipo_mantenimiento_id: parseInt(formData.tipo_mantenimiento_id, 10),
            tipo_intervalo_id: parseInt(formData.tipo_intervalo_id, 10),
            fecha_mantenimiento: new Date(formData.fecha_mantenimiento),
            costo_mantenimiento: parseFloat(formData.costo_mantenimiento),
            intervalo_numero: parseInt(formData.intervalo_numero, 10),
          });
        // Actualizar mantenimiento
        await put(`/mantenimiento/${id}`, {
          vehiculo_id: parseInt(formData.vehiculo_id, 10),
          tipo_mantenimiento_id: parseInt(formData.tipo_mantenimiento_id, 10),
          tipo_intervalo_id: parseInt(formData.tipo_intervalo_id, 10),
          fecha_mantenimiento: new Date(formData.fecha_mantenimiento),
          costo_mantenimiento: parseFloat(formData.costo_mantenimiento),
          intervalo_numero: parseInt(formData.intervalo_numero, 10),
        });

        showSnackbar('Mantenimiento actualizado exitosamente', 'success');
      } else {
        // Crear nuevo mantenimiento_detalle
        const detalleResponse = await post<ApiResponse>('/mantenimiento_detalle', {
          descripcion: formData.descripcion,
          observacion: formData.observacion,
        });
        const nuevoDetalleId = detalleResponse.data.data.id;
        console.log('detalle id' + nuevoDetalleId);

        console.log({
            vehiculo_id: parseInt(formData.vehiculo_id, 10),
            mantenimiento_detalle_id: nuevoDetalleId,
            tipo_mantenimiento_id: parseInt(formData.tipo_mantenimiento_id, 10),
            tipo_intervalo_id: parseInt(formData.tipo_intervalo_id, 10),
            fecha_mantenimiento: formData.fecha_mantenimiento,
            costo_mantenimiento: parseFloat(formData.costo_mantenimiento),
            intervalo_numero: parseInt(formData.intervalo_numero, 10),
          });
        // Crear nuevo mantenimiento
        await post('/mantenimiento', {
          vehiculo_id: parseInt(formData.vehiculo_id, 10),
          mantenimiento_detalle_id: nuevoDetalleId,
          maquinaria_id: 1,
          tipo_mantenimiento_id: parseInt(formData.tipo_mantenimiento_id, 10),
          tipo_intervalo_id: parseInt(formData.tipo_intervalo_id, 10),
          fecha_mantenimiento: formData.fecha_mantenimiento,
          costo_mantenimiento: parseFloat(formData.costo_mantenimiento),
          intervalo_numero: parseInt(formData.intervalo_numero, 10),
        });

        showSnackbar('Mantenimiento creado exitosamente', 'success');
      }
      onSuccess();
    } catch (error) {
      console.error('Error al guardar el mantenimiento:', error);
      showSnackbar('Error al guardar el mantenimiento', 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <Divider textAlign="center">DATOS DEL MANTENIMIENTO</Divider>
      <br />
      <Grid container spacing={3}>
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
              <MenuItem key={vehiculo.id} value={vehiculo.id.toString()}>
                {vehiculo.placa} - {vehiculo.marca} {vehiculo.modelo}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            select
            fullWidth
            name="tipo_mantenimiento_id"
            label="Tipo de Mantenimiento"
            value={formData.tipo_mantenimiento_id}
            onChange={handleChange}
            size="small"
            required
          >
            {tiposMantenimiento.map((tipo) => (
              <MenuItem key={tipo.id} value={tipo.id.toString()}>
                {tipo.nombre}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            select
            fullWidth
            name="tipo_intervalo_id"
            label="Tipo de Intervalo"
            value={formData.tipo_intervalo_id}
            onChange={handleChange}
            size="small"
            required
          >
            {tiposIntervalo.map((tipo) => (
              <MenuItem key={tipo.id} value={tipo.id.toString()}>
                {tipo.nombre}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            name="fecha_mantenimiento"
            label="Fecha de Mantenimiento"
            type="date"
            value={formData.fecha_mantenimiento}
            onChange={handleChange}
            size="small"
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            name="costo_mantenimiento"
            label="Costo de Mantenimiento"
            type="number"
            value={formData.costo_mantenimiento}
            onChange={handleChange}
            size="small"
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            name="intervalo_numero"
            label="Número de Intervalo"
            type="number"
            value={formData.intervalo_numero}
            onChange={handleChange}
            size="small"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="descripcion"
            label="Descripción"
            multiline
            rows={4}
            value={formData.descripcion}
            onChange={handleChange}
            size="small"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="observacion"
            label="Observación"
            multiline
            rows={4}
            value={formData.observacion}
            onChange={handleChange}
            size="small"
          />
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid item xs={12}>
        <Button type="submit" variant="contained" color="primary">
          {id ? "Actualizar Mantenimiento" : "Crear Mantenimiento"}
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

export default MantenimientoForm;