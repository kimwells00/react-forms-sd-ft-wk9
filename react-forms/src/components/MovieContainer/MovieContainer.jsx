/* eslint-disable react/prop-types */
import MovieCards from "../MovieCards/MovieCards";

export default function MovieContainer({
  moviePosterFirst,
  moviePosterSecond,
  moviePosterThird,
  movies,
}) {
  const movieList = Array.isArray(movies) ? movies : [movies];
  return (
    <div>
      <MovieCards moviePosterFirst={moviePosterFirst} />
      <MovieCards moviePosterFirst={moviePosterSecond} />
      <MovieCards moviePosterFirst={moviePosterThird} />
      {movieList.map((movies, index) => (
        <MovieCards key={index} movies={movies} />
      ))}
    </div>
  );
}
