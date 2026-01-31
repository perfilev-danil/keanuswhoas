import "./Banner.css";
import bannerImg from "../../../../assets/images/good-fortune.jpg";
import { useState } from "react";
import Loader from "../../../../shared/ui/Loader/Loader";

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
            The <br /> Keanu Reeves's <br /> whoas base
          </h1>
          <div className="banner__meta">
            <span className="banner__left">Which one is your favorite?</span>
            <span className="banner__right">
              every "whoa" said by actor Keanu Reeves in his movies
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
