import React from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { rem } from '@/styles/mixins';

export interface ModalBaseProps {
  open: boolean;
  onClose?: () => void;
  children: React.ReactElement;
}

export default function ModalBase({
  open,
  onClose,
  children,
}: ModalBaseProps) {
  return (
    <Modal
      className='o-modalBase'
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}
    > 
      <Box
        sx={{position: 'relative', width: 'auto', mx: 'auto'}}
      >
        {children}

        <Button sx={{position: 'absolute', top: 0, right: 0, minWidth: 0}} onClick={onClose}>
          <CloseIcon sx={{color: 'text.primary'}} />
        </Button>
      </Box>
  </Modal>
  )
};
