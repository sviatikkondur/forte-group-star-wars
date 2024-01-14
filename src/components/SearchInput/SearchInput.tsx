import {
  FormControl,
  Grid,
  InputAdornment,
  TextField
} from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/searchHelper';
import { useScreenSize } from '../../hooks/useScreenSize';

export const SearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showClearIcon, setShowClearIcon] = useState('none');

  const query = searchParams.get('query') || '';

  const { isSmallScreen } = useScreenSize();

  const handleClick = (): void => {
    const newParams = getSearchWith(searchParams, { query: null });

    setSearchParams(newParams);

    setShowClearIcon('none');
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowClearIcon(e.target.value === '' ? 'none' : 'flex');

    const newParams = getSearchWith(searchParams, {
      query: e.target.value || null,
    });

    setSearchParams(newParams);
  };

  return (
    <Grid
      item
      xs={12}
      marginBottom={3}
    >
      <FormControl
        fullWidth
        sx={{
          margin: 0,
        }}
      >
        <TextField
          size={isSmallScreen ? 'small' : 'medium'}
          variant='outlined'
          value={query}
          onChange={handleQueryChange}
          placeholder='Search a character'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon htmlColor='white' />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position='end'
                style={{ display: showClearIcon }}
                onClick={handleClick}
              >
                <ClearIcon
                  htmlColor='white'
                  sx={{ cursor: 'pointer' }}
                />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiInputBase-root': {
              backgroundColor: '#606060',
              opacity: 1,
              color: 'white',
            },
          }}
        />
      </FormControl>
    </Grid>
  );
};
