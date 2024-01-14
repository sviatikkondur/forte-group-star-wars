import { Container, Grid } from '@mui/material';
import React from 'react';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { SideBar } from '../../components/SideBar/SideBar';
import { CharactersList } from '../../components/Characters/CharactersList';
import { useScreenSize } from '../../hooks/useScreenSize';

export const HomePage = () => {
  const { isMobileScreen } = useScreenSize();

  return (
    <Container
      maxWidth={'lg'}
      sx={{
        paddingTop: '20px',
        paddingBottom: '40px',
      }}
    >
      <Grid
        container
        height={'100%'}
      >
        <SearchInput />

        {!isMobileScreen && <SideBar />}

        <CharactersList />
      </Grid>
    </Container>
  );
};
