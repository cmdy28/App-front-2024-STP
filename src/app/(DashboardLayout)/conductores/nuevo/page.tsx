'use client'
import React, { useState } from 'react';
import { TextField, Button, Grid, MenuItem, FormControlLabel, FormControl, Switch, InputLabel, Select, SelectChangeEvent, Divider, styled, Snackbar, Alert, Breadcrumbs, Link, Typography } from '@mui/material';
import { post } from '@/app/utils/api';
import {Msg, Persona} from '@/app/utils/interface';
import DashboardCard from '@/app/(DashboardLayout)//components/shared/DashboardCard';
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
  msg : Msg;
  data: Persona;
}

interface FormData {
  tipo_identificacion_id: string;
  nombre: string;
  cedula: string;
  email: string;
  sexo: string;
  direccion: string;
  celular: string;
  licencia_conducir: string;
  estado_id: string;
  hacer_user: boolean;
}

const ConductorForm = () => {
  const [formData, setFormData] = useState<FormData>({
    tipo_identificacion_id: '',
    nombre: '',
    cedula: '',
    email: '',
    sexo: '',
    direccion: '',
    celular: '',
    licencia_conducir: '',
    estado_id: '',
    hacer_user: false,
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
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
      // Primero, crea la persona
      const personaResponse = await post<ApiResponse>('/persona', {
        tipo_identificacion_id: parseInt(formData.tipo_identificacion_id, 10),
        nombre: formData.nombre,
        cedula: formData.cedula,
        email: formData.email,
        sexo: formData.sexo,
        direccion: formData.direccion,
        celular: formData.celular,
      });

      const personaId = personaResponse.data.data.id;

      // Luego, crea el conductor usando el ID de la persona
      console.log({
        persona_id: personaId,
        licencia_conducir: formData.licencia_conducir,
        estado_id: parseInt(formData.estado_id, 10),
        hacer_user: formData.hacer_user,
      });
      await post('/conductor', {
        persona_id: personaId,
        licencia_conducir: formData.licencia_conducir,
        estado_id: parseInt(formData.estado_id, 10),
        hacer_user: formData.hacer_user,
      });

      setSnackbarMessage('Conductor creado exitosamente');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Error al crear el conductor:', error);
      setSnackbarMessage('Error al crear el conductor');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <PageContainer title="Crear Conductor" description="Index conductores" >
      <div role="presentation" >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            INICIO
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/conductores"
          >
            CONDUCTORES
          </Link>
          <Typography color="text.primary">NUEVO</Typography>
        </Breadcrumbs>
      </div>
      <br />
      <DashboardCard title="Crear Conductor" action={
            <NewButton href="/conductores" text="Regresar"/>
        }>
      <form onSubmit={handleSubmit}>
      <br />
      <Divider textAlign="center">DATOS PERSONALES</Divider>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TextField
            select
            fullWidth
            name="tipo_identificacion_id"
            label="Tipo de identificación"
            value={formData.tipo_identificacion_id}
            onChange={handleChange}
            size="small"
            required
          >
            <MenuItem value="1">Cédula</MenuItem>
            <MenuItem value="2">RUC</MenuItem>
            {/* Agrega más opciones según tus necesidades */}
          </TextField>
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            name="cedula"
            label="Cédula"
            value={formData.cedula}
            onChange={handleChange}
            size="small"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="nombre"
            label="Nombre y Apellido"
            value={formData.nombre}
            onChange={handleChange}
            size="small"
            required
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            select
            fullWidth
            name="sexo"
            label="Sexo"
            value={formData.sexo}
            onChange={handleChange}
            size="small"
            required
          >
            <MenuItem value="M">Masculino</MenuItem>
            <MenuItem value="F">Femenino</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            name="licencia_conducir"
            label="Licencia de conducir"
            value={formData.licencia_conducir}
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
            <MenuItem value="1">Activo</MenuItem>
            <MenuItem value="2">Inactivo</MenuItem>
            {/* Agrega más opciones según tus necesidades */}
          </TextField>
        </Grid>
        
        <Grid item xs={3}>
          <FormControlLabel
            control={
              <Switch
                checked={formData.hacer_user}
                onChange={handleSwitchChange}
                name="hacer_user"
                color="primary"
              />
            }
            label="Crear usuario"
          />
        </Grid>
      </Grid>
      <br />
      <Divider textAlign="center">INFORMACIÓN DE CONTACTO</Divider>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <TextField
            fullWidth
            type="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            size="small"
            required
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            name="celular"
            label="Celular"
            value={formData.celular}
            onChange={handleChange}
            size="small"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="direccion"
            label="Dirección"
            value={formData.direccion}
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
            Crear Conductor
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

export default ConductorForm;