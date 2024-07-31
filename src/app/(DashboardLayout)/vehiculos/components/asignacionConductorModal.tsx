'use client';
import React, { useState, useEffect } from 'react';
import { 
  Modal, 
  Box, 
  Typography, 
  Button, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel,
  SelectChangeEvent
} from '@mui/material';
import { get, post } from '@/app/utils/api';
import { Vehiculo, Conductor } from '@/app/utils/interface';

interface AsignacionModalProps {
  open: boolean;
  onClose: () => void;
}

const AsignacionModal: React.FC<AsignacionModalProps> = ({ open, onClose }) => {
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
  const [conductores, setConductores] = useState<Conductor[]>([]);
  const [selectedVehiculo, setSelectedVehiculo] = useState('');
  const [selectedConductor, setSelectedConductor] = useState('');

  useEffect(() => {
    fetchVehiculos();
    fetchConductores();
  }, []);

  const fetchVehiculos = async () => {
    try {
      const response = await get<{ data: Vehiculo[] }>('/vehiculo');
      setVehiculos(response.data.data.filter(v => v.estado_id === 1)); 
    } catch (error) {
      console.error('Error fetching vehiculos:', error);
    }
  };

  const fetchConductores = async () => {
    try {
      const response = await get<{ data: Conductor[] }>('/conductor');
      setConductores(response.data.data);
    } catch (error) {
      console.error('Error fetching conductores:', error);
    }
  };

  const handleVehiculoChange = (event: SelectChangeEvent) => {
    setSelectedVehiculo(event.target.value as string);
  };

  const handleConductorChange = (event: SelectChangeEvent) => {
    setSelectedConductor(event.target.value as string);
  };

  const resetForm = () => {
    setSelectedVehiculo('');
    setSelectedConductor('');
  };

  const handleAsignacion = async () => {
    if (!selectedVehiculo || !selectedConductor) {
      alert('Por favor seleccione un vehículo y un conductor');
      return;
    }

    try {
      await post('/conductor_vehiculo', {
        vehiculo_id: selectedVehiculo,
        conductor_id: selectedConductor
      });
      alert('Asignación realizada con éxito');
      resetForm();
      onClose();
      fetchVehiculos();
      fetchConductores();
    } catch (error) {
      console.error('Error en la asignación:', error);
      alert('Error al realizar la asignación');
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      }}>
        <Typography variant="h6" component="h2">
          Nueva Asignación
        </Typography>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Vehículo</InputLabel>
          <Select
            value={selectedVehiculo}
            label="Vehículo"
            onChange={handleVehiculoChange}
          >
            {vehiculos.map((vehiculo) => (
              <MenuItem key={vehiculo.id} value={vehiculo.id}>
                {vehiculo.marca} {vehiculo.modelo} - {vehiculo.placa}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Conductor</InputLabel>
          <Select
            value={selectedConductor}
            label="Conductor"
            onChange={handleConductorChange}
          >
            {conductores.map((conductor) => (
              <MenuItem key={conductor.id} value={conductor.id}>
                {conductor.persona.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button onClick={handleAsignacion} variant="contained" sx={{ mt: 2 }}>
          Realizar Asignación
        </Button>
      </Box>
    </Modal>
  );
};

export default AsignacionModal;