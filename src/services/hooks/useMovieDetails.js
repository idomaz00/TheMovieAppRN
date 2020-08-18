import { useState, useEffect } from 'react';
import { API_KEY } from '../tmdb-apikey';
import { prepareMovieData } from '../utils';

export default function useMovieDetails(movieId) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleFetchMovieDetails = async () => {
      setIsLoading(true);
      const result = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=credits`,
      );
      setIsLoading(false);

      if (result.ok) {
        const moviesResponse = await result.json();
        const formattedMoviesResponse = prepareMovieData(moviesResponse);
        setMovie(formattedMoviesResponse);
      }
    };

    handleFetchMovieDetails();
  }, [movieId]);

  return [movie, isLoading];
}
