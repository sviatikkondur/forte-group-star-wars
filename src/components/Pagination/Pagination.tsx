import { Pagination, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/searchHelper';

type Props = {
  count: number;
};

export const CharactersPagination: React.FC<Props> = ({ count }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pagesCount = Math.ceil(count / 8);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('lg'));

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    const newParams = getSearchWith(
      searchParams, 
      { page: page === 1 ? null : String(page) }
    );
    setSearchParams(newParams);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const value = searchParams.get('page') || '1';

  return (
    <Pagination
      count={pagesCount}
      variant='outlined'
      shape='rounded'
      color='primary'
      size={isSmallScreen ? 'small' : isMobileScreen  ? 'medium' : 'large'}
      onChange={handleChange}
      page={+value}
      sx={{
        display: 'flex',
        // alignSelf: 'flex-end',
        marginTop: '32px',
        "& .MuiPaginationItem-root": {
          border: "1px solid white",
          color: '#fff',
          '&:hover': {
            color: '#000',
            backgroundColor: '#cfcfcf',
          },
        },
        '& .Mui-selected': {
          backgroundColor: '#fff',
          color: '#000',
          '&:hover': {
            backgroundColor: '#fff',
          },
        },
      }}
    />
  );
};
