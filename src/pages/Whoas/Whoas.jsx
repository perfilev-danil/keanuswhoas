import "./Whoas.css";
import { useParams } from "react-router-dom";
import { useGetWhoasByMovieQuery } from "../../shared/api/moviesApi";
import List from "../../shared/ui/List/List";
import Movie from "./ui/Movie/Movie";
import Loader from "../../shared/ui/Loader/Loader";

const Whoas = () => {
  const { id } = useParams();
  const {
    data: whoas = [],
    isFetching,
    isError,
  } = useGetWhoasByMovieQuery({ movie: id });

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

  const movie = whoas[0];

  return (
    <div className="whoas">
      <Movie movie={movie} />
      <List items={whoas} />
    </div>
  );
};

export default Whoas;
