import { useState, useEffect } from 'react';

export default function useMovieDetails(movieId) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const handleFetchMovieDetails = async () => {
      const result = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=effc234025ec1a7e1ddc9bd4d8ffb3e0&language=en-US&append_to_response=credits`,
      );

      if (result.ok) {
        const moviesResponse = await result.json();
        const formattedMoviesResponse = prepareMovieData(moviesResponse);
        setMovie(formattedMoviesResponse);
      }
    };

    handleFetchMovieDetails();
  }, [movieId]);

  return [movie];
}

function prepareMovieData(movieData) {
  const { backdrop_path, title, overview } = movieData;
  const genres =
    movieData.genres && movieData.genres.length > 0
      ? movieData.genres.map((item) => item.name)
      : [];
  const cast =
    movieData.credits && movieData.credits.cast.length > 0
      ? movieData.credits.cast.map((item) => {
          return { id: item.id, character: item.character, name: item.name }; //todo: merge items with same id
        })
      : [];
  const crew =
    movieData.credits && movieData.credits.crew.length > 0
      ? movieData.credits.crew.map((item) => {
          return { id: item.id, job: item.job, name: item.name }; //todo: merge items with same id
        })
      : [];
  const release_year =
    movieData.release_date !== ''
      ? new Date(movieData.release_date).getFullYear()
      : '';
  const release_date =
    movieData.release_date !== ''
      ? formatDateString(movieData.release_date)
      : '';
  const runtime = formatDurationInHoursAndMinutes(movieData.runtime);
  return {
    backdrop_path,
    title,
    overview,
    genres,
    cast,
    crew,
    release_date,
    release_year,
    runtime,
  };
}

function formatDateString(dateString) {
  let dateStringSplitted = dateString.split('-');
  return `${dateStringSplitted[2]}/${dateStringSplitted[1]}/${dateStringSplitted[0]}`;
}

function formatDurationInHoursAndMinutes(durationInMinutes) {
  let durationString = '';
  let hours = Math.floor(durationInMinutes / 60);
  if (hours > 0) {
    durationString = durationString + `${hours}h `;
  }

  let minutes = durationInMinutes % 60;
  if (minutes > 0) {
    durationString = durationString + `${minutes}m`;
  }
  return durationString;
}
