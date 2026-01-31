import "./Header.css";
import favoriteImg from "../../assets/ui/favorite.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { routes } from "../../app/router/routes";
import useDebounce from "./hooks/useDebounce";

const Header = () => {
  const navigate = useNavigate();
  const favoritesCount = useSelector((state) => state.favorites.list.length);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  /*
  
  useEffect(() => {
    if (debouncedSearch.trim()) {
      navigate(`/whoas/${encodeURIComponent(debouncedSearch.trim())}`);
    } else {
      navigate(routes.Home);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);
  */

  useEffect(() => {
    const value = debouncedSearch.trim();
    if (!value) return;

    navigate(routes.Whoas.replace(":movieName", encodeURIComponent(value)));
  }, [debouncedSearch, navigate]);

  return (
    <header className="header">
      <div className="header__search">
        <input
          className="header__search-input"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search movie..."
          aria-label="Search by movie name"
        />
      </div>
      <div className="header__wrapper">
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
