'use client'
import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, MenuItem, Divider, Snackbar, Alert } from '@mui/material';
import { get, post, put } from '@/app/utils/api';
import { Msg, Persona, Cliente } from '@/app/utils/interface';

interface ClienteFormProps {
  id?: string;
  onSuccess: () => void;
}

interface ApiResponse {
    msg : Msg;
    data: Persona;
}

interface ApiResponseCliente {
    msg : Msg;
    data: Cliente;
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

const ClienteForm: React.FC<ClienteFormProps> = ({ id, onSuccess }) => {
  // ... (estado formData, openSnackbar, etc.)
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

  useEffect(() => {
    if (id) {
      fetchClienteData();
    }
  }, [id]);

  const fetchClienteData = async () => {
    try {
      const response = await get<ApiResponseCliente>(`/cliente/${id}`);
      const clienteData = response.data.data; 
      // let personaId : number;
      // personaId = clienteData.persona_id;
      // const responsePersona = await get<ApiResponse>(`/persona/${personaId}`);
      // const personaData = responsePersona.data.data; 
      setFormData({
        tipo_identificacion_id: clienteData.persona.tipo_identificacion_id.toString(),
        nombre: clienteData.persona.nombre,
        cedula: clienteData.persona.cedula,
        email: clienteData.persona.email,
        sexo: clienteData.persona.sexo,
        direccion: clienteData.persona.direccion,
        celular: clienteData.persona.celular,
        tipo_cliente: clienteData.tipo_cliente,
      });
    } catch (error) {
      console.error('Error al obtener datos del cliente:', error);
      setSnackbarMessage('Error al obtener datos del cliente');
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

  const validateCliente = async (personaId: number): Promise<boolean> => {
    try {
      const clienteResponse = await get<ApiResponse>(`/clientes/filter?persona_id=${personaId}`);
      console.log(clienteResponse.data.data);
      if (clienteResponse.data.data && Object.keys(clienteResponse.data.data).length > 0) {
        console.log('cliente ya existe validateCliente');
        return false;
      }
      return true;
    } catch (error) {
      console.error('Error al validar cliente:', error);
      setSnackbarMessage('Error al validar el cliente');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        if (id) {

            const response = await get<ApiResponseCliente>(`/cliente/${id}`);
            const clienteData = response.data.data;
            let personaId: number;
            personaId = clienteData.persona_id;
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
            
            await put(`/cliente/${id}`, {
                tipo_cliente: formData.tipo_cliente
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
                const idClienteValid = await validateCliente(personaId);
                if (!idClienteValid) {
                setSnackbarMessage('El cliente ya existe');
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
        
            console.log(personaId , formData.tipo_cliente);
            // Crear cliente
            await post('/cliente', {
                persona_id: personaId,
                tipo_cliente: formData.tipo_cliente
            });
        }
        setSnackbarMessage(id ? 'Cliente actualizado exitosamente' : 'Cliente creado exitosamente');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        // onSuccess();
    } catch (error) {
        console.error('Error al crear el cliente:', error);
        setSnackbarMessage('Error al crear el cliente');
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
          {id ? "Actualizar Cliente" : "Crear Cliente"}
          </Button>
        </Grid>
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}  sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </form>
  );
};

export default ClienteForm;