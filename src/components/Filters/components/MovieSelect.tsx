import React from 'react';
import { TMovie } from '../../../types/TMovie';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../../utils/searchHelper';

enum MovieValue {
  EMPTY = '',
}

type MovieSelectProps = {
  movies: TMovie[];
};

export const MovieSelect: React.FC<MovieSelectProps> = ({ movies }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const movie: MovieValue =
    (searchParams.get('movie') as MovieValue) || MovieValue.EMPTY;

  const handleSelectChange = (e: SelectChangeEvent<HTMLInputElement>) => {
    const newParams = getSearchWith(searchParams, {
      movie: (e.target.value as string),
      page: null,
    });

    setSearchParams(newParams);
  };

  return (
    <>
      <Typography
        fontSize={23}
        marginTop={2}
      >
        Movie:
      </Typography>
      <FormControl
        fullWidth
        variant='filled'
        sx={{
          backgroundColor: '#606060',
          borderRadius: 3,
          marginTop: 0.5,
        }}
      >
        <InputLabel
          htmlFor='movie-select'
          sx={{
            color: 'white',
            fontSize: '16px',
            '&.Mui-focused': {
              color: 'white',
            },
          }}
        >
          Movie
        </InputLabel>

        <Select
          id='movie-select'
          disableUnderline
          onChange={(e: SelectChangeEvent<HTMLInputElement>) =>
            handleSelectChange(e)
          }
          value={movie}
          sx={{
            '& .MuiInputBase-input': {
              color: 'white',
            },
            '& .MuiInput-underline:before': {
              borderBottomColor: 'white',
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
              borderBottomColor: 'white',
            },
          }}
        >
          {movies.map((movie) => (
            <MenuItem
              key={movie.title}
              value={movie.title}
            >
              {movie.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
