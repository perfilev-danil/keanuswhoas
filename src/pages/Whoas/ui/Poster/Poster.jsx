import "./Poster.css";

const Poster = ({ movie }) => {
  return (
    <article className="poster">
      <div className="poster__image-wrapper">
        <img className="poster__image" src={movie.poster} alt={movie.movie} />
      </div>
    </article>
  );
};

export default Poster;
