import React, { useEffect, useState } from 'react';
import {
  CircularProgress,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { StarWarsCharacter } from '../../types/TCharacter';
import { getCharacter } from '../../api/character';
import { PageHeader } from './components/PageHeader';
import { CharacterImage } from './components/CharacterImage';
import { PersonalInfo } from './components/PersonalInfo';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { getMovies } from '../../store/movies/moviesSlice';
import { getStarshipTitles } from '../../utils/getStarshipsNames';
import { ErrorModal } from '../../components/ErrorModal/ErrorModal';
import { getSpeciesNames } from '../../utils/getSpecies';

export const CharacterPage = () => {
  const [character, setCharacter] = useState<StarWarsCharacter | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [starships, setStarships] = useState<string[]>([]);
  const [species, setSpecies] = useState<string[]>([]);
  const [isInfoLoading, setIsInfoLoading] = useState(true);
  const { movies, error, loaded } = useAppSelector(
    (state) => state.moviesSlice
  );
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const theme = useTheme();

  const imgSrc = `https://storage.googleapis.com/starwars-images/people/${id}.jpg`;

  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const getMoviesTitle = () => {
    if (movies && character) {
      return character.films.map(
        (movieUrl) =>
          movies.find((movie) => movie.url === movieUrl)?.title ||
          'Unknown Title'
      );
    }
  };

  const movieTitles = getMoviesTitle();

  useEffect(() => {
    const loadCharacter = async () => {
      try {
        if (id) {
          const characterResponse = await getCharacter(id);
          setCharacter(characterResponse);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    const loadInfo = async () => {
      try {
        if (character) {
          const starshipsResponse = await getStarshipTitles(
            character.starships
          );
          const speciesResponse = await getSpeciesNames(character.species);

          setStarships(starshipsResponse);
          setSpecies(speciesResponse);
        }
      } catch (err) {
        setIsError(true);
      } finally {
        setIsInfoLoading(false);
      }
    };

    if (!loaded) {
      dispatch(getMovies());
    }

    if (!character) {
      loadCharacter();
    }

    loadInfo();
  }, [id, loaded, dispatch, character]);

  const isPageLoaded =
    !isLoading &&
    !isInfoLoading &&
    character &&
    movieTitles &&
    !error &&
    !isError;

  return (
    <Container
      maxWidth={'lg'}
      sx={{
        paddingTop: '40px',
        paddingBottom: '40px',
      }}
    >
      <Grid
        container
        height={'100%'}
        sx={{
          backgroundColor: '#000',
          border: '1px solid #1c1c1c',
          borderRadius: 2,
          padding: '30px',
        }}
      >
        {isPageLoaded && (
          <>
            <PageHeader
              name={character.name}
              isSmallScreen={isSmallScreen}
            />

            <Grid
              container
              height={'100%'}
              display={'flex'}
              alignItems={'flex-start'}
              alignContent={'flex-start'}
            >
              <CharacterImage
                imgSrc={imgSrc}
                isSmallScreen={isSmallScreen}
                isMediumScreen={isMediumScreen}
              />

              <PersonalInfo
                character={character}
                isMediumScreen={isMediumScreen}
                isSmallScreen={isSmallScreen}
                movies={movieTitles}
                starships={starships}
                species={species}
              />
            </Grid>
          </>
        )}

        {!isPageLoaded && (
          <CircularProgress
            size={100}
            sx={{ alignSelf: 'center', margin: '0 auto', color: '#fff' }}
          />
        )}
      </Grid>

      {(error || isError) && <ErrorModal />}
    </Container>
  );
};
