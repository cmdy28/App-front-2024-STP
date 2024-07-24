'use client'
import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, MenuItem, Divider, Snackbar, Alert, FormControlLabel, Switch } from '@mui/material';
import { get, post, put } from '@/app/utils/api';
import { Msg, Persona, Conductor } from '@/app/utils/interface';

interface ConductorFormProps {
  id?: string;
  onSuccess: () => void;
}

interface ApiResponse {
    msg : Msg;
    data: Persona;
}

interface ApiResponseConductor {
    msg : Msg;
    data: Conductor;
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
    estado_id: number;
    hacer_user: boolean;
  }

const ConductorForm: React.FC<ConductorFormProps> = ({ id, onSuccess }) => {
  // ... (estado formData, openSnackbar, etc.)
  const [formData, setFormData] = useState<FormData>({
    tipo_identificacion_id: '',
    nombre: '',
    cedula: '',
    email: '',
    sexo: '',
    direccion: '',
    celular: '',
    licencia_conducir: '',
    estado_id: 0,
    hacer_user: false,
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  useEffect(() => {
    if (id) {
      fetchConductorData();
    }
  }, [id]);

  const fetchConductorData = async () => {
    try {
      const response = await get<ApiResponseConductor>(`/conductor/${id}`);
      const conductorData = response.data.data; 
      let personaId : number;
      personaId = conductorData.persona_id;
      const responsePersona = await get<ApiResponse>(`/persona/${personaId}`);
      const personaData = responsePersona.data.data; 
      setFormData({
        tipo_identificacion_id: personaData.tipo_identificacion_id.toString(),
        nombre: personaData.nombre,
        cedula: personaData.cedula,
        email: personaData.email,
        sexo: personaData.sexo,
        direccion: personaData.direccion,
        celular: personaData.celular,
        licencia_conducir: conductorData.licencia_conducir,
        estado_id: conductorData.estado_id,
        hacer_user: conductorData.hacer_user
      });
    } catch (error) {
      console.error('Error al obtener datos del conductor:', error);
      setSnackbarMessage('Error al obtener datos del conductor');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

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


  const validatePersona = async (cedula: string, email: string): Promise<{ exists: boolean; id: number | null }> => {
    try {
      const cedulaResponse = await get<ApiResponse>(`/personas/filter?cedula=${cedula}`);
  
      // Check if the response has data and the data is an array (assuming multiple personas might be returned)
      if (cedulaResponse.data.data && Array.isArray(cedulaResponse.data.data)) {
        // If data is an array, iterate to find the matching cedula
        for (const persona of cedulaResponse.data.data) {
          if (persona.cedula === cedula) {
            console.log('encontro cedula: ' + persona.id);
            return { exists: true, id: persona.id };
          }
        }
      } else if (cedulaResponse.data.data) { // Handle single persona response (optional)
        // If data is a single object, check directly
        if (cedulaResponse.data.data.cedula === cedula) {
          console.log('encontro cedula: ' + cedulaResponse.data.data.id);
          return { exists: true, id: cedulaResponse.data.data.id };
        }
      }

      const emailResponse = await get<ApiResponse>(`/personas/filter?email=${email}`);
      if (emailResponse.data.data && Array.isArray(emailResponse.data.data)) {
        // If data is an array, iterate to find the matching email
        for (const persona of emailResponse.data.data) {
          if (persona.email === email) {
            console.log('encontro email: ' + persona.id);
            return { exists: true, id: persona.id };
          }
        }
      } else if (emailResponse.data.data) { // Handle single persona response (optional)
        // If data is a single object, check directly
        if (emailResponse.data.data.email === email) {
          console.log('encontro email: ' + emailResponse.data.data.id);
          return { exists: true, id: emailResponse.data.data.id };
        }
      }
  
      // If no match found, return not found
      return { exists: false, id: null };
    } catch (error) {
      console.error('Error al validar persona:', error);
      setSnackbarMessage('Error al validar la persona');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return { exists: false, id: null };
    }
  }

  const validateConductor = async (personaId: number): Promise<boolean> => {
    try {
      const conductorResponse = await get<ApiResponse>(`/conductores/filter?persona_id=${personaId}`);
      console.log(conductorResponse.data.data);
      if (conductorResponse.data.data && Object.keys(conductorResponse.data.data).length > 0) {
        console.log('conductor ya existe validateConductor');
        return false;
      }
      return true;
    } catch (error) {
      console.error('Error al validar conductor:', error);
      setSnackbarMessage('Error al validar el conductor');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        if (id) {

            const response = await get<ApiResponseConductor>(`/conductor/${id}`);
            const conductorData = response.data.data;
            let personaId: number;
            personaId = conductorData.persona_id;
            //obtenemos el id persona
            await put(`/persona/${personaId}`, {
                tipo_identificacion_id: parseInt(formData.tipo_identificacion_id, 10),
                nombre: formData.nombre,
                cedula: formData.cedula,
                email: formData.email,
                sexo: formData.sexo,
                direccion: formData.direccion,
                celular: formData.celular
            });
            
            await put(`/conductor/${id}`, {
                licencia_conducir: formData.licencia_conducir,
                estado_id: formData.estado_id,
                hacer_user: formData.hacer_user,
            });

        } else {
            // Validar persona
            const personaValidation = await validatePersona(formData.cedula, formData.email);
            let personaId: number;
        
            if (personaValidation.exists) {
                // La persona ya existe
                console.log('La persona ya existe');
                personaId = personaValidation.id!;
                console.log('Persona id' + personaId);
                
                // Validar conductor
                const idConductorValid = await validateConductor(personaId);
                if (!idConductorValid) {
                setSnackbarMessage('El conductor ya existe');
                setSnackbarSeverity('error');
                setOpenSnackbar(true);
                return;
                }
            } else {
                // Crear nueva persona
                console.log('crear la persona');
                const personaResponse = await post<ApiResponse>('/persona', {
                tipo_identificacion_id: parseInt(formData.tipo_identificacion_id, 10),
                nombre: formData.nombre,
                cedula: formData.cedula,
                email: formData.email,
                sexo: formData.sexo,
                direccion: formData.direccion,
                celular: formData.celular,
                });
                personaId = personaResponse.data.data.id;
            }
        
            // Crear conductor
            await post('/conductor', {
                persona_id: personaId,
                licencia_conducir: formData.licencia_conducir,
                estado_id: formData.estado_id,
                hacer_user: formData.hacer_user,
            });
        }
        setSnackbarMessage(id ? 'Conductor actualizado exitosamente' : 'Conductor creado exitosamente');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        // onSuccess();
    } catch (error) {
        console.error('Error al crear el conductor:', error);
        setSnackbarMessage('Error al crear el conductor');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
    }
  };

  return (
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
          {id ? "Actualizar Conductor" : "Crear Conductor"}
          </Button>
        </Grid>
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} variant="filled" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </form>
  );
};

export default ConductorForm;