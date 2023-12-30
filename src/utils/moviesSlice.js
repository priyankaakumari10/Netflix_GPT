import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movie',
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularmovies:null,
    topratedmovies:null,
    upcomingmovies:null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies:(state,action)=>{
      state.popularmovies=action.payload;
   },
   addTopRatedMovies:(state,action)=>{
      state.topratedmovies=action.payload;
   },
   addUpComingMovies:(state,action)=>{
      state.upcomingmovies=action.payload;
   },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies,addTopRatedMovies,addUpComingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
