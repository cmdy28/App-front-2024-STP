import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function SimpleAlert() {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      SE SUPONE QUE AQUI SE VAN A CREAR NUEVOS VEHÍCULOS.
    </Alert>
  );
}