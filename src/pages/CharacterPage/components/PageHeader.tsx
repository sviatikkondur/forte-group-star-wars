import React from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

type Props = {
  name: string;
  isSmallScreen: boolean;
};

export const PageHeader: React.FC<Props> = ({ name, isSmallScreen }) => {
  const navigate = useNavigate();

  return (
    <Grid
      item
      xs={12}
      height={'fit-content'}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      marginBottom={isSmallScreen ? 2 : 4}
    >
      <IconButton
        sx={{ width: '35px' }}
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon
          htmlColor='#fff'
          fontSize={isSmallScreen ? 'medium' : 'large'}
        />
      </IconButton>

      <Typography
        variant={isSmallScreen ? 'h6' : 'h4'}
        fontWeight={700}
      >
        {name}
      </Typography>

      <Box sx={{ width: isSmallScreen ? '25px' : '35px' }} />
    </Grid>
  );
};
