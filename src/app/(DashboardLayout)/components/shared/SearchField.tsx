import * as React from 'react';
import { Box, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { Vehiculo, Msg } from '@/app/utils/interface';

interface ApiResponse {
  msg : Msg;
  data: Vehiculo;
}

interface SearchFieldProps {
  onSearch: (results: Vehiculo[]) => void;
}

export default function SearchField({ onSearch }: SearchFieldProps) {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    try {
      const response = await axios.get<ApiResponse>(`/vehiculo?search=${searchTerm}`);
      onSearch(Object.values(response.data.data));
    } catch (error) {
      console.error('Error en la búsqueda:', error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSearch}
      sx={{ p: '0px 4px', display: 'flex', alignItems: 'center', width: 550, height: 30 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        size="small"
        placeholder="Buscar Vehículo"
        inputProps={{ 'aria-label': 'search vehiculo' }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Box>
  );
}