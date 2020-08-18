import { useState, useEffect } from 'react';
import { API_KEY } from '../tmdb-apikey';

export default function useMoviesList() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [endpoint, setEndpoint] = useState('/movie/popular');
  const [query, setQuery] = useState(null);

  const fetchMoreMovies = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const refreshMovies = () => {
    setMovies([]);
    setPage(1);
    setIsRefreshing(true);
  };

  const clearMovies = () => {
    setMovies([]);
    setPage(1);
  };

  useEffect(() => {
    let url = `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US`;
    if (query && query !== '') {
      url += `&query=${query}`;
    }
    url += `&page=${page}`;

    const handleFetchMovies = async () => {
      // console.log('handleFetchMovies', endpoint, query, page);
      setIsLoading(true);
      const result = await fetch(url);
      setIsLoading(false);

      if (result.ok) {
        const moviesResponse = await result.json();
        if (page === 1) {
          setMovies(moviesResponse.results);
          setTotalPages(moviesResponse.total_pages);
        }

        if (page > 1) {
          //first element of next pages is the same as last element of previous page
          //remove first from response to prevent duplicates
          moviesResponse.results.shift();
          setMovies((prevMovie) => [...prevMovie, ...moviesResponse.results]);
        }
      }
      setIsRefreshing(false);
    };

    try {
      if (endpoint && endpoint !== '') {
        handleFetchMovies();
      }
    } catch (e) {
      console.log('error in calll', e);
    }
  }, [endpoint, query, page]);

  return [
    movies,
    fetchMoreMovies,
    refreshMovies,
    isRefreshing,
    isLoading,
    setEndpoint,
    setQuery,
    clearMovies,
  ];
}
