import React, { useCallback, useEffect } from 'react';
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
import { useSearchParams } from 'react-router-dom';
import { getVisibleCharacters } from '../../utils/getVisibleCharacters';
import { ErrorModal } from '../ErrorModal/ErrorModal';

export const CharactersList = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const { characters, error, loading, loaded } = useAppSelector(
    (state) => state.charactersSlice
  );

  const { movies } = useAppSelector((state) => state.moviesSlice);

  const getMovieUrl = useCallback(
    (title: string) => {
      if (movies) {
        const movie = movies.find((m) => m.title === title);

        return movie ? movie.url : '';
      }
    },
    [movies]
  );

  const query = searchParams.get('query') || '';
  const movie = searchParams.get('movie');
  const gender = searchParams.get('gender');
  const minMass = searchParams.get('min');
  const maxMass = searchParams.get('max');
  const page = searchParams.get('page') || '1';

  const isMobileScreen = useMediaQuery(theme.breakpoints.down('lg'));

  useEffect(() => {
    if (!loaded) {
      dispatch(getAllStarwarsPeople());
    }
  }, [loaded, dispatch]);

  const { visibleCharacters, count } = getVisibleCharacters({
    characters,
    gender,
    maxMass,
    minMass,
    movieUrl: getMovieUrl(movie as string),
    page,
    query,
  });

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
            justifyContent={
              visibleCharacters.length === 8 ? 'center' : 'flex-start'
            }
            width={'100%'}
            height={'100%'}
            gap={3}
            marginTop={3}
          >
            {visibleCharacters.map((character) => (
              <CharacterCard
                key={character.name}
                character={character}
              />
            ))}

            {visibleCharacters.length === 0 && !loading && (
              <Typography
                width={'100%'}
                textAlign={'center'}
                alignSelf={'center'}
                variant={'h5'}
              >
                Character not found!
              </Typography>
            )}
          </Grid>

          {visibleCharacters.length > 0 && (
            <CharactersPagination count={count} />
          )}
        </Box>
      )}

      {error && <ErrorModal />}
    </Grid>
  );
};
