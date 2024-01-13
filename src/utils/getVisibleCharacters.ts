import { StarWarsCharacter } from "../types/TCharacter";

type FType = (input: { 
  characters: StarWarsCharacter[] | null,
  query: string | null, 
  movieUrl: string | undefined, 
  gender: string | null, 
  minMass: string | null, 
  maxMass: string | null, 
  page: string,
}) => { visibleCharacters: StarWarsCharacter[]; count: number };

export const getVisibleCharacters: FType = ({
  characters,
  query, 
  movieUrl, 
  gender, 
  minMass, 
  maxMass, 
  page,
}) => {
  if (characters) {
    let filteredCharacters = characters.filter((character) => {
      return (
        (query ? character.name.toLowerCase().includes(query.toLowerCase()) : true) &&
        (movieUrl
          ? character.films.includes(movieUrl)
          : true) &&
        (gender ? character.gender === gender : true) &&
        (minMass
          ? parseFloat(character.mass.replace(/,/g, '')) >= parseFloat(minMass)
          : true) &&
        (maxMass ? parseFloat(character.mass.replace(/,/g, '')) <= parseFloat(maxMass) : true)
      );
    });

    const count = filteredCharacters.length;
    const charactersPerPage = 8;

    const indexOfLastCharacter = +page * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const visibleCharacters = filteredCharacters.slice(
      indexOfFirstCharacter,
      indexOfLastCharacter
    );

    return {
      visibleCharacters,
      count,
    };
  }

  return {
    visibleCharacters: [],
    count: 0,
  };
};
