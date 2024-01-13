import React from 'react';
import { StarWarsCharacter } from '../../../types/TCharacter';
import { Grid, Typography } from '@mui/material';

type Props = {
  character: StarWarsCharacter;
  isMediumScreen: boolean;
  isSmallScreen: boolean;
  movies: string[] | undefined;
  starships: string[] | undefined;
  species: string[] | undefined;
};

export const PersonalInfo: React.FC<Props> = ({
  isMediumScreen,
  movies,
  starships,
  isSmallScreen,
  species,
}) => {
  const speciesTitle =
    species && species.length > 0 ? species : 'No information';
  const movieList =
    movies && movies.length > 0 ? movies.join(', ') : 'No information';
  const starshipList =
    starships && starships.length > 0 ? starships.join(', ') : 'No information';

  return (
    <Grid
      item
      sm={5}
      md={7}
      paddingLeft={isMediumScreen ? 0 : 4}
    >
      <Typography
        variant='h5'
        fontWeight={600}
        marginBottom={2}
        marginTop={isSmallScreen ? 2 : 0}
      >
        Personal Info:
      </Typography>

      <Typography variant='body1'>{`Species - [${speciesTitle}]`}</Typography>
      <Typography
        variant='body1'
        marginTop={1}
      >
        {`Movies - [${movieList}]`}
      </Typography>
      <Typography
        variant='body1'
        marginTop={1}
      >
        {`Starships - [${starshipList}]`}
      </Typography>
    </Grid>
  );
};
