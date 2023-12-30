import React from 'react';
import { API_OPTIONS } from '../utils/constant'; // Fix the import path
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
            const json = await data.json();

            const filterData = json?.results?.filter((video) => video.type === "Trailer");
            const trailer = filterData?.length ? filterData[0] : json.results[0];

            if (trailer) {
                dispatch(addTrailerVideo(trailer));
            }
        } catch (error) {
            console.error('Error fetching movie videos:', error);
        }
    };

    useEffect(() => {
        getMovieVideos();
    }, [movieId]); // Add movieId to the dependency array

    return null; // You can return something meaningful here if needed
};

export default useMovieTrailer;
