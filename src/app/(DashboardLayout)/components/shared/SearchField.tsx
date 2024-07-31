import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

// agregar las respectivas validaciones de que es lo que se va a buscar, la idea es utilizar este mismo componente en varios modulos
export default function SearchField() {
  return (
    <Paper
      component="form"
      sx={{ display: 'flex', alignItems: 'center'}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar"
        inputProps={{ 'aria-label': 'buscar' }}
      />
      <IconButton type="button" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
