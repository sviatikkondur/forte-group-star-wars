import React from 'react'
import { StarWarsCharacter } from '../../../types/TCharacter'
import { Box, Grid, Typography } from '@mui/material'

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
      }}
    >
      <Box
        component='img'
        src={imgSrc}
        alt={`${character.name} image`}
        width={'100%'}
        borderRadius={'5px 5px 0 0'}
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

        <Typography>
          Gender: {character.gender}
        </Typography>

        <Typography>
          Mass: {character.mass} kg
        </Typography>
      </Box>
      
    </Grid>
  )
}
