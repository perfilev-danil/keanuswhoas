import "./Favorites.css";
import { useSelector } from "react-redux";
import List from "../../shared/ui/List/List";

const Favorites = () => {
  const { list } = useSelector((state) => state.favorites);

  return (
    <div className="favorites">
      <div className="favorites__question">
        <h1>
          Favorite <br /> whoas
        </h1>
        <p>
          Is he whoah <br /> enough?
        </p>
      </div>
      {list.length ? (
        <List items={list} />
      ) : (
        <div className="centered">
          No favorite <br /> whoas yet!
        </div>
      )}
    </div>
  );
};

export default Favorites;
