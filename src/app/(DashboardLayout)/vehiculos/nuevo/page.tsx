'use client'
import React, { useState } from 'react';
import { TextField, Button, Grid, MenuItem, Divider, styled, Snackbar, Alert, Breadcrumbs, Link, Typography } from '@mui/material';
import { get, post } from '@/app/utils/api';
import { Msg, Vehiculo } from '@/app/utils/interface';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import NewButton from '../../components/shared/button';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

interface ApiResponse {
  msg: Msg;
  data: Vehiculo;
}

const VehiculoForm = () => {
  const [formData, setFormData] = useState<Vehiculo>({
    tipo_vehiculo_id: 0,
    estado_id: 0,
    placa: '',
    marca: '',
    modelo: '',
    anio: 0,
    tipo_contrato: '',
    capacidad: 0,
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.type === 'number' ? parseInt(e.target.value, 10) : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const validateVehiculo = async (placa: string): Promise<boolean> => {
    try {
      const response = await get<ApiResponse>(`/vehiculos/filter?placa=${placa}`);
      if (response.data.data && Object.keys(response.data.data).length > 0) {
        return true; // Vehículo ya existe
      }
      return false; // Vehículo no existe
    } catch (error) {
      console.error('Error al validar vehículo:', error);
      setSnackbarMessage('Error al validar el vehículo');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Validar vehículo
      const vehiculoExists = await validateVehiculo(formData.placa);
      if (vehiculoExists) {
        setSnackbarMessage('El vehículo ya existe');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
        return;
      }

      // Crear vehículo
      await post('/vehiculo', formData);

      setSnackbarMessage('Vehículo creado exitosamente');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Error al crear el vehículo:', error);
      setSnackbarMessage('Error al crear el vehículo');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  return (
    <PageContainer title="Crear Vehículo" description="Index vehículos" >
      <div role="presentation" >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            INICIO
          </Link>
          <Link underline="hover" color="inherit" href="/vehiculos">
            VEHÍCULOS
          </Link>
          <Typography color="text.primary">NUEVO</Typography>
        </Breadcrumbs>
      </div>
      <br />
      <DashboardCard title="Crear Vehículo" action={
        <NewButton href="/vehiculos" text="Regresar"/>
      }>
        <form onSubmit={handleSubmit}>
          <br />
          <Divider textAlign="center">DATOS DEL VEHÍCULO</Divider>
          <br />
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField
                select
                fullWidth
                name="tipo_vehiculo_id"
                label="Tipo de vehículo"
                value={formData.tipo_vehiculo_id}
                onChange={handleChange}
                size="small"
                required
              >
                <MenuItem value={1}>Sedán</MenuItem>
                <MenuItem value={2}>SUV</MenuItem>
                <MenuItem value={3}>Camioneta</MenuItem>
                {/* Agrega más opciones según tus necesidades */}
              </TextField>
            </Grid>
            <Grid item xs={3}>
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
            <Grid item xs={3}>
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
            <Grid item xs={3}>
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
            <Grid item xs={3}>
              <TextField
                fullWidth
                type="number"
                name="anio"
                label="Año"
                value={formData.anio}
                onChange={handleChange}
                size="small"
                required
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                select
                fullWidth
                name="tipo_contrato"
                label="Tipo de contrato"
                value={formData.tipo_contrato}
                onChange={handleChange}
                size="small"
                required
              >
                <MenuItem value="Propio">Propio</MenuItem>
                <MenuItem value="Alquilado">Alquilado</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                type="number"
                name="capacidad"
                label="Capacidad (kg)"
                value={formData.capacidad}
                onChange={handleChange}
                size="small"
                required
              />
            </Grid>
            <Grid item xs={3}>
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
                <MenuItem value={1}>Activo</MenuItem>
                <MenuItem value={2}>Inactivo</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <br />
          <br />
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Crear Vehículo
            </Button>
          </Grid>
        </form>
      </DashboardCard>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} variant="filled" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </PageContainer>
  );
};

export default VehiculoForm;