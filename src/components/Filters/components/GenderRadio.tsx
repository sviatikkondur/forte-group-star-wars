import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React, { ChangeEvent } from 'react';
import { getSearchWith } from '../../../utils/searchHelper';
import { useSearchParams } from 'react-router-dom';

enum Gender {
  ALL = 'all',
  MALE = 'male',
  FEMALE = 'female',
}

type GenderRadioProps = {};

export const GenderRadio: React.FC<GenderRadioProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get('gender') || Gender.ALL;

  const handleGenderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newGender = e.target.value as Gender;
    const newParams = getSearchWith(searchParams, {
      gender: newGender === Gender.ALL ? null : newGender,
      page: null,
    });

    setSearchParams(newParams);
  };

  return (
    <FormControl sx={{ marginTop: 1.5 }}>
      <FormLabel
        id='demo-radio-buttons-group-label'
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
        aria-labelledby='gender-radio-buttons-group-label'
        value={value}
        name='radio-buttons-group'
        onChange={handleGenderChange}
      >
        {Object.values(Gender).map((genderOption) => (
          <FormControlLabel
            key={genderOption}
            value={genderOption}
            control={
              <Radio
                sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }}
              />
            }
            label={genderOption.charAt(0).toUpperCase() + genderOption.slice(1)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
