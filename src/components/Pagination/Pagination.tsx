import { styled, useTheme } from '@mui/system';
import Pagination from '@mui/material/Pagination';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/searchHelper';
import { useMediaQuery } from '@mui/material';

type Props = {
  count: number;
};

const StyledPagination = styled(Pagination)(({ theme }) => ({
  display: 'flex',
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
    backgroundColor: '#fff !important;',
    color: '#000 !important;',
    '&:hover': {
      backgroundColor: '#fff',
    },
  },
}));

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
    <StyledPagination
      count={pagesCount}
      variant='outlined'
      shape='rounded'
      color='primary'
      size={isSmallScreen ? 'small' : isMobileScreen ? 'medium' : 'large'}
      onChange={handleChange}
      page={+value}
    />
  );
};
