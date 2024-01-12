import React from 'react'
import { StarWarsCharacter } from '../../../types/TCharacter'
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'

type Props = {
  character: StarWarsCharacter
}

function extractIdFromUrl(url: string): number | null {
  const matches = url.match(/\/(\d+)\/$/);
  if (matches && matches.length === 2) {
    return parseInt(matches[1], 10);
  }
  return null;
}

export const CharacterCard: React.FC<Props> = ({ character }) => {
  const theme = useTheme();

  const isMobileScreen = useMediaQuery(theme.breakpoints.down('lg'));

  const id = extractIdFromUrl(character.url);
  const imgSrc = `https://storage.googleapis.com/starwars-images/people/${id}.jpg`

  return (
    <Grid 
      item
      xs={12}
      sm={5} 
      lg={2.6}
      sx={{
        backgroundColor: '#424242',
        borderRadius: 5,
        height: 'fit-content'
      }}
    >
      <Box
        component='img'
        src={imgSrc}
        alt={`${character.name} image`}
        width={'100%'}
        height={isMobileScreen ? '' : '190px'}
        borderRadius={'5px 5px 0 0'}
        sx={{
          objectFit: 'cover',
        }}
      />
      <br />
      
      <Box
        padding={'0 10px 10px'}
        marginTop={1}
      >
        <Typography 
          noWrap
          title={character.name}
        >
          Name: {character.name}
        </Typography>

        <Typography
          noWrap
          title={character.gender}
        >
          Gender: {character.gender}
        </Typography>

        <Typography>
          Mass: {character.mass} kg
        </Typography>
      </Box>
      
    </Grid>
  )
}
