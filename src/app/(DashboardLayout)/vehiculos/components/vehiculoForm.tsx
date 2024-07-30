'use client'
import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, MenuItem, Divider, Snackbar, Alert } from '@mui/material';
import { get, post, put } from '@/app/utils/api';
import { Msg, Vehiculo, TipoVehiculo } from '@/app/utils/interface';

interface VehiculoFormProps {
  id?: string;
  onSuccess: () => void;
}

interface ApiResponse {
    msg: Msg;
    data: Vehiculo;
}

interface FormData {
    tipo_vehiculo_id: string;
    estado_id: string;
    placa: string;
    marca: string;
    modelo: string;
    anio: string;
    tipo_contrato: string;
    capacidad: string;
}


const VehiculoForm: React.FC<VehiculoFormProps> = ({ id, onSuccess }) => {
  const [formData, setFormData] = useState<FormData>({
    tipo_vehiculo_id: '',
    estado_id: '',
    placa: '',
    marca: '',
    modelo: '',
    anio: '',
    tipo_contrato: '',
    capacidad: '',
  });

  const [tiposVehiculo, setTiposVehiculo] = useState<TipoVehiculo[]>([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  useEffect(() => {
    fetchTiposVehiculo();
    if (id) {
      fetchVehiculoData();
    }
  }, [id]);

  const fetchTiposVehiculo = async () => {
    try {
      const response = await get<{ msg: Msg; data: TipoVehiculo[] }>('/tipo_vehiculo');
      setTiposVehiculo(response.data.data);
    } catch (error) {
      console.error('Error al obtener tipos de vehículo:', error);
      setSnackbarMessage('Error al obtener tipos de vehículo');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const fetchVehiculoData = async () => {
    try {
      const response = await get<ApiResponse>(`/vehiculo/${id}`);
      const vehiculoData = response.data.data;
      setFormData({
        tipo_vehiculo_id: vehiculoData.tipo_vehiculo_id.toString(),
        estado_id: vehiculoData.estado_id.toString(),
        placa: vehiculoData.placa,
        marca: vehiculoData.marca,
        modelo: vehiculoData.modelo,
        anio: vehiculoData.anio.toString(),
        tipo_contrato: vehiculoData.tipo_contrato,
        capacidad: vehiculoData.capacidad.toString(),
      });
    } catch (error) {
      console.error('Error al obtener datos del vehículo:', error);
      setSnackbarMessage('Error al obtener datos del vehículo');
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
      const vehiculoData = {
        tipo_vehiculo_id: parseInt(formData.tipo_vehiculo_id, 10),
        estado_id: parseInt(formData.estado_id, 10),
        placa: formData.placa,
        marca: formData.marca,
        modelo: formData.modelo,
        anio: parseInt(formData.anio, 10),
        tipo_contrato: formData.tipo_contrato,
        capacidad: parseInt(formData.capacidad, 10),
        disponible: true,
      };

      if (id) {
        await put(`/vehiculo/${id}`, vehiculoData);
        setSnackbarMessage('Vehículo actualizado exitosamente');
      } else {
        await post('/vehiculo', vehiculoData);
        setSnackbarMessage('Vehículo creado exitosamente');
      }
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      onSuccess();
    } catch (error) {
      console.error('Error al guardar el vehículo:', error);
      setSnackbarMessage('Error al guardar el vehículo');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <Divider textAlign="center">DATOS DEL VEHÍCULO</Divider>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField
            select
            fullWidth
            name="tipo_vehiculo_id"
            label="Tipo de Vehículo"
            value={formData.tipo_vehiculo_id}
            onChange={handleChange}
            size="small"
            required
          >
            {tiposVehiculo.map((tipo) => (
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
            name="estado_id"
            label="Estado"
            value={formData.estado_id}
            onChange={handleChange}
            size="small"
            required
          >
            <MenuItem value="1">Activo</MenuItem>
            <MenuItem value="3">En mantenimiento</MenuItem>
            <MenuItem value="4">En ruta</MenuItem>
            <MenuItem value="5">Fuera de servicio</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            name="placa"
            label="Placa"
            value={formData.placa}
            onChange={handleChange}
            size="small"
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            name="marca"
            label="Marca"
            value={formData.marca}
            onChange={handleChange}
            size="small"
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            name="modelo"
            label="Modelo"
            value={formData.modelo}
            onChange={handleChange}
            size="small"
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            name="anio"
            label="Año"
            type="number"
            value={formData.anio}
            onChange={handleChange}
            size="small"
            required
          />
        </Grid>
        <Grid item xs={4}>
            <TextField
                fullWidth
                name="tipo_contrato"
                label="Tipo de Contrato"
                value={formData.tipo_contrato}
                onChange={handleChange}
                size="small"
                required
            />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            name="capacidad"
            label="Capacidad (Kg)"
            type="number"
            value={formData.capacidad}
            onChange={handleChange}
            size="small"
            required
          />
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid item xs={12}>
        <Button type="submit" variant="contained" color="primary">
          {id ? "Actualizar Vehículo" : "Crear Vehículo"}
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

export default VehiculoForm;