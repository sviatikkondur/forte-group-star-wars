import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { StarWarsCharacter, StarWarsCharacterList } from '../../types/TCharacter';

const CHARACTERS_API = 'https://swapi.dev/api/people';

export const getAllStarwarsPeople = createAsyncThunk(
  'characters/getAllStarwarsPeople',
  async (_, thunkApi) => {
    try {
      const firstPageResponse = await axios.get<StarWarsCharacterList>(CHARACTERS_API);
      const people = firstPageResponse.data.results;

      const count = firstPageResponse.data.count;
      const numberOfPagesLeft = Math.ceil((count - 1) / 10);
      let promises: Promise<any>[] = [];

      for (let i = 2; i <= numberOfPagesLeft; i++) {
        promises.push(axios.get(`https://swapi.dev/api/people?page=${i}`));
      }

      const responses = await Promise.all(promises);
      const allPeople = responses.reduce((acc, data) => [...acc, ...data.data.results], people);

      return allPeople;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

interface CharactersState {
  loading: boolean;
  loaded: boolean;
  error: null | string;
  characters: null | StarWarsCharacter[];
}

const initialState: CharactersState = {
  loading: true,
  loaded: false,
  error: null,
  characters: null,
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllStarwarsPeople.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllStarwarsPeople.fulfilled, (state, action: PayloadAction<StarWarsCharacter[]>) => {
        state.loading = false;
        state.loaded = true;
        state.characters = action.payload;
      })
      .addCase(getAllStarwarsPeople.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default charactersSlice.reducer;
