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
  tipo_cliente: string;
}

const ClienteForm = () => {
  const [formData, setFormData] = useState<FormData>({
    tipo_identificacion_id: '',
    nombre: '',
    cedula: '',
    email: '',
    sexo: '',
    direccion: '',
    celular: '',
    tipo_cliente: '',
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

      // Luego, crea el cliente usando el ID de la persona
      console.log({
        persona_id: personaId,
        tipo_cliente: formData.tipo_cliente,
      });
      await post('/cliente', {
        persona_id: personaId,
        tipo_cliente: formData.tipo_cliente,
      });

      setSnackbarMessage('Cliente creado exitosamente');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Error al crear el cliente:', error);
      setSnackbarMessage('Error al crear el cliente');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <PageContainer title="Crear Cliente" description="Index clientes" >
      <div role="presentation" >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            INICIO
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/clientes"
          >
            CLIENTES
          </Link>
          <Typography color="text.primary">NUEVO</Typography>
        </Breadcrumbs>
      </div>
      <br />
      <DashboardCard title="Crear Cliente" action={
            <NewButton href="/clientes" text="Regresar"/>
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
        <Grid item xs={6}>
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
        <Grid item xs={3}>
          <TextField
            select
            fullWidth
            name="sexo"
            label="Sexo"
            defaultValue="M"
            value={formData.sexo}
            onChange={handleChange}
            size="small"
          >
            <MenuItem value="M" >Masculino</MenuItem>
            <MenuItem value="F">Femenino</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={3}>
          <TextField
            select
            fullWidth
            name="tipo_cliente"
            label="Tipo Cliente"
            value={formData.tipo_cliente}
            onChange={handleChange}
            size="small"
            required
          >
            <MenuItem value="Normal">Normal</MenuItem>
            <MenuItem value="Empresa">Empresa</MenuItem>
            {/* Agrega más opciones según tus necesidades */}
          </TextField>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Crear Cliente
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

export default ClienteForm;
