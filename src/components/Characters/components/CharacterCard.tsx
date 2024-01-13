import React from 'react';
import { StarWarsCharacter } from '../../../types/TCharacter';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import swordAudio from '../../../static/audio/sword.wav';

type Props = {
  character: StarWarsCharacter;
};

function extractIdFromUrl(url: string): number | null {
  const matches = url.match(/\/(\d+)\/$/);
  if (matches && matches.length === 2) {
    return parseInt(matches[1], 10);
  }
  return null;
}

const playAudio = () => {
  new Audio(swordAudio).play();
};

export const CharacterCard: React.FC<Props> = ({ character }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const isMobileScreen = useMediaQuery(theme.breakpoints.down('lg'));

  const id = extractIdFromUrl(character.url);
  const imgSrc = `https://storage.googleapis.com/starwars-images/people/${id}.jpg`;

  return (
    <Grid
      item
      xs={12}
      sm={5}
      lg={2.6}
      sx={{
        boxSizing: 'border-box',
        backgroundColor: '#424242',
        borderRadius: '5px 5px 20px 20px',
        border: '2px solid #424242',
        height: 'fit-content',
        cursor: 'pointer',
        '&:hover': {
          border: '2px solid #ffffff',
        },
      }}
      onClick={() => {
        navigate(`/characters/${id}`);
        playAudio();
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
          Mass:{' '}
          {character.mass === 'unknown'
            ? character.mass
            : `${character.mass} kg`
          }
        </Typography>
      </Box>
    </Grid>
  );
};
