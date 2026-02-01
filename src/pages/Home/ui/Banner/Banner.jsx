import "./Banner.css";
import bannerImg from "../../../../assets/images/gabriel.jpg";
import { useState } from "react";
import Loader from "../../../../shared/ui/Loader/Loader";
import { Link } from "react-router-dom";
import { routes } from "../../../../app/router/routes";

const Banner = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="banner">
      <img
        className={`banner__img ${isLoaded ? "banner__img--visible" : ""}`}
        src={bannerImg}
        alt="Gabriel"
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded && <Loader />}

      {isLoaded && (
        <div className="banner__content">
          <h1 className="banner__title important">
            Keanu Reeves's <br /> WHOAS base
          </h1>
          <div className="banner__meta">
            <Link
              to={routes.Favorites}
              className="banner__question text-accent"
            >
              Which one is your favorite?
            </Link>
            <span className="banner__description ">
              Every "whoa" said by actor Keanu Reeves in his movies
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
