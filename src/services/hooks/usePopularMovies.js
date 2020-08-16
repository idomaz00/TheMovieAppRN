import { useState, useEffect } from 'react';

export default function usePopularMovies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchMoreMovies = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const refreshMovies = () => {
    setPage(1);
    setIsRefreshing(true);
  };

  useEffect(() => {
    const handleFetchMovies = async () => {
      // const apiUrl = setUrlForEndpoint({ endpoint: '/movie/popular', page });
      const result = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=effc234025ec1a7e1ddc9bd4d8ffb3e0&language=en-US&page=${page}`,
      );

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

    handleFetchMovies();
  }, [page]);

  return [movies, fetchMoreMovies, refreshMovies, isRefreshing];
}
