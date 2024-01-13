import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, styled } from '@mui/material';

const StyledDialog = styled(Dialog)({
  '& .MuiDialog-paper': {
    width: '300px',
  },
});

const StyledDialogContent = styled(DialogContent)({
  textAlign: 'center',
});

export const ErrorModal = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <StyledDialog open>
      <DialogTitle>Error</DialogTitle>
      <StyledDialogContent>
        <p>Something went wrong</p>
      </StyledDialogContent>
      <DialogActions>
        <Button 
          onClick={handleReload} 
          variant="contained" 
          sx={{backgroundColor: '#606060'}}
        >
          Reload
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};