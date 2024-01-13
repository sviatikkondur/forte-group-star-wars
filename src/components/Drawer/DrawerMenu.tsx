import { Box, Drawer } from '@mui/material'
import React from 'react'
import { Filters } from '../Filters/Filters'
import CloseIcon from '@mui/icons-material/Close';

const ICON_SIZE = 'large';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

export const DrawerMenu: React.FC<Props> = ({ isOpen, handleClose }) => {
  const drawerPaperStyles = {
    width: '288px',
    padding: '15px',
    backgroundColor: 'black',
    color: 'white',
  };

  return (
    <Drawer
      open={isOpen}
      onClose={handleClose}
      PaperProps={{ style: drawerPaperStyles }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 14,
          right: 10,
          cursor: 'pointer',
        }}
        onClick={handleClose}
      >
        <CloseIcon fontSize={ICON_SIZE} />
      </Box>
      <Filters handleDrawerClose={handleClose} />
    </Drawer>
  );
};