import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { getAllStarwarsPeople } from '../../store/characters/charactersSlice';
import {
  Box,
  CircularProgress,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { CharacterCard } from './components/CharacterCard';
import { CharactersPagination } from '../Pagination/Pagination';

export const CharactersList = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const isMobileScreen = useMediaQuery(theme.breakpoints.down('lg'));

  const { characters, error, loading, loaded } = useAppSelector(
    (state) => state.charactersSlice
  );

  useEffect(() => {
    if (!loaded) {
      dispatch(getAllStarwarsPeople());
    }
  }, [loaded, dispatch]);

  console.log({ characters, error, loading, loaded });

  return (
    <Grid
      item
      sm={12}
      lg={9}
      paddingLeft={isMobileScreen ? 0 : 5}
      height={isMobileScreen ? 'fit-content' : '92%'}
      width={'100%'}
    >
      {loading && (
        <Box
          width={'100%'}
          height={isMobileScreen ? '55vh' : '100%'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{
            backgroundColor: 'black',
            border: '1px solid #1c1c1c',
          }}
        >
          <CircularProgress
            size={100}
            style={{ color: '#fff' }}
          />
        </Box>
      )}
      {!loading && characters && (
        <Box
          width={'100%'}
          height={'100%'}
          padding={'15px 15px 40px'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
          alignItems={'center'}
          sx={{
            backgroundColor: 'black',
            border: '1px solid #1c1c1c',
            borderRadius: 2,
            boxSizing: 'border-box',
          }}
        >
          <Typography
            variant={'h4'}
            fontWeight={700}
            textAlign='center'
          >
            Star Wars Characters
          </Typography>

          <Grid
            container
            display={'flex'}
            justifyContent={'center'}
            width={'100%'}
            gap={3}
            marginTop={3}
          >
            {characters.slice(0, 8).map((character) => (
              <CharacterCard
                key={character.name}
                character={character}
              />
            ))}
          </Grid>

          <CharactersPagination count={82} />
        </Box>
      )}
    </Grid>
  );
};
