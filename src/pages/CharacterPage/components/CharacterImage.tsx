import { Box, Grid } from '@mui/material';
import React from 'react';

type Props = {
  imgSrc: string;
  isSmallScreen: boolean;
  isMediumScreen: boolean;
};

export const CharacterImage: React.FC<Props> = ({
  imgSrc,
  isSmallScreen,
  isMediumScreen,
}) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={5}
      display={'flex'}
      justifyContent={'center'}
    >
      <Box
        component={'img'}
        src={imgSrc}
        alt=''
        sx={{
          width: isSmallScreen ? '100%' : isMediumScreen ? '50%' : '100%',
          borderRadius: 3,
          objectFit: 'contain'
        }}
        height={'100%'}
      />
    </Grid>
  );
};
