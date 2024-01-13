import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../../utils/searchHelper';
import { TextField } from '@mui/material';

type Props = {
  placeholder: string;
  type: 'min' | 'max';
};

export const NumberInputBasic: React.FC<Props> = ({ placeholder, type }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get(type === 'min' ? 'min' : 'max');

  const handleChange = (val: number | undefined) => {
    if (val !== undefined) {
      const newParams =
        type === 'min'
          ? getSearchWith(searchParams, { min: String(val), page: null })
          : getSearchWith(searchParams, { max: String(val), page: null });

      setSearchParams(newParams);
    }
  };

  return (
    <TextField
      fullWidth
      type='number'
      placeholder={placeholder}
      value={value ? +value : ''}
      onChange={(event) => handleChange(Number(event.target.value))}
      inputProps={{ 
        min: 0,
        style: {color: 'white'},
      }}
      sx={{
        backgroundColor: '#606060',
        borderRadius: 3,
        color: '#fff',
        '& .MuiOutlinedInput-root': {
          '&:hover fieldset': {
            borderColor: 'white',
            borderRadius: 3,
            color: '#fff'
          },
          '&.Mui-focused fieldset': {
            borderColor: '#fff',
            borderRadius: 3,
          },
        },
      }}
    />
  );
};
