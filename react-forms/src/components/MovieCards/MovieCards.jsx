/* eslint-disable react/prop-types */

export default function MovieCards({
  moviePosterFirst,
  moviePosterSecond,
  moviePosterThird,
}) {
  return (
    <div className="movieCard">
      <h2>{moviePosterFirst.Title}</h2>
      <h3>{moviePosterFirst.Actors}</h3>
      <p>{moviePosterFirst.Plot}</p>
      <div className="posterContainerOne">
        <img src={moviePosterFirst?.Poster} alt="" />
      </div>
      <div className="posterContainer">
        <img src={moviePosterSecond?.Poster} alt="" />
      </div>
      <div className="posterContainer">
        <img src={moviePosterThird?.Poster} alt="" />
      </div>
    </div>
  );
}
