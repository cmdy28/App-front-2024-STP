import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Box } from '@mui/material';

// agregar las respectivas validaciones de que es lo que se va a buscar, la idea es utilizar este mismo componente en varios modulos
export default function SearchField() {
  return (
    <Box
      component="form"
      sx={{ p: '0px 4px', display: 'flex', alignItems: 'center', width: 550, height:30 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        size="small"
        placeholder="Buscar Conductor"
        inputProps={{ 'aria-label': 'search conductor' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
