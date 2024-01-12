import { Box, CircularProgress, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { MovieSelect } from './components/MovieSelect';
import { GenderRadio } from './components/GenderRadio';
import { MassInput } from './components/MassInput';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { getMovies } from '../../store/movies/moviesSlice';

export const Filters = () => {
  const dispatch = useAppDispatch();
  const { movies, loading, error, loaded } = useAppSelector((state) => state.moviesSlice);

  useEffect(() => {
    if (!loaded) {
      dispatch(getMovies());
    }
  }, [dispatch, loaded]);

  return (
    <>
      <Typography
        variant={'h4'}
        fontWeight={500}
      >
        Filters
      </Typography>
      <Box
        height={'100%'}
        display={loading ? 'flex' : 'unset'}
        alignItems={'center'}
        justifyContent={'center'}
      >

        {!loading && movies && (
          <>
            <MovieSelect movies={movies}/>
            <GenderRadio />
            <MassInput />
          </>
        )}

        {loading && <CircularProgress size={70} color='warning' />}
      </Box>
    </>
  )
}
