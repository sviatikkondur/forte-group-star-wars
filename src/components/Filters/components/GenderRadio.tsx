import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { ChangeEvent } from 'react'
import { getSearchWith } from '../../../utils/searchHelper';
import { useSearchParams } from 'react-router-dom';

export const GenderRadio = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get('gender') || 'all';

  const handleGenderChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === 'all') {
      const newParams = getSearchWith(
        searchParams, { gender: null, page: null },
      );
  
      setSearchParams(newParams);
    } else {
      const newParams = getSearchWith(
        searchParams, { gender: e.target.value, page: null },
      );
  
      setSearchParams(newParams);
    }
  }

  return (
    <FormControl 
      sx={{
        marginTop: 1.5
      }}
    >
      <FormLabel 
        id="demo-radio-buttons-group-label" 
        sx={{
          color: 'white', 
          fontSize: 23, 
          marginBottom: 0.3,
          '&.Mui-focused': {
            color: 'white',
          },
        }}
      >
        Gender:
      </FormLabel>

      <RadioGroup
        aria-labelledby="gender-radio-buttons-group-label"
        value={value}
        name="radio-buttons-group"
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleGenderChange(e)}
      >
        <FormControlLabel 
          value="all" 
          control={<Radio sx={{
            color: 'white',
            '&.Mui-checked': {
              color: 'white',
            },
          }} />} 
          label="All" 
        />
        <FormControlLabel 
          value="male" 
          control={<Radio sx={{
            color: 'white',
            '&.Mui-checked': {
              color: 'white',
            },
          }} />} 
          label="Male" 
        />
        <FormControlLabel 
          value="female" 
          control={<Radio sx={{
            color: 'white',
            '&.Mui-checked': {
              color: 'white',
            },
          }} />} 
          label="Female" 
        />
      </RadioGroup>
    </FormControl>
  )
}
