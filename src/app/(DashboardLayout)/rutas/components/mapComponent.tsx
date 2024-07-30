'use client';
import React, { useState, useRef, useCallback } from 'react';
import { GoogleMap, LoadScript, Autocomplete, DirectionsRenderer } from '@react-google-maps/api';
import { TextField, Button, Box, Grid, Paper, Typography, Snackbar, Alert, Container } from '@mui/material';
import { get, post, put } from '@/app/utils/api';
import { Directions, Msg, Ruta, UbicacionDestino, UbicacionOrigen } from '@/app/utils/interface';

interface MapComponentProps {
  isCreatingFromPedido?: boolean;
  onRouteCreated?: (routeId: number) => void;
}

interface ApiResponse {
  msg : Msg;
  data: Ruta;
}

interface ApiResponseDirections {
  msg: Msg;
  data: Directions;
}

interface ApiResponseOrigen {
  msg : Msg;
  data: UbicacionOrigen;
}

interface ApiResponseDestino {
  msg : Msg;
  data: UbicacionDestino;
}
const mapContainerStyle = {
  width: '100%',
  height: '100%'
};

const quito = {
  lat: -0.1807,
  lng: -78.4678
};

const MapComponent: React.FC<MapComponentProps>  = ({ isCreatingFromPedido = false, onRouteCreated }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const originRef = useRef<google.maps.places.Autocomplete | null>(null);
  const destinationRef = useRef<google.maps.places.Autocomplete | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const [routeInfo, setRouteInfo] = useState<{
    distance: string;
    duration: string;
    startLocation: { lat: number; lng: number };
    endLocation: { lat: number; lng: number };
  } | null>(null);

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const calculateRoute = () => {
    if (!origin || !destination) return;

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK && result) {
          setDirections(result);
          const route = result.routes[0];
          if (route && route.legs[0]) {
            setRouteInfo({
              distance: route.legs[0].distance?.text || '',
              duration: route.legs[0].duration?.text || '',
              startLocation: {
                lat: route.legs[0].start_location.lat(),
                lng: route.legs[0].start_location.lng(),
              },
              endLocation: {
                lat: route.legs[0].end_location.lat(),
                lng: route.legs[0].end_location.lng(),
              },
            });
          }
        }
      }
    );
  };

  const onOriginSelect = () => {
    setOrigin(originRef.current?.getPlace()?.formatted_address || '');
  };

  const onDestinationSelect = () => {
    setDestination(destinationRef.current?.getPlace()?.formatted_address || '');
  };

  const getAddressFromLatLng = (latLng: google.maps.LatLng) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results && results[0]) {
          const address = results[0].formatted_address;
          if (!origin) {
            setOrigin(address);
          } else if (!destination) {
            setDestination(address);
          }
        }
      } else {
        console.error('Geocoder failed due to: ' + status);
      }
    });
  };

  const onMapClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      getAddressFromLatLng(e.latLng);
    }
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const saveRoute = async () => {
    if (!routeInfo || !origin || !destination) {
      setSnackbarMessage('Por favor, calcula una ruta primero.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    console.log({
      origin: origin,
      destination: destination,
    });
    try {
      // Guardar ubicación de origen
      const originResponse = await post<ApiResponseDirections>('/directions', {
        origin: origin,
        destination: destination,
      });

      setSnackbarMessage('Ruta guardada exitosamente');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);

      if (isCreatingFromPedido && onRouteCreated) {
        onRouteCreated(originResponse.data.data.id);
      }
    } catch (error) {
      console.error('Error al guardar la ruta:', error);
      setSnackbarMessage('Error al guardar la ruta');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
              <Typography variant="overline" gutterBottom>
                Punto de Origen 
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Autocomplete
                  onLoad={autocomplete => (originRef.current = autocomplete)}
                  onPlaceChanged={onOriginSelect}
                >
                  <TextField
                    fullWidth
                    label="Origen"
                    variant="outlined"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                  />
                </Autocomplete>
              </Box>
              <Typography variant="overline" gutterBottom>
                Punto de Destino 
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Autocomplete
                  onLoad={autocomplete => (destinationRef.current = autocomplete)}
                  onPlaceChanged={onDestinationSelect}
                >
                  <TextField
                    fullWidth
                    label="Destino"
                    variant="outlined"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </Autocomplete>
              </Box>
              <Button variant="contained" color="primary" onClick={calculateRoute} fullWidth>
                Calcular ruta
              </Button>
              {routeInfo && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle1">Información de la ruta:</Typography>
                  <Typography>Distancia: {routeInfo.distance}</Typography>
                  <Typography>Duración: {routeInfo.duration}</Typography>
                  <Typography>Origen: {routeInfo.startLocation.lat.toFixed(6)}, {routeInfo.startLocation.lng.toFixed(6)}</Typography>
                  <Typography>Destino: {routeInfo.endLocation.lat.toFixed(6)}, {routeInfo.endLocation.lng.toFixed(6)}</Typography>
                  <Button 
                  variant="contained" 
                  onClick={saveRoute} 
                  fullWidth 
                  sx={{ mt: 2 }}
                >
                  Guardar ruta
                </Button>
                </Box>
              )}
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ height: '600px' }}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={quito}
                zoom={12}
                onLoad={onMapLoad}
                onClick={onMapClick}
              >
                {directions && <DirectionsRenderer directions={directions} />}
              </GoogleMap>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} variant="filled" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default MapComponent;