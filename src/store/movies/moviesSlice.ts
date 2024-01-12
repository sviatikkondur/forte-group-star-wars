import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { MoviesResponse, TMovie } from "../../types/TMovie";

const MOVIES_API = 'https://swapi.dev/api/films';

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (data, thunkApi) => {
    try {
      const response = await axios.get<MoviesResponse>(MOVIES_API);
      return response.data.results;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

interface MoviesState {
  loading: boolean;
  error: null | string;
  movies: null | TMovie[];
  loaded: boolean;
}

const initialState: MoviesState = {
  loading: false,
  error: null,
  movies: null,
  loaded: false,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMovies.fulfilled, (state, action: PayloadAction<TMovie[]>) => {
        state.loading = false;
        state.movies = action.payload;
        state.loaded = true;
      })
      .addCase(getMovies.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default moviesSlice.reducer;
