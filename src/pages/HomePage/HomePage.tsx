import { Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { SideBar } from '../../components/SideBar/SideBar';
import { CharactersList } from '../../components/Characters/CharactersList';

export const HomePage = () => {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Container
      maxWidth={'lg'}
      sx={{
        paddingTop: isSmallScreen ? '30px' : '40px',
        paddingBottom: '40px',
      }}
    >
      <Grid
        container
        height={'100%'}
        // display={'flex'}
      >
        <SearchInput />

        {!isMobileScreen && <SideBar />}

        <CharactersList />
      </Grid>
    </Container>
  );
};
