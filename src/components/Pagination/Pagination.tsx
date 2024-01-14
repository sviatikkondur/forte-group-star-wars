import { styled } from '@mui/system';
import Pagination from '@mui/material/Pagination';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/searchHelper';
import { useScreenSize } from '../../hooks/useScreenSize';

type Props = {
  count: number;
};

const ITEMS_PER_PAGE = 8;
const PAGE_SIZE = 1;

const StyledPagination = styled(Pagination)(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(4),
  '& .MuiPaginationItem-root': {
    border: `1px solid ${theme.palette.common.white}`,
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.common.black,
      backgroundColor: theme.palette.grey[300],
    },
  },
  '& .Mui-selected': {
    backgroundColor: `${theme.palette.common.white} !important`,
    color: `${theme.palette.common.black} !important`,
    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
  },
}));

export const CharactersPagination: React.FC<Props> = ({ count }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isSmallScreen, isMobileScreen } = useScreenSize();

  const pagesCount = Math.ceil(count / ITEMS_PER_PAGE);

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    const newParams = getSearchWith(searchParams, {
      page: page === PAGE_SIZE ? null : String(page),
    });
    setSearchParams(newParams);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const value = searchParams.get('page') || String(PAGE_SIZE);

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
