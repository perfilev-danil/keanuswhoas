import "./VideoCard.css";
import playImg from "../../../assets/ui/play.svg";
import pauseImg from "../../../assets/ui/pause.svg";
import { useState, useRef, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromFavorites,
  saveToFavorites,
} from "../../../features/favorites/model/favoritesSlice";
import FavoritesButton from "../../../features/favorites/ui/FavoritesButton";
import Loader from "../Loader/Loader";

const VideoCard = ({ item }) => {
  const videoRef = useRef(null);
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { list } = useSelector((state) => state.favorites);
  const whoaVideo = item.video["360p"];

  const isFavorited = useMemo(() => {
    return list.some((item) => item.video["360p"] === whoaVideo);
  }, [list, whoaVideo]);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  const toggleFavorite = useCallback(() => {
    if (isFavorited) {
      dispatch(removeFromFavorites(item));
    } else {
      dispatch(saveToFavorites(item));
    }
  }, [dispatch, isFavorited, item]);

  return (
    <article className="videocard">
      <div className="videocard__video-wrapper">
        {!isLoaded && <Loader center />}
        <video
          className={`videocard__video ${isLoaded ? "videocard__video--visible" : ""}`}
          ref={videoRef}
          playsInline
          preload="auto"
          poster={item.poster}
          onLoadedData={handleVideoLoad}
          onLoadedMetadata={handleVideoLoad}
          onError={handleVideoLoad}
          onEnded={() => setIsPlaying(false)}
        >
          <source src={whoaVideo} type="video/mp4" />
        </video>
      </div>
      <div className="videocard__info">
        <p className="videocard__full-line">{item.full_line}</p>
        <div className="videocard_tools">
          <FavoritesButton onClick={toggleFavorite} isFavorited={isFavorited} />
          <button className="videocard__state" onClick={togglePlay}>
            <img src={isPlaying ? pauseImg : playImg} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default VideoCard;
