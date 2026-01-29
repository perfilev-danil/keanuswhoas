import "./FavoriteButton.css";
import React from "react";
import favoriteImg from "../../../assets/ui/favorite.svg";
import nonFavoriteImg from "../../../assets/ui/non-favorite.svg";

const FavoritesButton = React.memo(({ onClick, isFavorited }) => {
  return (
    <button className="favorite-button" onClick={onClick}>
      <img
        className="favorite-button__img"
        src={isFavorited ? favoriteImg : nonFavoriteImg}
        alt=""
      />
    </button>
  );
});

export default FavoritesButton;
