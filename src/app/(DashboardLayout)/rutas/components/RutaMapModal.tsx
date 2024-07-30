import React, { useState, useEffect, useCallback } from 'react';
import { Modal, Box, Typography, Button, CircularProgress } from '@mui/material';
import { GoogleMap, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api';

interface RutaMapModalProps {
  open: boolean;
  onClose: () => void;
  origen: string;
  destino: string;
}

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const RutaMapModal: React.FC<RutaMapModalProps> = ({ open, onClose, origen, destino }) => {
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const [routeInfo, setRouteInfo] = useState<{
    distance: string;
    duration: string;
    startLocation: { lat: number; lng: number };
    endLocation: { lat: number; lng: number };
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "TU_API_KEY_AQUI",
    libraries: ['places'],
  });

  const calculateRoute = useCallback(() => {
    if (!isLoaded) return;

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origen,
        destination: destino,
        travelMode: window.google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        setIsLoading(false);
        if (status === window.google.maps.DirectionsStatus.OK && result) {
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
        } else {
          console.error('Error calculating route:', status);
        }
      }
    );
  }, [isLoaded, origen, destino]);

  useEffect(() => {
    if (open && isLoaded) {
      setIsLoading(true);
      calculateRoute();
    }
  }, [open, isLoaded, calculateRoute]);

  const handleClose = () => {
    setDirections(null);
    setRouteInfo(null);
    setIsLoading(true);
    onClose();
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="ruta-map-modal"
      aria-describedby="ruta-map-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      }}>
        <Typography id="ruta-map-modal" variant="h6" component="h2">
          Información de la Ruta
        </Typography>
        <Typography id="ruta-map-description" sx={{ mt: 2 }}>
          Origen: {origen}
        </Typography>
        <Typography>
          Destino: {destino}
        </Typography>
        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
            <CircularProgress />
          </Box>
        ) : routeInfo && (
          <>
            <Typography>Distancia: {routeInfo.distance}</Typography>
            <Typography>Duración: {routeInfo.duration}</Typography>
            {/* <Typography>Origen (Lat, Lng): {routeInfo.startLocation.lat.toFixed(6)}, {routeInfo.startLocation.lng.toFixed(6)}</Typography>
            <Typography>Destino (Lat, Lng): {routeInfo.endLocation.lat.toFixed(6)}, {routeInfo.endLocation.lng.toFixed(6)}</Typography> */}
          </>
        )}
        <Box sx={{ height: 400, mt: 2 }}>
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={routeInfo?.startLocation || { lat: -0.1807, lng: -78.4678 }}
              zoom={12}
            >
              {directions && <DirectionsRenderer directions={directions} />}
            </GoogleMap>
          )}
        </Box>
        <Button onClick={handleClose} variant="contained" sx={{ mt: 2 }}>Cerrar</Button>
      </Box>
    </Modal>
  );
};

export default RutaMapModal;