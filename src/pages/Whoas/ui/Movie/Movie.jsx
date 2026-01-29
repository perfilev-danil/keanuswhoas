import "./Movie.css";
import Poster from "../Poster/Poster";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <div className="movie__info">
        <div className="movie__info-part">
          <h1>{movie?.movie}</h1>
          <h2>{movie?.character}</h2>
          <h3>{movie?.director}</h3>
        </div>
        <div className="movie__info-part">
          <time dateTime={movie?.release_date}>
            Release date: {movie?.release_date}
          </time>
          <span>Total whoas in movie: {movie?.total_whoas_in_movie}</span>
        </div>
      </div>
      {movie && <Poster movie={movie} />}
    </div>
  );
};

export default Movie;
