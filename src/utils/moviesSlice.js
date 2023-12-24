import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const moviesSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
    },
});

export const { addNowPlayingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
