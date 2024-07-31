import { Modal, Box, Typography, Button } from '@mui/material';

interface ConfirmDeleteModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmDeleteModal = ({ open, onClose, onConfirm }: ConfirmDeleteModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="confirm-delete-modal"
      aria-describedby="modal-modal-description"
    >
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
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Confirmar eliminación
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          ¿Estás seguro de que deseas eliminar este registro?
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={onClose} sx={{ mr: 1 }}>Cancelar</Button>
          <Button onClick={onConfirm} variant="contained" color="error">Eliminar</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmDeleteModal;