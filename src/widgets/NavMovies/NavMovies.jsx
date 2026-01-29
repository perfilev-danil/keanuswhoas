import "./NavMovies.css";
import { NavLink } from "react-router-dom";
import { useGetMoviesQuery } from "../../shared/api/moviesApi";
import Loader from "../../shared/ui/Loader/Loader";
import SidebarNote from "../SidebarNote/SidebarNote";

const NavMovies = () => {
  const { data: movies = [], isFetching, isError } = useGetMoviesQuery();

  if (isFetching) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="centered">
        No data! <br /> Please reload page!
      </div>
    );
  }

  return (
    <>
      <nav className="nav-movies" aria-label="Movies navigation">
        <ul className="nav-movies__list">
          {movies.map((movie) => (
            <li key={movie} className="nav-movies__item">
              <NavLink
                to={`/whoas/${movie}`}
                end
                className={({ isActive }) =>
                  isActive
                    ? "nav-movies__link nav-movies__link--active"
                    : "nav-movies__link"
                }
              >
                {movie}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <SidebarNote />
    </>
  );
};

export default NavMovies;
