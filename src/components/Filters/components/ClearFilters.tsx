import Button from '@mui/material/Button';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../../utils/searchHelper';
import React from 'react';

type Props = {
  handleDrawerClose?: () => void;
};

const buttonStyles = {
  marginTop: 4,
  backgroundColor: '#606060',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#737272',
  },
};

export const ClearFilters: React.FC<Props> = ({ handleDrawerClose }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClearFilters = () => {
    const newParams = getSearchWith(searchParams, {
      query: null,
      movie: null,
      gender: null,
      min: null,
      max: null,
    });

    setSearchParams(newParams);

    if (handleDrawerClose) {
      handleDrawerClose();
    }
  };

  return (
    <Button
      fullWidth
      variant='contained'
      size='large'
      sx={buttonStyles}
      onClick={handleClearFilters}
    >
      Clear Filters
    </Button>
  );
};
