import "./Header.css";
import favoriteImg from "../../assets/ui/favorite.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { routes } from "../../app/router/routes";
import Button from "../../shared/ui/Button/Button";
import searchImg from "../../assets/ui/search.svg";
import cancelImg from "../../assets/ui/cancel.svg";

const Header = () => {
  const navigate = useNavigate();
  const favoritesCount = useSelector((state) => state.favorites.list.length);
  const [query, setQuery] = useState("");

  const handleClean = () => {
    setQuery("");
  };

  const handleSearch = () => {
    if (query) {
      navigate(routes.Whoas.replace(":movieName", encodeURIComponent(query)));
    } else {
      navigate(routes.Home);
    }
  };

  return (
    <header className="header">
      <div className="header__controls">
        <div className="header__search">
          <input
            className="header__search-input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movie..."
            aria-label="Search by movie name"
          />
          {query && (
            <Button
              src={cancelImg}
              bordered={false}
              colored={false}
              onClick={handleClean}
            />
          )}
        </div>
        <Button
          src={searchImg}
          bordered={true}
          whitened={true}
          onClick={handleSearch}
        />
      </div>
      <div className="header__nav">
        <NavLink to={routes.Home} className="header__logo logo">
          KEANU'S WHOAS
        </NavLink>
        <NavLink
          to={routes.Favorites}
          className="header__favorites"
          aria-label="Favorites"
        >
          <img className="header__favorites-icon" src={favoriteImg} />

          {favoritesCount > 0 && (
            <span className="header__favorites-badge">{favoritesCount}</span>
          )}
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
