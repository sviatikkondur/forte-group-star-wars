import { Box, Drawer } from '@mui/material'
import React from 'react'
import { Filters } from '../Filters/Filters'
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  isOpen: boolean,
  handleClose: () => void,
}

export const DrawerMenu: React.FC<Props> = ({isOpen, handleClose}) => {
  return (
    <Drawer
      open={isOpen}
      onClose={handleClose}
      PaperProps={{ 
        style: {
          width: '288px',
          padding: '15px',
          backgroundColor: 'black',
          color: 'white',
        } 
      }}
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
        <CloseIcon 
          fontSize='large'
        />
      </Box>
      <Filters handleDrawerClose={handleClose}/>
    </Drawer>
  )
}
