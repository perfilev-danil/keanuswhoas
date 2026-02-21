import "./NotFound.css";
import { routes } from "../../app/providers/router/routes";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found centered">
      <p>
        Seems like your whoas <br /> are not found :C
      </p>
      <Link className="not-found__go-home" to={routes.Home}>
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
