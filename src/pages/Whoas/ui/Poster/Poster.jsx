import "./Poster.css";
import { useState } from "react";
import Loader from "../../../../shared/ui/Loader/Loader";

const Poster = ({ movie }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <article className="poster">
      <div className="poster__img-wrapper">
        {!isLoaded && <Loader />}

        <img
          className={`poster__img ${isLoaded ? "poster__img--visible" : ""}`}
          src={movie.poster}
          alt={movie.movie}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </article>
  );
};

export default Poster;
